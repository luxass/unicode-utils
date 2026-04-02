import { describe, expect, it } from "vitest";

import { expandHexRange, fromHexToCodepoint, stripHex } from "../src/hexcodes";

describe("convert hex to codepoint", () => {
  it("should convert hex string with hyphens to codepoints", () => {
    expect(fromHexToCodepoint("1F600-1F64F", "-")).toEqual([128512, 128591]);
  });

  it("should convert hex string with commas to codepoints", () => {
    expect(fromHexToCodepoint("1F600,1F64F", ",")).toEqual([128512, 128591]);
  });

  it("should handle single hex value", () => {
    expect(fromHexToCodepoint("1F600", "-")).toEqual([128512]);
  });

  it("should convert multiple hex values", () => {
    expect(fromHexToCodepoint("1F600-1F601-1F602", "-")).toEqual([128512, 128513, 128514]);
  });

  describe("strict mode validation", () => {
    it("should throw error for non-string hex input", () => {
      expect(() => fromHexToCodepoint(123 as any, "-", true)).toThrow(
        "Both hex and joiner must be strings",
      );
    });

    it("should throw error for non-string joiner input", () => {
      expect(() => fromHexToCodepoint("1F600", 123 as any, true)).toThrow(
        "Both hex and joiner must be strings",
      );
    });

    it("should throw error for empty hex string", () => {
      expect(() => fromHexToCodepoint("", "-", true)).toThrow("Hex string cannot be empty");
      expect(() => fromHexToCodepoint("   ", "-", true)).toThrow("Hex string cannot be empty");
    });

    it("should throw error for empty hex parts", () => {
      expect(() => fromHexToCodepoint("1F600--1F601", "-", true)).toThrow("Empty hex part found");
    });

    it("should throw error for invalid hex format", () => {
      expect(() => fromHexToCodepoint("1F600-INVALID", "-", true)).toThrow(
        'Invalid hex format: "INVALID"',
      );
      expect(() => fromHexToCodepoint("1F600-123G", "-", true)).toThrow(
        'Invalid hex format: "123G"',
      );
    });

    it("should throw error for Unicode codepoints exceeding valid range", () => {
      expect(() => fromHexToCodepoint("110000", "-", true)).toThrow(
        "Invalid Unicode codepoint: 110000 (exceeds U+10FFFF)",
      );
    });

    it("should work correctly with valid input in strict mode", () => {
      expect(fromHexToCodepoint("1F600-1F601", "-", true)).toEqual([128512, 128513]);
    });
  });

  describe("non-strict mode (default)", () => {
    it("should return NaN for invalid hex parts", () => {
      expect(fromHexToCodepoint("1F600-", "-")).toEqual([128512, Number.NaN]);
      expect(fromHexToCodepoint("1F600-INVALID", "-")).toEqual([128512, Number.NaN]);
    });

    it("should handle empty parts gracefully", () => {
      expect(fromHexToCodepoint("1F600--1F601", "-")).toEqual([128512, Number.NaN, 128513]);
    });
  });
});

describe("expand hexcode range", () => {
  it("should expand hex range with .. notation", () => {
    expect(expandHexRange("0000..0002")).toEqual(["0000", "0001", "0002"]);
  });

  it("should handle single hex value without range", () => {
    expect(expandHexRange("0000")).toEqual(["0000"]);
  });

  it("should handle invalid range format", () => {
    expect(expandHexRange("0000..")).toEqual([]);
  });

  it("should expand larger hex ranges", () => {
    expect(expandHexRange("1F600..1F602")).toEqual(["1F600", "1F601", "1F602"]);
  });
});

describe("strip hex", () => {
  it("should remove zero width joiner (200D)", () => {
    expect(stripHex("1F468-200D-1F469")).toBe("1F468-1F469");
  });

  it("should remove text style selector (FE0E)", () => {
    expect(stripHex("2764-FE0E")).toBe("2764");
  });

  it("should remove emoji style selector (FE0F)", () => {
    expect(stripHex("2764-FE0F")).toBe("2764");
  });

  it("should remove multiple variation selectors", () => {
    expect(stripHex("1F468-200D-2764-FE0F-200D-1F468")).toBe("1F468-2764-1F468");
  });

  it("should handle string without variation selectors", () => {
    expect(stripHex("1F600")).toBe("1F600");
  });

  it("should handle space-separated values", () => {
    expect(stripHex("1F468 200D 1F469")).toBe("1F468 1F469");
  });
});
