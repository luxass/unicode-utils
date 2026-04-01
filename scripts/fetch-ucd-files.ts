import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const API_BASE = "https://api.ucdjs.dev";
const UCD_FILES_DIR = join(process.cwd(), "ucd-files");

interface FileTreeEntry {
  type: "file" | "directory";
  name: string;
  path: string;
  lastModified: number;
  children?: FileTreeEntry[];
}

function collectTxtFiles(entries: FileTreeEntry[], prefix: string = ""): string[] {
  const result: string[] = [];

  for (const entry of entries) {
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.type === "file" && entry.name.endsWith(".txt") && !entry.name.includes("Test")) {
      result.push(relativePath);
    } else if (entry.type === "directory" && entry.children) {
      result.push(...collectTxtFiles(entry.children, relativePath));
    }
  }

  return result;
}

async function fetchFileTree(version: string): Promise<FileTreeEntry[]> {
  const url = `${API_BASE}/api/v1/versions/${version}/file-tree`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch file tree for ${version}: ${res.status}`);
  }

  return res.json() as Promise<FileTreeEntry[]>;
}

async function fetchFileContent(filePath: string): Promise<string> {
  const url = `${API_BASE}/api/v1/files${filePath}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${filePath}: ${res.status}`);
  }

  return res.text();
}

async function run() {
  const versions = readdirSync(UCD_FILES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .toSorted();

  if (versions.length === 0) {
    throw new Error("No version directories found in ucd-files");
  }

  for (const versionDir of versions) {
    const version = versionDir.replace(/^v/, "");
    const localDir = join(UCD_FILES_DIR, versionDir);

    console.log(`\n${versionDir}: fetching file tree...`);

    let tree: FileTreeEntry[];
    try {
      tree = await fetchFileTree(version);
    } catch (err) {
      console.warn(`  Skipping ${versionDir}: ${String(err)}`);
      continue;
    }

    const remoteFiles = collectTxtFiles(tree);
    console.log(`  ${remoteFiles.length} .txt files found`);

    const missing = remoteFiles.filter((file) => !existsSync(join(localDir, file)));

    if (missing.length === 0) {
      console.log(`  All files up to date.`);
      continue;
    }

    console.log(`  ${missing.length} files to fetch...`);

    for (const file of missing) {
      const localPath = join(localDir, file);
      mkdirSync(dirname(localPath), { recursive: true });

      const remotePath = `/${version}/ucd/${file}`;
      try {
        const content = await fetchFileContent(remotePath);
        writeFileSync(localPath, content, "utf-8");
        console.log(`  ✓ ${file}`);
      } catch (err) {
        console.warn(`  ✗ ${file}: ${String(err)}`);
      }
    }

    console.log(`  Fetched ${missing.length} new files.`);
  }

  console.log("\nDone.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
