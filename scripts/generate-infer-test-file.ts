/* eslint-disable node/prefer-global/process */
import { exec } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";
import { dedent } from "@luxass/utils";

const execAsync = promisify(exec);

async function run() {
  const ucdFilesDir = join(process.cwd(), "ucd-files");

  // read ucd-files for versions
  const versions = readdirSync(ucdFilesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  if (versions.length === 0) {
    throw new Error("No version directories found in ucd-files");
  }

  const promises = versions.map(async (version) => {
    const versionDir = join(ucdFilesDir, version);

    if (!existsSync(versionDir)) {
      throw new Error(`Version directory does not exist: ${versionDir}`);
    }

    function readFiles(dir: string): string[] {
      const entries = readdirSync(dir, { withFileTypes: true });

      const files = entries
        .filter((entry) => !entry.isDirectory())
        .map((entry) => join(dir, entry.name));

      const folders = entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => join(dir, entry.name));

      const subFiles = folders.flatMap((folder) => readFiles(folder));

      return [...files, ...subFiles];
    }

    function trimVersionString(version: string): string {
    // remove trailing zeros and dots
      const trimmed = version.replace(/(\.0+)+$/, "").replace(/\.0+$/, "");
      // remove leading zeros
      return trimmed.replace(/^0+(\d)/, "$1");
    }

    const formattedVersion = trimVersionString(version);

    const files = readFiles(versionDir);

    const cases = files.filter((file) => !file.endsWith(".comments.txt")).map((filePath) => {
      const fileName = filePath.replace(`${versionDir}/`, "");
      return dedent`
        it("inferHeading(${fileName})", () => {
          const content = ucdFiles.file("${fileName}");
          const expected = ucdFiles.expected("${fileName}.comments.txt");

          expect(inferHeading(content)).toBe(expected);
        });
    `;
    }).join("\n\n");

    const content = dedent`
    import { describe, expect, it } from "vitest";
    import { mapUCDFiles } from "../__utils";
    import { inferHeading } from "../src/inference/heading";

    const ucdFiles = await mapUCDFiles("${formattedVersion}");

    describe("heading inference ${formattedVersion}", async () => {
      ${cases}
    });
  `;

    console.log(`Test file generated: heading-${formattedVersion}.test.ts`);
    writeFile(`./test/inference/heading-${formattedVersion}.test.ts`, content, "utf-8");
  });

  await Promise.all(promises);
  console.log("All test files generated successfully.");

  // format the generated test files
  await execAsync("pnpm eslint --fix ./test/inference/**/*.test.ts");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
