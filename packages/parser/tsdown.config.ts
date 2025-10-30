import { createTsdownConfig } from "@unicode-utils-tooling/tsdown-config";

export default createTsdownConfig({
  entry: [
    "./src/index.ts",
    "./src/datafile.ts",
    "./src/line-helpers.ts",
  ],
});
