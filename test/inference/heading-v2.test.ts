import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v2");

describe("heading inference v2", async () => {
  it("inferHeading(ArabicShaping-1.txt)", () => {
    const content = ucdFiles.file("ArabicShaping-1.txt");
    const expected = ucdFiles.expected("ArabicShaping-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Blocks-1.txt)", () => {
    const content = ucdFiles.file("Blocks-1.txt");
    const expected = ucdFiles.expected("Blocks-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Index-1.txt)", () => {
    const content = ucdFiles.file("Index-1.txt");
    const expected = ucdFiles.expected("Index-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Jamo-1.txt)", () => {
    const content = ucdFiles.file("Jamo-1.txt");
    const expected = ucdFiles.expected("Jamo-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamesList-1.txt)", () => {
    const content = ucdFiles.file("NamesList-1.txt");
    const expected = ucdFiles.expected("NamesList-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList-2.0.14.txt)", () => {
    const content = ucdFiles.file("PropList-2.0.14.txt");
    const expected = ucdFiles.expected("PropList-2.0.14.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Props-2.0.14.txt)", () => {
    const content = ucdFiles.file("Props-2.0.14.txt");
    const expected = ucdFiles.expected("Props-2.0.14.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-2.0.14.txt)", () => {
    const content = ucdFiles.file("ReadMe-2.0.14.txt");
    const expected = ucdFiles.expected("ReadMe-2.0.14.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-2.0.14.txt)", () => {
    const content = ucdFiles.file("UnicodeData-2.0.14.txt");
    const expected = ucdFiles.expected("UnicodeData-2.0.14.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Unihan-1.txt)", () => {
    const content = ucdFiles.file("Unihan-1.txt");
    const expected = ucdFiles.expected("Unihan-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
