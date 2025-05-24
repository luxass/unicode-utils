import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v3.1.1");

describe("heading inference v3.1.1", async () => {
  it("inferHeading(ArabicShaping-4.txt)", () => {
    const content = ucdFiles.file("ArabicShaping-4.txt");
    const expected = ucdFiles.expected("ArabicShaping-4.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding-4.txt)", () => {
    const content = ucdFiles.file("CaseFolding-4.txt");
    const expected = ucdFiles.expected("CaseFolding-4.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedBidiClass-3.1.1.txt)", () => {
    const content = ucdFiles.file("DerivedBidiClass-3.1.1.txt");
    const expected = ucdFiles.expected("DerivedBidiClass-3.1.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedEastAsianWidth-3.1.1.txt)", () => {
    const content = ucdFiles.file("DerivedEastAsianWidth-3.1.1.txt");
    const expected = ucdFiles.expected("DerivedEastAsianWidth-3.1.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedJoiningGroup-3.1.1.txt)", () => {
    const content = ucdFiles.file("DerivedJoiningGroup-3.1.1.txt");
    const expected = ucdFiles.expected("DerivedJoiningGroup-3.1.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedJoiningType-3.1.1.txt)", () => {
    const content = ucdFiles.file("DerivedJoiningType-3.1.1.txt");
    const expected = ucdFiles.expected("DerivedJoiningType-3.1.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EastAsianWidth-5.txt)", () => {
    const content = ucdFiles.file("EastAsianWidth-5.txt");
    const expected = ucdFiles.expected("EastAsianWidth-5.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList-3.1.1.txt)", () => {
    const content = ucdFiles.file("PropList-3.1.1.txt");
    const expected = ucdFiles.expected("PropList-3.1.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-3.1.1.txt)", () => {
    const content = ucdFiles.file("ReadMe-3.1.1.txt");
    const expected = ucdFiles.expected("ReadMe-3.1.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing-5.txt)", () => {
    const content = ucdFiles.file("SpecialCasing-5.txt");
    const expected = ucdFiles.expected("SpecialCasing-5.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Unihan-3.1.1.txt)", () => {
    const content = ucdFiles.file("Unihan-3.1.1.txt");
    const expected = ucdFiles.expected("Unihan-3.1.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
