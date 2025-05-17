export const UNICODE_MAPPINGS: Record<string, string> = {
  // there was no files published for 1.0.0,
  // so we just use 1.1-Update for those versions
  // https://www.unicode.org/versions/Unicode1.0.0/
  "1.0.0": "1.1-Update",
  "1.0.1": "1.1-Update",
  "1.1.0": "1.1-Update",
  "1.1.5": "1.1-Update",
  "2.0.0": "2.0-Update",

  // there was no files for 2.1.0
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
 * Maps a Unicode version to its corresponding mapped version if available.
 * If the version is not found in the mappings, returns the original version.
 * This is useful for handling newer Unicode versions that are not yet mapped.
 *
 * @param {string} version - The Unicode version to map
 * @returns {string} The mapped Unicode version or the original version if not mapped
 */
export function mapUnicodeVersion(version: string): string {
  // check if the version is in the mappings
  const mappedVersion = UNICODE_MAPPINGS[version];
  if (mappedVersion) {
    return mappedVersion;
  }

  // if not found, return the original version
  // since newer versions are not mapped
  return version;
}

/**
 * Determines whether a Unicode version has a UCD (Unicode Character Database) path.
 *
 * This function checks if the version string contains "Update" or if it exists as a key
 * in the UNICODE_MAPPINGS object. Versions containing "Update" or found in the mappings
 * do not have a direct UCD path.
 *
 * @param {string} version - The Unicode version string to check
 * @returns {boolean} - Returns true if the version has a UCD path, false otherwise
 */
export function hasUCDPath(version: string): boolean {
  if (version.includes("Update")) {
    return false;
  }

  // if version is key of UNICODE_MAPPINGS, then return false, otherwise true
  return !Object.keys(UNICODE_MAPPINGS).includes(version);
}
