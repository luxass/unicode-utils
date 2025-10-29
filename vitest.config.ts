import { existsSync, readdirSync } from "node:fs";
import { defineConfig, type TestProjectConfiguration } from "vitest/config";

const root = new URL("./", import.meta.url).pathname;

const pkgRoot = (pkg: string) =>
  new URL(`./packages/${pkg}`, import.meta.url).pathname;
const alias = (pkg: string) => `${pkgRoot(pkg)}/src`;

const aliases = readdirSync(new URL("./packages", import.meta.url).pathname)
  .filter((dir) => existsSync(pkgRoot(dir) + "/package.json"))
  .reduce<Record<string, string>>(
    (acc, pkg) => {
      acc[`@luxass/${pkg}`] = alias(pkg);
      return acc;
    },
    {});

const workspaces = readdirSync(new URL("./packages", import.meta.url).pathname)
  .filter((dir) => existsSync(pkgRoot(dir) + "/package.json"))
  .map((dir) => {
    return {
      extends: true,
      test: {
        server: {
          deps: {
            inline: [
              "vitest-package-exports",
            ],
          },
        },
        include: [`./packages/${dir}/**/*.{test,spec}.?(c|m)[jt]s?(x)`],
        name: dir,
      }
    } satisfies TestProjectConfiguration;
  });

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      include: ["**/src/**"],
    },
    environment: "node",
    mockReset: true,
    projects: workspaces
  },
  esbuild: { target: "es2022" },
  resolve: { alias: aliases },
})
