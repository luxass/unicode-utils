import { fileURLToPath } from "node:url";
import { expect, it } from "vitest";
import { getPackageExportsManifest } from "vitest-package-exports";

it("exports-snapshot", async () => {
  const manifest = await getPackageExportsManifest({
    importMode: "src",
    cwd: fileURLToPath(import.meta.url),
  });

  expect(manifest.exports).toMatchInlineSnapshot(`
      {
        ".": {
          "RawDataFile": "function",
          "UNICODE_DRAFT_VERSION": "string",
          "UNICODE_LATEST_VERSION": "string",
          "UNICODE_MAPPINGS": "object",
          "UNICODE_VERSIONS": "object",
          "UNICODE_VERSIONS_WITH_UCD": "object",
          "expandHexRange": "function",
          "fromHexToCodepoint": "function",
          "inferFileName": "function",
          "inferVersion": "function",
          "isCommentLine": "function",
          "isEmptyLine": "function",
          "isMissingAnnotation": "function",
          "mapUnicodeVersion": "function",
          "parseDataFileHeading": "function",
          "parseMissingAnnotation": "function",
          "stripHex": "function",
        },
        "./data-files": {
          "RawDataFile": "function",
          "inferFileName": "function",
          "inferVersion": "function",
          "isCommentLine": "function",
          "isEmptyLine": "function",
          "isMissingAnnotation": "function",
          "parseDataFileHeading": "function",
          "parseMissingAnnotation": "function",
        },
      }
  `);
});
