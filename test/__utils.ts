import { readFileSync } from "node:fs";
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
