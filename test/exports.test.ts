import { fileURLToPath } from "node:url";
import { expect, it } from "vitest";
import { getPackageExportsManifest } from "vitest-package-exports";

it("exports-snapshot", async () => {
  const manifest = await getPackageExportsManifest({
    importMode: "src",
    cwd: fileURLToPath(import.meta.url),
  });

  expect(manifest.exports).toEqual({
    ".": {
      expandHexRange: "function",
      fromHexToCodepoint: "function",
      getBoundaryLineStyle: "function",
      getCurrentDraftVersion: "function",
      hasUCDFolderPath: "function",
      inferFileName: "function",
      inferVersion: "function",
      isBoundaryLine: "function",
      isCommentLine: "function",
      isDashBoundary: "function",
      isEmptyLine: "function",
      isEOFMarker: "function",
      isEqualsBoundary: "function",
      isHashBoundary: "function",
      isLineWithData: "function",
      isMissingAnnotation: "function",
      parseFileNameLine: "function",
      parseMissingAnnotation: "function",
      RawDataFile: "function",
      resolveUCDVersion: "function",
      stripHex: "function",
      UCD_PATH_MAPPINGS: "object",
      UNICODE_DRAFT_VERSION: "string",
      UNICODE_STABLE_VERSION: "string",
      UNICODE_TO_UCD_VERSION_MAPPINGS: "object",
      UNICODE_VERSION_METADATA: "object",
    },
    "./constants": {
      UCD_PATH_MAPPINGS: "object",
      UNICODE_DRAFT_VERSION: "string",
      UNICODE_STABLE_VERSION: "string",
      UNICODE_VERSION_METADATA: "object",
    },
    "./datafile": {
      NodeTypes: "object",
      RawDataFile: "function",
      astUtils: "object",
      hasSections: "function",
      isBoundaryNode: "function",
      isCommentNode: "function",
      isEmptyCommentNode: "function",
      isDataNode: "function",
      isEmptyNode: "function",
      isNode: "function",
      isRootNode: "function",
      isUnknownNode: "function",
      parseSections: "function",
    },
    "./line-helpers": {
      getBoundaryLineStyle: "function",
      inferFileName: "function",
      inferVersion: "function",
      isBoundaryLine: "function",
      isCommentLine: "function",
      isDashBoundary: "function",
      isEmptyLine: "function",
      isEOFMarker: "function",
      isEqualsBoundary: "function",
      isHashBoundary: "function",
      isLineWithData: "function",
      isMissingAnnotation: "function",
      parseFileNameLine: "function",
      parseMissingAnnotation: "function",
    },
  });
});
