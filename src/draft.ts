/**
 * Retrieves the current Unicode Standard draft version by fetching and parsing
 * the Unicode draft ReadMe file.
 *
 * The function tries to extract the version number using several regex patterns,
 * starting with the most explicit match and falling back to less specific patterns.
 *
 * @returns A promise that resolves to:
 * - The Unicode draft version as a string (e.g., "15.1.0" or "15.1")
 * - `null` if the version couldn't be determined or if an error occurred during fetching
 *
 * @example
 * ```ts
 * const version = await getCurrentDraftVersion();
 * if (version) {
 *   console.log(`Current Unicode draft version: ${version}`);
 * }
 * ```
 */
export async function getCurrentDraftVersion(): Promise<string | null> {
  try {
    const res = await fetch("https://unicode-proxy.ucdjs.dev/draft/ReadMe.txt");

    if (!res.ok) {
      throw new Error("failed to fetch draft ReadMe");
    }

    const text = await res.text();

    const patterns = [
      /Version (\d+\.\d+(?:\.\d+)?) of the Unicode Standard/, // Most explicit
      /Unicode(\d+\.\d+(?:\.\d+)?)/, // From URLs
      /Version (\d+\.\d+)(?!\.\d)/, // Bare major.minor format
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);

      if (match == null || match[1] == null) continue;

      return match[1];
    }

    return null;
  } catch {
    return null;
  }
}
