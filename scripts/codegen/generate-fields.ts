import { generatePackageExports } from "./fields";
import { processVersion } from "./generate-fields/process-version";
import { createRuntime } from "./generate-fields/runtime";

async function processVersionsWithConcurrency() {
  const runtime = await createRuntime();
  const workers = Math.min(runtime.versionConcurrency, Math.max(runtime.versions.length, 1));
  console.log(`processing versions with concurrency=${workers}`);

  async function runWorker(workerIndex: number) {
    for (let index = workerIndex; index < runtime.versions.length; index += workers) {
      await processVersion(runtime.versions[index]!, runtime);
    }
  }

  await Promise.all(Array.from({ length: workers }, (_, workerIndex) => runWorker(workerIndex)));
  console.log("all versions processed; updating package exports");
  await generatePackageExports(runtime.outputDir);
  console.log("updated index.ts and package.json exports");
}

await processVersionsWithConcurrency();
