import type { HonoEnv } from "../types";
import { OpenAPIHono } from "@hono/zod-openapi";
import { hasUCDFolderPath, resolveUCDVersion, UNICODE_VERSION_METADATA } from "@luxass/unicode-utils";
import { cache } from "hono/cache";
import picomatch from "picomatch";
import { createError } from "../utils";
import { GET_UNICODE_FILES_BY_VERSION_ROUTE } from "./v1_unicode-files.openapi";

export const V1_UNICODE_FILES_ROUTER = new OpenAPIHono<HonoEnv>().basePath("/api/v1/unicode-files");

interface Entry {
  name: string;
  path: string;
  children?: Entry[];
}

interface UnicodeEntry {
  type: "file" | "directory";
  name: string;
  path: string;
}

V1_UNICODE_FILES_ROUTER.get("*", cache({
  cacheName: "unicode-api:files",
  cacheControl: "max-age=604800",
}));

V1_UNICODE_FILES_ROUTER.openapi(GET_UNICODE_FILES_BY_VERSION_ROUTE, async (c) => {
  const version = c.req.param("version");
  const {
    exclude,
    includeTests = false,
    includeReadmes = false,
    includeHTMLFiles = false,
  } = c.req.query();

  if (!UNICODE_VERSION_METADATA.map((v) => v.version)
    .includes(version as typeof UNICODE_VERSION_METADATA[number]["version"])) {
    return createError(c, 400, "Unicode version does not have UCD");
  }

  const mappedVersion = resolveUCDVersion(version);
  if (!mappedVersion) {
    return createError(c, 400, "Invalid Unicode version");
  }

  const extraPath = hasUCDFolderPath(mappedVersion) ? "/ucd" : "";
  // eslint-disable-next-line no-console
  console.info({
    version,
    mappedVersion,
    extraPath,
    exclude,
    includeTests,
    includeReadmes,
    includeHTMLFiles,
  });

  const excludePatterns = exclude?.split(",").map((p) => p.trim()).filter(Boolean) || [];

  if (!includeTests || includeTests !== "true") {
    excludePatterns.push("**/*Test*");
  }

  if (!includeReadmes || includeReadmes !== "true") {
    excludePatterns.push("**/Readme.txt");
  }

  if (!includeHTMLFiles || includeHTMLFiles !== "true") {
    excludePatterns.push("**/*.html");
  }

  // exclude zip and pdf by default
  excludePatterns.push("**/*.zip", "**/*.pdf");

  async function processDirectory(entries: UnicodeEntry[]): Promise<Entry[]> {
    // process all directories in parallel
    const dirPromises = entries
      .filter((entry) => entry.type === "directory")
      .map(async (dir) => {
        const response = await fetch(`${c.env.PROXY_URL}/${mappedVersion}${extraPath}/${dir.path}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch directory: ${dir.path}`);
        }
        const children = await response.json() as UnicodeEntry[];
        const processedChildren = await processDirectory(children);
        return {
          name: dir.name,
          path: dir.path,
          children: processedChildren,
        };
      });

    // process all files
    const fileEntries = entries
      .filter((entry) => {
        return entry.type === "file";
      })
      .map((file) => ({
        name: file.name,
        path: file.path,
      }));

    const dirEntries = await Promise.all(dirPromises);

    return [...fileEntries, ...dirEntries];
  }

  function filterEntriesRecursive(entries: Entry[]) {
    if (excludePatterns.length === 0) return entries;

    const isMatch = picomatch(excludePatterns, {
      dot: true,
      nocase: true,
    });

    function filterEntries(entryList: Entry[], prefix = "") {
      const result: Entry[] = [];
      for (const entry of entryList) {
        const fullPath = prefix ? `${prefix}/${entry.path}` : entry.path;

        if (!entry.children) {
          if (!isMatch(fullPath)) {
            result.push(entry);
          }
        } else {
          const filteredChildren = filterEntries(entry.children, fullPath);
          if (filteredChildren.length > 0) {
            result.push({ ...entry, children: filteredChildren });
          }
        }
      }
      return result;
    }

    return filterEntries(entries);
  }

  try {
    const response = await fetch(`${c.env.PROXY_URL}/${mappedVersion}${extraPath}`);
    if (!response.ok) {
      return createError(c, 502, "Failed to fetch root directory");
    }

    const rootEntries = await response.json() as UnicodeEntry[];
    const result = await processDirectory(rootEntries);

    return c.json(filterEntriesRecursive(result), 200);
  } catch (error) {
    console.error("Error processing directory:", error);
    return createError(c, 500, "Failed to fetch file mappings");
  }
});
