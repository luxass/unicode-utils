import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v2.1.9");

describe("heading inference v2.1.9", async () => {
  it("inferHeading(Blocks-2.txt)", () => {
    const content = ucdFiles.file("Blocks-2.txt");
    const expected = ucdFiles.expected("Blocks-2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Jamo-2.txt)", () => {
    const content = ucdFiles.file("Jamo-2.txt");
    const expected = ucdFiles.expected("Jamo-2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList-2.1.9.txt)", () => {
    const content = ucdFiles.file("PropList-2.1.9.txt");
    const expected = ucdFiles.expected("PropList-2.1.9.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-2.1.9.txt)", () => {
    const content = ucdFiles.file("ReadMe-2.1.9.txt");
    const expected = ucdFiles.expected("ReadMe-2.1.9.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing-2.txt)", () => {
    const content = ucdFiles.file("SpecialCasing-2.txt");
    const expected = ucdFiles.expected("SpecialCasing-2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-2.1.9.txt)", () => {
    const content = ucdFiles.file("UnicodeData-2.1.9.txt");
    const expected = ucdFiles.expected("UnicodeData-2.1.9.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff218v219d2.txt)", () => {
    const content = ucdFiles.file("diff218v219d2.txt");
    const expected = ucdFiles.expected("diff218v219d2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff219d2v219d3.txt)", () => {
    const content = ucdFiles.file("diff219d2v219d3.txt");
    const expected = ucdFiles.expected("diff219d2v219d3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff219d3v219d4.txt)", () => {
    const content = ucdFiles.file("diff219d3v219d4.txt");
    const expected = ucdFiles.expected("diff219d3v219d4.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff219d4v219d5.txt)", () => {
    const content = ucdFiles.file("diff219d4v219d5.txt");
    const expected = ucdFiles.expected("diff219d4v219d5.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff219d5v219d9.txt)", () => {
    const content = ucdFiles.file("diff219d5v219d9.txt");
    const expected = ucdFiles.expected("diff219d5v219d9.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
