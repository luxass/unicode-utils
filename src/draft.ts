import mojiCompare from "@mojis/moji-compare";

/**
 * Extracts the Unicode version number from a given text string.
 *
 * @param {string?} text - The text to extract the version number from
 * @returns {string | null} The extracted version number as a string, or null if no version number is found
 *
 * @example
 * ```ts
 * extractVersionFromReadme("Version 15.0.0 of the Unicode Standard") // Returns "15.0.0"
 * extractVersionFromReadme("Unicode15.1") // Returns "15.1"
 * extractVersionFromReadme("No version here") // Returns null
 * ```
 */
export function extractVersionFromReadme(text?: string): string | null {
  if (text == null) return null;

  const patterns = [
    /Version (\d+\.\d+(?:\.\d+)?) of the Unicode Standard/, // Most explicit
    /Unicode(\d+\.\d+(?:\.\d+)?)/, // From URLs
    /Version (\d+\.\d+)(?!\.\d)/, // Bare major.minor format
    /Unicode Emoji, Version (\d+\.\d+(?:\.\d+)?)/, // Emoji-specific version
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);

    if (match == null || match[1] == null) continue;

    return match[1];
  }

  return null;
}

export interface DraftVersion {
  emoji_version: string;
  unicode_version: string;
}

/**
 * Retrieves the current Unicode draft version by fetching and comparing root and emoji ReadMe files.
 *
 * This function fetches two ReadMe files from unicode.org:
 * - The main draft ReadMe
 * - The emoji draft ReadMe
 *
 * It then extracts and validates the version numbers from both files to ensure they match.
 * The emoji version uses major.minor format while the root version uses major.minor.patch.
 *
 * @returns {Promise<DraftVersion | null>} A Promise that resolves to the current draft version string, or null if not found
 */
export async function getCurrentDraftVersion(): Promise<DraftVersion | null> {
  const [draftText, emojiText] = await Promise.all([
    "https://unicode-proxy.ucdjs.dev/draft/ReadMe.txt",
    "https://unicode-proxy.ucdjs.dev/draft/emoji/ReadMe.txt",
  ].map(async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`failed to fetch ${url}: ${res.status}`);
    }

    return res.text();
  }));

  const rootVersion = extractVersionFromReadme(draftText);
  const emojiVersion = extractVersionFromReadme(emojiText);

  if (rootVersion == null || emojiVersion == null) {
    throw new Error("failed to extract draft version");
  }

  // the emoji version is only using major.minor format.
  // so, we will need to add the last 0 to the version.
  // if they don't match the major and minor version, we will throw an error.
  if (mojiCompare.major(rootVersion) !== mojiCompare.major(`${emojiVersion}.0`) || mojiCompare.minor(rootVersion) !== mojiCompare.minor(`${emojiVersion}.0`)) {
    throw new Error("draft versions do not match");
  }

  return {
    emoji_version: emojiVersion,
    unicode_version: rootVersion,
  };
}
