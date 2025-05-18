export interface GetCurrentDraftVersionOptions {
  /**
   * Custom URL to fetch the Unicode draft ReadMe from
   * @default "https://unicode-proxy.ucdjs.dev/draft/ReadMe.txt"
   */
  url?: string;

  /**
   * Custom fetch options to use when fetching the ReadMe
   */
  fetchOptions?: RequestInit;

  /**
   * Custom regex patterns to use for extracting the version
   * Each pattern must include exactly one capturing group that matches the version
   */
  patterns?: RegExp[];
}

/**
 * Retrieves the current Unicode Standard draft version by fetching and parsing
 * the Unicode draft ReadMe file.
 *
 * The function tries to extract the version number using several regex patterns,
 * starting with the most explicit match and falling back to less specific patterns.
 *
 * @param {GetCurrentDraftVersionOptions} options - Configuration options for the function
 * @returns {Promise<string | null>} A promise that resolves to:
 * - The Unicode draft version as a string (e.g., "15.1.0" or "15.1")
 * - `null` if the version couldn't be determined or if an error occurred during fetching
 *
 * @example
 * ```ts
 * // Using default options
 * const version = await getCurrentDraftVersion();
 * ```
 *
 * @example
 * ```ts
 * // Using custom options
 * const version = await getCurrentDraftVersion({
 *   url: "https://luxass.dev/readme",
 *   patterns: [/MyCustomPattern-(\d+\.\d+)/],
 *   fetchOptions: { headers: { "Authorization": "token" } }
 * });
 * ```
 */
export async function getCurrentDraftVersion(options: GetCurrentDraftVersionOptions = {}): Promise<string | null> {
  const {
    url = "https://unicode-proxy.ucdjs.dev/draft/ReadMe.txt",
    fetchOptions = {},
    patterns = [
      /Version (\d+\.\d+(?:\.\d+)?) of the Unicode Standard/, // Most explicit
      /Unicode(\d+\.\d+(?:\.\d+)?)/, // From URLs
      /Version (\d+\.\d+)(?!\.\d)/, // Bare major.minor format
    ],
  } = options;

  try {
    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      throw new Error("failed to fetch draft ReadMe");
    }

    const text = await res.text();

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
