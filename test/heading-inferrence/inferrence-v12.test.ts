import { describe, expect, it } from "vitest";
import { inferHeading } from "../../src/heading-inference";
import { ucdFiles } from "../__utils";

describe("heading inferrence v12", async () => {
  it("inferHeading(ArabicShaping)", () => {
    const content = ucdFiles("12.0.0", "ArabicShaping.txt");
    const expected = ucdFiles("12.0.0", "ArabicShaping.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiBrackets)", () => {
    const content = ucdFiles("12.0.0", "BidiBrackets.txt");
    const expected = ucdFiles("12.0.0", "BidiBrackets.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiCharacterTest)", () => {
    const content = ucdFiles("12.0.0", "BidiCharacterTest.txt");
    const expected = ucdFiles("12.0.0", "BidiCharacterTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiMirroring)", () => {
    const content = ucdFiles("12.0.0", "BidiMirroring.txt");
    const expected = ucdFiles("12.0.0", "BidiMirroring.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiTest)", () => {
    const content = ucdFiles("12.0.0", "BidiTest.txt");
    const expected = ucdFiles("12.0.0", "BidiTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it.only("inferHeading(Blocks)", () => {
    const content = ucdFiles("12.0.0", "Blocks.txt");
    const expected = ucdFiles("12.0.0", "Blocks.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding)", () => {
    const content = ucdFiles("12.0.0", "CaseFolding.txt");
    const expected = ucdFiles("12.0.0", "CaseFolding.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
