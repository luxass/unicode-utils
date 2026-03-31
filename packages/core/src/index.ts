export { getCurrentDraftVersion, type GetCurrentDraftVersionOptions } from "./draft";

export { expandHexRange, fromHexToCodepoint, stripHex } from "./hexcodes";

export { resolveUCDVersion, UNICODE_TO_UCD_VERSION_MAPPINGS } from "./mappings";
export { buildUCDPath, hasUCDFolderPath } from "./path";

export {
  UNICODE_DRAFT_VERSION,
  UNICODE_STABLE_VERSION,
  UNICODE_VERSION_METADATA,
  type UnicodeVersionMetadata,
} from "@unicode-utils/metadata";

export {
  type InferredHeader,
  inferHeaderFromAst,
  getBoundaryLineStyle,
  getPropertyValue,
  inferFileName,
  inferVersion,
  isBoundaryLine,
  isCommentLine,
  isDashBoundary,
  isEmptyLine,
  isEOFMarker,
  isEqualsBoundary,
  isHashBoundary,
  isLineWithData,
  isMissingAnnotation,
  isPropertyLine,
  parseFileNameLine,
  parseMissingAnnotation,
  RawDataFile,
  trimCommentLine,
} from "@unicode-utils/parser";
