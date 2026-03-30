import { describe, expect, it } from "vitest";
import { coerceField, FieldCoercionError } from "../../src/file-parsers/coerce";

describe("coerceField", () => {
  it("coerces a 4-digit hex codepoint", () => {
    expect(coerceField("0041", { name: "cp", type: "codepoint" })).toBe("0041");
  });

  it("uppercases hex codepoints", () => {
    expect(coerceField("00ff", { name: "cp", type: "codepoint" })).toBe("00FF");
  });

  it("throws FieldCoercionError for invalid codepoint", () => {
    expect(() => coerceField("ZZZZ", { name: "cp", type: "codepoint" }))
      .toThrow(FieldCoercionError);
  });

  it("coerces a hex range to { start, end }", () => {
    const value = coerceField("0000..007F", { name: "range", type: "codepoint-range" });
    expect(value).toEqual({ start: "0000", end: "007F" });
  });

  it("coerces codepoint-or-range: single point", () => {
    expect(coerceField("0041", { name: "r", type: "codepoint-or-range" })).toBe("0041");
  });

  it("coerces codepoint-or-range: range", () => {
    expect(coerceField("0000..007F", { name: "r", type: "codepoint-or-range" }))
      .toEqual({ start: "0000", end: "007F" });
  });

  it("coerces string-trimmed", () => {
    expect(coerceField("  Latin  ", { name: "s", type: "string-trimmed" })).toBe("Latin");
  });

  it("coerces number", () => {
    expect(coerceField("42", { name: "n", type: "number" })).toBe(42);
  });

  it("throws for empty number", () => {
    expect(() => coerceField("", { name: "n", type: "number" }))
      .toThrow(FieldCoercionError);
  });

  it("coerces valid enum value", () => {
    expect(coerceField("o", { name: "bt", type: "enum", enumValues: ["o", "c", "n"] })).toBe("o");
  });

  it("throws FieldCoercionError for invalid enum value", () => {
    expect(() => coerceField("x", { name: "bt", type: "enum", enumValues: ["o", "c", "n"] }))
      .toThrow(FieldCoercionError);
  });

  it("coerces optional-string: non-empty", () => {
    expect(coerceField("Latin", { name: "s", type: "optional-string" })).toBe("Latin");
  });

  it("coerces optional-string: empty string to undefined", () => {
    expect(coerceField("", { name: "s", type: "optional-string" })).toBeUndefined();
  });

  it("coerces multi-codepoint as space-delimited array", () => {
    expect(coerceField("0041 0042 0043", { name: "m", type: "multi-codepoint" }))
      .toEqual(["0041", "0042", "0043"]);
  });

  it("handles nullable: empty string → undefined", () => {
    expect(coerceField("", { name: "s", type: "string-trimmed", nullable: true }))
      .toBeUndefined();
  });

  it("handles isMultiValue flag", () => {
    expect(coerceField("0041 0042", { name: "m", type: "codepoint", isMultiValue: true, delimiter: " " }))
      .toEqual(["0041", "0042"]);
  });

  it("string type returns raw (untrimmed)", () => {
    expect(coerceField("  hello  ", { name: "s", type: "string" })).toBe("  hello  ");
  });
});
