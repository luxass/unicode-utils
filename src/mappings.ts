/**
 * Maps Unicode standard version numbers to their corresponding UCD (Unicode Character Database) version identifiers.
 *
 * The Unicode Character Database (UCD) files are available at https://unicode.org/Public/{version}
 * where {version} is not always the same as the Unicode standard version.
 *
 * For example:
 * - Unicode 4.0.1 corresponds to UCD version "4.0-Update1"
 * - Unicode 2.1.9 corresponds to UCD version "2.1-Update4"
 */
export const UNICODE_TO_UCD_VERSION_MAPPINGS: Record<string, string> = {
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
 * Resolves a Unicode version to its corresponding UCD (Unicode Character Database) version identifier.
 *
 * Some Unicode versions don't have directly corresponding UCD version identifiers. For example,
 * Unicode 4.0.1's files are found using UCD version '4.0-Update1'
 * rather than '4.0.1'.
 *
 * If the version is not found in the mappings, returns the original version.
 * This is useful for handling newer Unicode versions that use the version number directly.
 *
 * @param {string} unicodeVersion - The Unicode version to resolve to a UCD version identifier
 * @returns {string} The corresponding UCD version identifier or the original version if not mapped
 */
export function resolveUCDVersion(unicodeVersion: string): string {
  // check if the unicode version needs to be mapped to a different UCD version identifier
  const ucdVersion = UNICODE_TO_UCD_VERSION_MAPPINGS[unicodeVersion];
  if (ucdVersion) {
    return ucdVersion;
  }

  // if not found, return the original version
  // since newer versions typically use the version number directly
  return unicodeVersion;
}

/**
 * Determines whether a Unicode version has the UCD folder structure.
 *
 * Newer Unicode versions typically use a UCD subfolder structure, while older versions
 * use special version formats (like '4.0-Update1' instead of '4.0.1') without UCD folders.
 * This function checks if a version:
 * 1. Contains "Update" in its name (indicating no UCD folder structure)
 * 2. Exists in our UNICODE_TO_UCD_VERSION_MAPPINGS (meaning it doesn't use UCD folders)
 *
 * @param {string} version - The Unicode version string to check
 * @returns {boolean} - Returns true if the version uses UCD folder structure (e.g., '15.0.0'),
 *                      false if it doesn't use UCD folders (e.g., '4.0.1' uses '4.0-Update1')
 */
export function hasUCDFolderPath(version: string): boolean {
  if (version.includes("Update")) {
    return false;
  }

  // if version is key of UNICODE_TO_UCD_VERSION_MAPPINGS, then it needs mapping (return false)
  return !Object.keys(UNICODE_TO_UCD_VERSION_MAPPINGS).includes(version);
}
