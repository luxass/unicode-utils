import UnicodeVersionMetadataData from "./data/unicode-version-metadata.json" with { type: "json" };
import UcdPathMappingsData from "./data/ucd-path-mappings.json" with { type: "json" };

/**
 * Complete list of Unicode versions with their metadata.
 * Each version includes:
 * - version: The Unicode standard version number
 * - documentationUrl: URL to the version's documentation
 * - date: Release year
 * - ucdUrl: URL to the Unicode Character Database for this version
 */
export const UNICODE_VERSION_METADATA = UnicodeVersionMetadataData;

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
export const UCD_PATH_MAPPINGS = UcdPathMappingsData;

/**
 * Metadata for a Unicode standard version
 */
export type UnicodeVersionMetadata = typeof UNICODE_VERSION_METADATA[number];

/**
 * A mapping between a Unicode version and its UCD path
 */
export type UCDPathMapping = typeof UCD_PATH_MAPPINGS[number];
