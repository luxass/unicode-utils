/**
 * Converts a hex string to an array of unicode codepoints.
 *
 * @param {string} hex - The hexadecimal string to convert
 * @param {string} joiner - The string that separates the hex values
 * @param {boolean} strict - If true, throws errors for invalid input. If false, returns NaN for invalid parts.
 * @returns {number[]} An array of numbers representing unicode codepoints
 *
 * @example
 * ```ts
 * fromHexToCodepoint('1F600-1F64F', '-') // [128512, 128591]
 * fromHexToCodepoint('1F600,1F64F', ',') // [128512, 128591]
 * fromHexToCodepoint('1F600-', '-', true) // throws Error
 * fromHexToCodepoint('1F600-', '-', false) // [128512, NaN]
 * ```
 */
export function fromHexToCodepoint(hex: string, joiner: string, strict: boolean = false): number[] {
  if (strict) {
    if (typeof hex !== "string" || typeof joiner !== "string") {
      throw new TypeError("Both hex and joiner must be strings");
    }

    if (hex.trim() === "") {
      throw new Error("Hex string cannot be empty");
    }
  }

  const hexParts = hex.split(joiner);
  const codepoints: number[] = [];

  for (const part of hexParts) {
    const trimmedPart = part.trim();

    if (strict && trimmedPart === "") {
      throw new Error("Empty hex part found");
    }

    if (strict && !/^[0-9a-f]+$/i.test(trimmedPart)) {
      throw new Error(`Invalid hex format: "${trimmedPart}"`);
    }

    const codepoint = Number.parseInt(trimmedPart, 16);

    if (strict && Number.isNaN(codepoint)) {
      throw new Error(`Failed to parse hex value: "${trimmedPart}"`);
    }

    if (strict && codepoint > 0x10FFFF) {
      throw new Error(`Invalid Unicode codepoint: ${codepoint.toString(16).toUpperCase()} (exceeds U+10FFFF)`);
    }

    codepoints.push(codepoint);
  }

  return codepoints;
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
