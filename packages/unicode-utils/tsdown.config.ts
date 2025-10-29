import { createTsdownConfig } from "@unicode-utils-tooling/tsdown-config";

export default createTsdownConfig({
  entry: [
    "./src/index.ts",
    "./src/constants.ts",
    "./src/line-helpers.ts",
    "./src/datafile.ts",
  ],
});
