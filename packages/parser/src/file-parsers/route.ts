import {
  ARABIC_SHAPING_PARSER,
  BIDI_BRACKETS_PARSER,
  BIDI_MIRRORING_PARSER,
  BLOCKS_PARSER,
  CASE_FOLDING_PARSER,
  COMPOSITION_EXCLUSIONS_PARSER,
  DERIVED_AGE_PARSER,
  DERIVED_CORE_PROPERTIES_PARSER,
  EAST_ASIAN_WIDTH_PARSER,
  HANGUL_SYLLABLE_TYPE_PARSER,
  LINE_BREAK_PARSER,
  NAME_ALIASES_PARSER,
  NAMES_LIST_PARSER,
  PROP_LIST_PARSER,
  PROPERTY_ALIASES_PARSER,
  PROPERTY_VALUE_ALIASES_PARSER,
  SCRIPT_EXTENSIONS_PARSER,
  SCRIPTS_PARSER,
  SPECIAL_CASING_PARSER,
  UNICODE_DATA_PARSER,
} from "./definitions/index";
import type { FileParser } from "./types";

/**
 * Lookup map from normalised fileName to FileParser.
 * Keys are lowercase with spaces, hyphens, and underscores removed.
 */
const PARSERS: Record<string, FileParser> = {
  blocks: BLOCKS_PARSER,
  scripts: SCRIPTS_PARSER,
  unicodedata: UNICODE_DATA_PARSER,
  derivedage: DERIVED_AGE_PARSER,
  linebreak: LINE_BREAK_PARSER,
  namealiases: NAME_ALIASES_PARSER,
  casefolding: CASE_FOLDING_PARSER,
  propertyaliases: PROPERTY_ALIASES_PARSER,
  propertyvaluealiases: PROPERTY_VALUE_ALIASES_PARSER,
  nameslist: NAMES_LIST_PARSER,
  eastasianwidth: EAST_ASIAN_WIDTH_PARSER,
  arabicshaping: ARABIC_SHAPING_PARSER,
  bidibrackets: BIDI_BRACKETS_PARSER,
  hangulsyllabletype: HANGUL_SYLLABLE_TYPE_PARSER,
  scriptextensions: SCRIPT_EXTENSIONS_PARSER,
  derivedcoreproperties: DERIVED_CORE_PROPERTIES_PARSER,
  proplist: PROP_LIST_PARSER,
  specialcasing: SPECIAL_CASING_PARSER,
  compositionexclusions: COMPOSITION_EXCLUSIONS_PARSER,
  bidimirroring: BIDI_MIRRORING_PARSER,
};

/**
 * Resolve the correct FileParser for a given fileName and version.
 * Returns undefined if the file is unknown (caller uses generic fallback).
 *
 * Version-specific routing: add if/else branches here when a file's format
 * changes across Unicode versions.
 */
export function resolve(
  fileName: string | undefined,
  _version: string | undefined,
): FileParser | undefined {
  if (!fileName) return undefined;

  // Normalise: lowercase, remove spaces, hyphens, underscores
  const key = fileName.toLowerCase().replace(/[\s\-_]/g, "");

  // Version-specific overrides go here as needed, e.g.:
  // if (key === "unicodedata" && _version && compareSemver(_version, "5.0.0") < 0) {
  //   return UNICODE_DATA_PARSER_V4;
  // }

  return PARSERS[key];
}
