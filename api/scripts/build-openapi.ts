import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { createApp } from "../src/app";
import { buildOpenApiConfig } from "../src/openapi";

const root = path.resolve(import.meta.dirname, "../");

async function run() {
  // Create the app with all routes using the shared function
  const app = createApp();

  const config = buildOpenApiConfig("x.y.z", [
    {
      url: "https://unicode-api.luxass.dev",
      description: "Production Environment",
    },
  ]);

  const obj = app.getOpenAPIDocument(config);

  if (!existsSync(path.join(root.toString(), "./node_modules/.openapi"))) {
    await mkdir(path.join(root.toString(), "./node_modules/.openapi"), { recursive: true });
  }

  await writeFile(path.join(root.toString(), "./node_modules/.openapi/openapi.json"), JSON.stringify(obj, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
