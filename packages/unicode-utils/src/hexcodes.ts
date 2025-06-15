/**
 * Converts a hex string to an array of unicode codepoints.
 *
 * @param {string} hex - The hexadecimal string to convert
 * @param {string} joiner - The string that separates the hex values
 * @returns {number[]} An array of numbers representing unicode codepoints
 *
 * @example
 * ```ts
 * fromHexToCodepoint('1F600-1F64F', '-') // [128512, 128591]
 * fromHexToCodepoint('1F600,1F64F', ',') // [128512, 128591]
 * ```
 */
export function fromHexToCodepoint(hex: string, joiner: string): number[] {
  return hex.split(joiner).map((point) => Number.parseInt(point, 16));
}

/**
 * Expands a hexadecimal range into an array of individual hexadecimal values.
 * If the input contains ".." it treats it as a range and expands it,
 * otherwise returns the input hex as a single-element array.
 *
 * @param {string} hex - The hexadecimal string, optionally containing ".." to denote a range
 * @returns {string[]} An array of hexadecimal strings. If given a range (e.g. "0000..0010"),
 *          returns all values in that range. If given a single hex value,
 *          returns an array containing just that value.
 *
 * @example
 * ```ts
 * expandHexRange("0000..0002") // Returns ["0000", "0001", "0002"]
 * expandHexRange("0000") // Returns ["0000"]
 * ```
 */
export function expandHexRange(hex: string): string[] {
  // if the hex `range` does contain `..` then we need to expand it.
  // otherwise, we can just return the hex as is.
  if (hex.includes("..")) {
    const [start, end] = fromHexToCodepoint(hex, "..");

    if ((start == null || Number.isNaN(start)) || (end == null || Number.isNaN(end))) {
      return [];
    }

    const points: string[] = [];

    for (let codepoint = start; codepoint <= end; codepoint++) {
      points.push(codepoint.toString(16).padStart(4, "0").toUpperCase());
    }

    return points;
  }

  return [hex];
}

/**
 * Removes specific unicode variation selectors from a hex string.
 * Specifically removes:
 * - 200D (Zero Width Joiner)
 * - FE0E (Variation Selector-15, text style)
 * - FE0F (Variation Selector-16, emoji style)
 *
 * @param {string} hex - The hex string to strip variation selectors from
 * @returns {string} The hex string with variation selectors removed
 */
export function stripHex(hex: string): string {
  return hex.replace(/[-\s]?(?:200D|FE0E|FE0F)/g, "");
}
