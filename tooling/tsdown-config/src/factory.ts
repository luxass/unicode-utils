import type { UserConfig as TSDownOptions } from "tsdown";
import { defineConfig } from "tsdown";

export const baseConfig = {
  exports: true,
  format: ["esm"],
  clean: true,
  dts: true,
  treeshake: true,
  publint: true,
  tsconfig: "./tsconfig.build.json",
  inputOptions: {
    onwarn: (warning, defaultHandler) => {
      if (warning.code === "UNRESOLVED_IMPORT") {
        throw new Error(
          `Unresolved import: ${warning.message}. Please ensure all dependencies are installed and paths are correct.`,
        );
      }

      return defaultHandler(warning);
    },
  },
} satisfies TSDownOptions;

export function createTsdownConfig(overrides: Partial<TSDownOptions> = {}) {
  return defineConfig({
    ...baseConfig,
    ...overrides,
    entry: overrides.entry || ["./src/index.ts"],
  });
}
