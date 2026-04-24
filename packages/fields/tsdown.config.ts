import { createTsdownConfig } from "@unicode-utils-tooling/tsdown-config";

export default createTsdownConfig({
  entry: ["./src/index.ts", "./src/v*/index.ts"],
});
