import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";

function getRequiredEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function ensureDataDir() {
  const dataDir = join(process.cwd(), "src", "data");
  await mkdir(dataDir, { recursive: true });
  return dataDir;
}

async function run() {
  // get required environment variables
  const versions = JSON.parse(getRequiredEnvVar("UNICODE_VERSIONS"));
  const ucdVersions = JSON.parse(getRequiredEnvVar("UNICODE_UCD_VERSIONS"));
  const latestVersion = getRequiredEnvVar("UNICODE_LATEST_VERSION");
  const draftVersion = process.env.UNICODE_DRAFT_VERSION || latestVersion.replace(/\d+/, (n) => String(Number(n) + 1));

  // validate that latest version is in versions array
  const isInVersions = versions.find(({ version }) => version === latestVersion);
  if (!isInVersions) {
    throw new Error(`Latest version ${latestVersion} not found in versions array`);
  }

  // write JSON files
  const dataDir = await ensureDataDir();

  await writeFile(
    join(dataDir, "unicode-version-metadata.json"),
    `${JSON.stringify(versions, null, 2)}\n`,
    "utf-8",
  );

  await writeFile(
    join(dataDir, "ucd-path-mappings.json"),
    JSON.stringify(`${ucdVersions.map(({ version, mappedVersion }) => ({
      unicodeVersion: version,
      ucdPath: mappedVersion,
    }))}\n`, null, 2),
    "utf-8",
  );

  // update version numbers in constants.ts
  const constantsPath = join(process.cwd(), "src", "constants.ts");
  let content = await readFile(constantsPath, "utf-8");

  // replace the version numbers
  content = content.replace(
    /export const UNICODE_DRAFT_VERSION = "[\d.]+" as const;/,
    `export const UNICODE_DRAFT_VERSION = "${draftVersion}" as const;`,
  );
  content = content.replace(
    /export const UNICODE_STABLE_VERSION = "[\d.]+" as const;/,
    `export const UNICODE_STABLE_VERSION = "${latestVersion}" as const;`,
  );

  // write the updated constants file
  await writeFile(constantsPath, content, "utf-8");
  console.log("Successfully updated JSON files and version numbers in constants.ts");
}

run().catch((error) => {
  console.error("Error updating files:", error);
  process.exit(1);
});
