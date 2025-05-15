import { describe, expect, it } from "vitest";
import { inferHeading } from "../../src/heading-inference";
import { mapUCDFiles } from "../__utils";

const ucdFiles = await mapUCDFiles("12.0.0");

describe("heading inferrence v12", async () => {
  it("inferHeading(ArabicShaping)", () => {
    const content = ucdFiles.file("ArabicShaping.txt");
    const expected = ucdFiles.file("ArabicShaping.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiBrackets)", () => {
    const content = ucdFiles.file("BidiBrackets.txt");
    const expected = ucdFiles.file("BidiBrackets.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiCharacterTest)", () => {
    const content = ucdFiles.file("BidiCharacterTest.txt");
    const expected = ucdFiles.file("BidiCharacterTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiMirroring)", () => {
    const content = ucdFiles.file("BidiMirroring.txt");
    const expected = ucdFiles.file("BidiMirroring.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiTest)", () => {
    const content = ucdFiles.file("BidiTest.txt");
    const expected = ucdFiles.file("BidiTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Blocks)", () => {
    const content = ucdFiles.file("Blocks.txt");
    const expected = ucdFiles.file("Blocks.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding)", () => {
    const content = ucdFiles.file("CaseFolding.txt");
    const expected = ucdFiles.file("CaseFolding.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});

it("ensure that all files have been tested", () => {
  expect(ucdFiles.files.length).toBe(0);
});
