import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";

function getRequiredEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function run() {
  // get required environment variables
  const versions = JSON.parse(getRequiredEnvVar("UNICODE_VERSIONS"));
  const ucdVersions = JSON.parse(getRequiredEnvVar("UNICODE_UCD_VERSIONS"));
  const latestVersion = getRequiredEnvVar("UNICODE_LATEST_VERSION");
  const draftVersion = process.env.UNICODE_DRAFT_VERSION || null;

  // validate that latest version is in versions array
  const isInVersions = versions.find(({ version }) => version === latestVersion);
  if (!isInVersions) {
    throw new Error(`Latest version ${latestVersion} not found in versions array`);
  }

  const constantsContent = `// This file is auto-generated. Do not edit directly.
// https://www.unicode.org/versions/enumeratedversions.html

export const UNICODE_VERSIONS = ${JSON.stringify(versions, null, 2)} as const;

export const UNICODE_DRAFT_VERSION = ${draftVersion ? `"${draftVersion}"` : "null"} as const;

export const UNICODE_LATEST_VERSION = "${latestVersion}" as const;

export const UNICODE_VERSIONS_WITH_UCD = ${JSON.stringify(ucdVersions, null, 2)} as const;

export type UnicodeVersion = typeof UNICODE_VERSIONS[number];
export type UnicodeUCDVersion = typeof UNICODE_VERSIONS_WITH_UCD[number];
`;

  await writeFile(join(process.cwd(), "src", "constants.ts"), constantsContent, "utf-8");
  console.log("Successfully generated constants.ts");
}

run().catch((error) => {
  console.error("Error generating constants:", error);
  process.exit(1);
});
