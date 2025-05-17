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
    expected(file: string) {
      if (!file.endsWith(".comments.txt")) {
        throw new Error(`File ${file} is not a comment file`);
      }
      const filePath = join(__dirname, "../ucd-files", `v${version}`, file);
      return readFileSync(filePath, "utf-8") || null;
    },
    file(file: string) {
      const filePath = join(__dirname, "../ucd-files", `v${version}`, file);

      // if the file is not in the list, throw an error.
      // if the file is in the list, read the file and remove the file from the list
      if (!files.includes(file)) {
        throw new Error(`File ${file} not found`);
      }

      const content = readFileSync(filePath, "utf-8");

      // remove the file from the list
      files.splice(files.indexOf(file), 1);
      return content;
    },
  };
}
