import { defineWorkersProject } from "@cloudflare/vitest-pool-workers/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineWorkersProject({
  test: {
    name: "unicode.luxass.dev",
    poolOptions: {
      workers: {
        singleWorker: true,
        isolatedStorage: true,
        miniflare: {
          compatibilityDate: "2025-03-13",
          compatibilityFlags: ["nodejs_compat"],
          bindings: {
            ENVIRONMENT: "production",
          },
        },
        wrangler: {
          configPath: "./wrangler.jsonc",
        },
      },
    },
  },
  plugins: [
    tsconfigPaths(),
  ],
});
