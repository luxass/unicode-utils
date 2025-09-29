/**
 * The current draft version of the Unicode standard
 */
export const UNICODE_DRAFT_VERSION = "" as const;

/**
 * The latest stable version of the Unicode standard
 */
export const UNICODE_STABLE_VERSION = "17.0.0" as const;

/**
 * Complete list of Unicode versions with their metadata.
 * Each version includes:
 * - version: The Unicode standard version number
 * - documentationUrl: URL to the version's documentation
 * - date: Release year
 * - ucdUrl: URL to the Unicode Character Database for this version
 */
export { UNICODE_VERSION_METADATA } from "./data/unicode-version-metadata";

/**
 * Metadata for a Unicode standard version
 */
export type { UnicodeVersionMetadata } from "./data/unicode-version-metadata";
