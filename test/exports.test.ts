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
          "DASH_BOUNDARY_REGEX": "object",
          "EQUALS_BOUNDARY_REGEX": "object",
          "HASH_BOUNDARY_REGEX": "object",
          "RawDataFile": "function",
          "UCD_PATH_MAPPINGS": "object",
          "UNICODE_DRAFT_VERSION": "string",
          "UNICODE_STABLE_VERSION": "string",
          "UNICODE_TO_UCD_VERSION_MAPPINGS": "object",
          "UNICODE_VERSION_METADATA": "object",
          "expandHexRange": "function",
          "fromHexToCodepoint": "function",
          "getCurrentDraftVersion": "function",
          "hasSections": "function",
          "hasUCDFolderPath": "function",
          "inferFileName": "function",
          "inferVersion": "function",
          "isBoundaryLine": "function",
          "isCommentLine": "function",
          "isDashBoundary": "function",
          "isEOFMarker": "function",
          "isEmptyLine": "function",
          "isEqualsBoundary": "function",
          "isHashBoundary": "function",
          "isLineWithData": "function",
          "isMissingAnnotation": "function",
          "parseDataFileHeading": "function",
          "parseFileNameLine": "function",
          "parseMissingAnnotation": "function",
          "parseSections": "function",
          "resolveUCDVersion": "function",
          "stripHex": "function",
        },
        "./data-files": {
          "DASH_BOUNDARY_REGEX": "object",
          "EQUALS_BOUNDARY_REGEX": "object",
          "HASH_BOUNDARY_REGEX": "object",
          "RawDataFile": "function",
          "hasSections": "function",
          "inferFileName": "function",
          "inferVersion": "function",
          "isBoundaryLine": "function",
          "isCommentLine": "function",
          "isDashBoundary": "function",
          "isEOFMarker": "function",
          "isEmptyLine": "function",
          "isEqualsBoundary": "function",
          "isHashBoundary": "function",
          "isLineWithData": "function",
          "isMissingAnnotation": "function",
          "parseDataFileHeading": "function",
          "parseFileNameLine": "function",
          "parseMissingAnnotation": "function",
          "parseSections": "function",
        },
      }
  `);
});
