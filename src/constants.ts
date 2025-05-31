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
 * The current draft version of the Unicode standard
 */
export const UNICODE_DRAFT_VERSION = "17.0.0" as const;

/**
 * The latest stable version of the Unicode standard
 */
export const UNICODE_STABLE_VERSION = "16.0.0" as const;

/**
 * Mapping between Unicode versions and their corresponding UCD (Unicode Character Database) paths.
 * Some versions use special UCD paths that differ from their version number.
 * For example:
 * - Unicode 4.0.1 → UCD path "4.0-Update1"
 * - Unicode 2.1.9 → UCD path "2.1-Update4"
 * Later versions (4.1.0 and above) use the same version number in their UCD path.
 */
export { UCD_PATH_MAPPINGS } from "./data/ucd-path-mappings";

/**
 * Metadata for a Unicode standard version
 */
export type { UnicodeVersionMetadata } from "./data/unicode-version-metadata";

/**
 * A mapping between a Unicode version and its UCD path
 */
export type { UCDPathMapping } from "./data/ucd-path-mappings";
