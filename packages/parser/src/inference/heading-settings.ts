import type { InferHeadingSettings } from "./heading";

export interface DataFileSettingsEntry {
  /**
   * The fileName this configuration applies to.
   */
  fileName: string;

  /**
   * The version of Unicode this configuration applies to.
   * When undefined, the entry applies to ALL versions of this file
   * (used as fallback when no version-specific entry is found).
   */
  version?: string;

  /**
   * The settings to use for inferring headings in this file.
   */
  settings: InferHeadingSettings;
}

export const HEADING_SETTINGS_CONFIG: DataFileSettingsEntry[] = [

];

/**
 * Look up heading settings by fileName and optional version.
 *
 * Priority:
 *   1. Exact (fileName + version) match
 *   2. fileName-only entry (version is undefined) as fallback
 *   3. null
 */
export function getHeadingSettings(
  fileName?: string,
  version?: string,
): InferHeadingSettings | null {
  if (!fileName) {
    return null;
  }

  // Try exact match first
  if (version) {
    const exact = HEADING_SETTINGS_CONFIG.find(
      (c) => c.fileName === fileName && c.version === version,
    );
    if (exact) return exact.settings;
  }

  // Fallback: fileName-only (no version constraint)
  const fallback = HEADING_SETTINGS_CONFIG.find(
    (c) => c.fileName === fileName && c.version == null,
  );

  return fallback?.settings ?? null;
}
