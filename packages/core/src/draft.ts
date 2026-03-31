export interface GetCurrentDraftVersionOptions {
  /**
   * Custom URL to fetch the Unicode draft ReadMe from
   * @default "https://api.ucdjs.dev/api/v1/files/draft/ReadMe.txt"
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

  /**
   * Optional text to use instead of fetching. If provided, skips the fetch and uses this text for pattern matching.
   */
  text?: string;

  /**
   * Called when a version is successfully extracted
   * @param {string} version - The extracted Unicode draft version.
   * @returns {void}
   */
  onSuccess?: (version: string) => void;

  /**
   * Called when no version could be extracted from the response body
   * @param {string} text - The fetched ReadMe response text.
   * @returns {void}
   */
  onNotFound?: (text: string) => void;

  /**
   * Called only when an error is caught in the catch block
   * @param {unknown} error - The caught error value.
   * @returns {void}
   */
  onError?: (error: unknown) => void;
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
export async function getCurrentDraftVersion(
  options: GetCurrentDraftVersionOptions = {},
): Promise<string | null> {
  const {
    url = "https://api.ucdjs.dev/api/v1/files/draft/ReadMe.txt",
    fetchOptions = {},
    patterns = [
      /Version (\d+\.\d+(?:\.\d+)?) of the Unicode Standard/, // Most explicit
      /Unicode(\d+\.\d+(?:\.\d+)?)/, // From URLs
      /Version (\d+\.\d+)(?!\.\d)/, // Bare major.minor format
    ],
    text,
    onSuccess,
    onNotFound,
    onError,
  } = options;

  let responseText: string;

  if (text != null) {
    responseText = text;
  } else {
    try {
      const res = await fetch(url, fetchOptions);

      if (!res.ok) {
        const error = new Error(
          `Failed to fetch the Unicode draft ReadMe: ${res.status} ${res.statusText}`,
        );
        onError?.(error);
        return null;
      }

      responseText = await res.text();
    } catch (err) {
      onError?.(err);
      return null;
    }
  }

  for (const pattern of patterns) {
    const match = responseText.match(pattern);

    if (match == null || match[1] == null) continue;

    const version = match[1].trim();
    onSuccess?.(version);
    return version;
  }

  onNotFound?.(responseText);
  return null;
}
