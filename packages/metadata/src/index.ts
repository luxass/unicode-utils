/**
 * The current draft version of the Unicode standard
 */
export { UNICODE_DRAFT_VERSION } from "./data/unicode-version-constants";

/**
 * The latest stable version of the Unicode standard
 */
export { UNICODE_STABLE_VERSION } from "./data/unicode-version-constants";

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
