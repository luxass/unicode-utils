import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { loadGenerationInput } from "./generate-constants/input";
import {
  renderUnicodeVersionConstants,
  renderUnicodeVersionMetadata,
} from "./generate-constants/render";

async function run() {
  const generationInput = loadGenerationInput(process.env);
  if (generationInput == null) {
    return;
  }

  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const dataDir = join(scriptDir, "..", "src", "data");
  await mkdir(dataDir, { recursive: true });

  await writeFile(
    join(dataDir, "unicode-version-constants.ts"),
    renderUnicodeVersionConstants(generationInput),
    "utf-8",
  );
  await writeFile(
    join(dataDir, "unicode-version-metadata.ts"),
    renderUnicodeVersionMetadata(generationInput.releases),
    "utf-8",
  );

  console.log("✅ Successfully generated TypeScript data files with strict typing!");
  console.log("📁 Created: unicode-version-constants.ts");
  console.log("📁 Created: unicode-version-metadata.ts");
}

run().catch((error) => {
  console.error("Error updating files:", error);
  process.exit(1);
});
