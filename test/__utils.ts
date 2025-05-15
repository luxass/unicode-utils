import { readFileSync } from "node:fs";
import { glob } from "node:fs/promises";
import { join } from "node:path";

export function dataFileFixture(version: string, file: string) {
  return readFileSync(
    join(__dirname, "fixtures/data-files", `v${version}`, file),
    "utf-8",
  );
}

export function ucdFiles(version: string, file: string) {
  return readFileSync(
    join(__dirname, "../ucd-files", `v${version}`, file),
    "utf-8",
  );
}

export async function mapUCDFiles(version: string) {
  const files: string[] = [];
  const globbedFiles = glob([
    "**/*.txt",
  ], {
    cwd: join(__dirname, "../ucd-files", `v${version}`),
    exclude(fileName) {
      // exclude files that end with .comments.txt
      return fileName.endsWith(".comments.txt");
    },
  });

  for await (const file of globbedFiles) {
    files.push(file);
  }

  return {
    files,
    file(file: string) {
      files.splice(files.indexOf(file), 1);

      return readFileSync(
        join(__dirname, "../ucd-files", `v${version}`, file),
        "utf-8",
      );
    },
  };
}
