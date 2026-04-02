import { createTsdownConfig } from "@unicode-utils-tooling/tsdown-config";

export default createTsdownConfig({
  entry: [
    "./src/index.ts",
    "./src/models/data-file.ts",
    "./src/models/raw-data-file.ts",
    "./src/line-helpers.ts",
  ],
});
