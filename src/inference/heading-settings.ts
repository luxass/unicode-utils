import type { InferHeadingSettings } from "./heading";

export interface DataFileSettingsEntry {
  /**
   * The fileName this configuration applies to.
   */
  fileName: string;

  /**
   * The version of Unicode this configuration applies to.
   */
  version: string;

  /**
   * The settings to use for inferring headings in this file.
   */
  settings: InferHeadingSettings;
}

export const HEADING_SETTINGS_CONFIG: DataFileSettingsEntry[] = [

];

export function getHeadingSettings(
  fileName?: string,
  version?: string,
): InferHeadingSettings | null {
  if (!fileName || !version) {
    return null;
  }

  const entry = HEADING_SETTINGS_CONFIG.find((config) => config.fileName === fileName && config.version === version);

  if (!entry) {
    return null;
  }

  return entry.settings;
}
