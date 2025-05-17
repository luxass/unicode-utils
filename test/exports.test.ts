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
          "EQUALS_BOUNDARY_REGEX": "object",
          "HASH_BOUNDARY_REGEX": "object",
          "RawDataFile": "function",
          "UNICODE_DRAFT_VERSION": "string",
          "UNICODE_LATEST_VERSION": "string",
          "UNICODE_MAPPINGS": "object",
          "UNICODE_VERSIONS": "object",
          "UNICODE_VERSIONS_WITH_UCD": "object",
          "expandHexRange": "function",
          "fromHexToCodepoint": "function",
          "hasSections": "function",
          "hasUCDPath": "function",
          "inferFileName": "function",
          "inferVersion": "function",
          "isCommentLine": "function",
          "isEmptyLine": "function",
          "isEqualsBoundary": "function",
          "isHashBoundary": "function",
          "isLineWithData": "function",
          "isMissingAnnotation": "function",
          "mapUnicodeVersion": "function",
          "parseDataFileHeading": "function",
          "parseMissingAnnotation": "function",
          "parseSections": "function",
          "stripHex": "function",
        },
        "./data-files": {
          "EQUALS_BOUNDARY_REGEX": "object",
          "HASH_BOUNDARY_REGEX": "object",
          "RawDataFile": "function",
          "hasSections": "function",
          "inferFileName": "function",
          "inferVersion": "function",
          "isCommentLine": "function",
          "isEmptyLine": "function",
          "isEqualsBoundary": "function",
          "isHashBoundary": "function",
          "isLineWithData": "function",
          "isMissingAnnotation": "function",
          "parseDataFileHeading": "function",
          "parseMissingAnnotation": "function",
          "parseSections": "function",
        },
      }
  `);
});
