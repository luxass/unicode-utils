import { UNICODE_TO_UCD_VERSION_MAPPINGS } from "./mappings";

/**
 * Builds file paths for Unicode Character Database (UCD) files
 *
 * @param {string} version - The Unicode version (e.g., "15.1.0")
 * @param {string} path - The filename to access (e.g., "PropList.txt", "DerivedLineBreak.txt")
 * @returns {string} The complete file path for the UCD file
 */
export function buildUCDPath(
  version: string,
  path: string,
): string {
  const url = new URL(
    `${version}/${hasUCDFolderPath(version) ? "ucd/" : ""}${path}`,
    "https://www.unicode.org/",
  );

  return url.pathname;
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
