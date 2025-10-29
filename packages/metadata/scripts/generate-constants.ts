import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import { dedent } from "@luxass/utils";

function getEnvVar(name: string): string | undefined {
  return process.env[name];
}

const propertyDocs: Record<string, string> = {
  version: "The Unicode version number.\nFor example, \"17.0.0\".",
  documentationUrl: "The URL to the official Unicode documentation for this version.",
  date: "The release date of this version.",
  url: "The URL to the official Unicode data files for this version.",
  mappedUcdVersion: "The mapped UCD version for this Unicode version, if any.",
  type: "The stability type of this version.",
};

const propertyKeys: string[] = [];
const interfaceProperties = new Map<string, {
  types: Set<string>;
  hasNull: boolean;
  comment?: string;
}>();

async function run() {
  const dir = new URL("..", import.meta.url).pathname;

  // Check for required environment variables
  const allReleasesEnv = getEnvVar("ALL_RELEASES");
  const latestReleaseEnv = getEnvVar("LATEST_RELEASE");
  const currentDraftEnv = getEnvVar("CURRENT_DRAFT");

  if (!allReleasesEnv || !latestReleaseEnv || currentDraftEnv === undefined) {
    console.warn("⚠️  Skipping metadata generation: Required environment variables not set");
    console.warn("   Required: ALL_RELEASES, LATEST_RELEASE, CURRENT_DRAFT");
    console.warn("   This is normal for local development - metadata files already exist");
    return;
  }

  console.log("📦 Generating metadata from environment variables");

  const ALL_RELEASES: unknown[] = JSON.parse(allReleasesEnv);
  const LATEST_RELEASE = latestReleaseEnv;
  const CURRENT_DRAFT = currentDraftEnv;

  // validate that latest version is in versions array
  const isInVersions = ALL_RELEASES.find((release) => {
    if (typeof release !== "object" || release == null) {
      return false;
    }

    if (!("version" in release) && typeof (release as any).version !== "string") {
      return false;
    }

    return (release as any).version === LATEST_RELEASE;
  });
  if (!isInVersions) {
    throw new Error(`Latest version ${LATEST_RELEASE} not found in versions array`);
  }

  // Write to the metadata package
  const metadataPackageDir = join(dir, "..");
  const dataDir = join(metadataPackageDir, "src", "data");
  await mkdir(dataDir, { recursive: true });

  // Clean up any old JSON files (migration to TypeScript)
  try {
    await unlink(join(dataDir, "unicode-version-metadata.json"));
  } catch {
    // File doesn't exist, which is fine
  }

  for (const releaseObj of ALL_RELEASES) {
    if (typeof releaseObj !== "object" || releaseObj == null) {
      throw new Error("Invalid release object in ALL_RELEASES");
    }

    for (const [key, value] of Object.entries(releaseObj)) {
      if (!interfaceProperties.has(key)) {
        interfaceProperties.set(key, { types: new Set(), hasNull: false, comment: propertyDocs[key] });
        propertyKeys.push(key);
      }

      const prop = interfaceProperties.get(key)!;

      if (value == null) {
        prop.hasNull = true;
        continue;
      }

      if (typeof value === "string") {
        if (key === "type") {
          prop.types.add(`"${value}"`);

          // Ensure that both "stable" and "draft" are in the type union
          // Since we are inferring types from data, we need to add both possible values
          if (!prop.types.has("\"stable\"")) {
            prop.types.add("\"stable\"");
          }
          if (!prop.types.has("\"draft\"")) {
            prop.types.add("\"draft\"");
          }
          continue;
        }

        prop.types.add("string");
        continue;
      }

      if (typeof value === "number") {
        prop.types.add("number");
        continue;
      }

      if (typeof value === "boolean") {
        prop.types.add("boolean");
        continue;
      }

      throw new Error(`Unsupported property type for key "${key}": ${typeof value}`);
    }
  }

  function formatValue(value: unknown): string {
    if (value === null) return "null";
    if (typeof value === "string") return `"${value}"`;
    return String(value);
  }

  function mapReleaseObject(releaseObj: Record<string, unknown>): string {
    const entries = propertyKeys
      .map((key) => `${key}: ${formatValue(releaseObj[key])}`)
      .join(", ");
    return `{ ${entries} }`;
  }

  const interfaceProps = Array.from(interfaceProperties.entries())
    .map(([key, { types, hasNull, comment }]) => {
      const typeString = Array.from(types).join(" | ");
      const fullType = hasNull ? `${typeString} | null` : typeString;
      const commentBlock = comment
        ? `/**\n         * ${comment.split("\n").join("\n         * ")}\n         */\n        `
        : "";
      return `${commentBlock}${key}: ${fullType};`;
    })
    .join("\n\n        ");

  // generate unicode-version-metadata.ts
  const unicodeVersionMetadataContent = dedent`
      /**
       * This file is auto-generated by scripts/generate-constants.ts
       * Do not edit it manually.
       * To regenerate, run the script with:
       *  pnpm --filter @unicode-utils/metadata generate:constants
       */

      export const UNICODE_VERSION_METADATA: UnicodeVersionMetadata[] = [
        ${ALL_RELEASES.map((releaseObj) => {
          if (typeof releaseObj !== "object" || releaseObj == null) {
            throw new Error("Invalid release object in ALL_RELEASES");
          }

          return mapReleaseObject(releaseObj as Record<string, unknown>);
        }).join(",\n        ")}
      ];

      export interface UnicodeVersionMetadata {
        ${interfaceProps}
      };
    `;

  await writeFile(
    join(dataDir, "unicode-version-metadata.ts"),
    unicodeVersionMetadataContent,
    "utf-8",
  );

  // update version numbers in metadata package index.ts
  const metadataIndexPath = join(metadataPackageDir, "src", "index.ts");
  let content = await readFile(metadataIndexPath, "utf-8");

  // replace the version numbers
  content = content.replace(
    /export const UNICODE_DRAFT_VERSION = "[\d.]*" as const;/,
    `export const UNICODE_DRAFT_VERSION = "${CURRENT_DRAFT}" as const;`,
  );
  content = content.replace(
    /export const UNICODE_STABLE_VERSION = "[\d.]+" as const;/,
    `export const UNICODE_STABLE_VERSION = "${LATEST_RELEASE}" as const;`,
  );

  // write the updated index file
  await writeFile(metadataIndexPath, content, "utf-8");
  console.log("✅ Successfully generated TypeScript data files with strict typing!");
  console.log("📁 Created: unicode-version-metadata.ts");
  console.log("🔢 Updated version numbers in @unicode-utils/metadata index.ts");
}

run().catch((error) => {
  console.error("Error updating files:", error);
  process.exit(1);
});
