import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "./src/index.ts",
  ],
  exports: true,
  format: ["esm"],
  clean: true,
  dts: true,
  treeshake: true,
  publint: true,
});
