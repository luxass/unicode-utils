/**
 * Maps Unicode standard version numbers to their corresponding UCD (Unicode Character Database) path versions.
 *
 * The Unicode Character Database (UCD) files are available at https://unicode.org/Public/{version}
 * where {version} is not always the same as the Unicode standard version.
 *
 * For example:
 * - Unicode 4.0.1 files are at https://unicode.org/Public/4.0-Update1
 * - Unicode 2.1.9 files are at https://unicode.org/Public/2.1-Update4
 */
export const UNICODE_TO_UCD_PATH_MAPPINGS: Record<string, string> = {
  // Unicode 1.x files are available under 1.1-Update
  // https://www.unicode.org/versions/Unicode1.0.0/
  "1.0.0": "1.1-Update",
  "1.0.1": "1.1-Update",
  "1.1.0": "1.1-Update",
  "1.1.5": "1.1-Update",

  // Unicode 2.0.0 uses 2.0-Update
  "2.0.0": "2.0-Update",

  // Unicode 2.1.x series uses various Update suffixes
  // https://www.unicode.org/versions/Unicode2.1.0/
  "2.1.0": "2.1-Update4",
  "2.1.1": "2.1-Update",
  "2.1.2": "2.1-Update1",
  "2.1.5": "2.1-Update2",
  "2.1.8": "2.1-Update3",
  "2.1.9": "2.1-Update4",

  "3.0.0": "3.0-Update",
  "3.0.1": "3.0-Update1",
  "3.1.0": "3.1-Update",
  "3.1.1": "3.1-Update1",
  "3.2.0": "3.2-Update",

  "4.0.0": "4.0-Update",
  "4.0.1": "4.0-Update1",
};

/**
 * Maps a Unicode version to its corresponding UCD (Unicode Character Database) path version.
 *
 * Some Unicode versions don't have directly corresponding UCD paths. For example,
 * Unicode 4.0.1's files are found at 'https://unicode.org/Public/4.0-Update1/'
 * rather than 'https://unicode.org/Public/4.0.1/'.
 *
 * If the version is not found in the mappings, returns the original version.
 * This is useful for handling newer Unicode versions that follow the direct version path pattern.
 *
 * @param {string} version - The Unicode version to map to a UCD path version
 * @returns {string} The corresponding UCD path version or the original version if not mapped
 */
export function mapToUCDPathVersion(version: string): string {
  // check if the version needs to be mapped to a different UCD path version
  const ucdPathVersion = UNICODE_TO_UCD_PATH_MAPPINGS[version];
  if (ucdPathVersion) {
    return ucdPathVersion;
  }

  // if not found, return the original version
  // since newer versions typically use the version number directly in the path
  return version;
}

/**
 * Determines whether a Unicode version has a direct UCD (Unicode Character Database) path.
 *
 * Some Unicode versions use special path formats (like '4.0-Update1' instead of '4.0.1').
 * This function checks if a version:
 * 1. Contains "Update" in its name (indicating a special path format)
 * 2. Exists in our UNICODE_TO_UCD_PATH_MAPPINGS (meaning it needs path translation)
 *
 * @param {string} version - The Unicode version string to check
 * @returns {boolean} - Returns true if the version has a direct UCD path (e.g., '15.0.0' → '15.0.0'),
 *                      false if it needs mapping (e.g., '4.0.1' → '4.0-Update1')
 */
export function hasUCDPath(version: string): boolean {
  if (version.includes("Update")) {
    return false;
  }

  // if version is key of UNICODE_TO_UCD_PATH_MAPPINGS, then it needs mapping (return false)
  return !Object.keys(UNICODE_TO_UCD_PATH_MAPPINGS).includes(version);
}
