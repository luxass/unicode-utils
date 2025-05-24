import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v2.1.8");

describe("heading inference v2.1.8", async () => {
  it("inferHeading(PropList-2.1.8.txt)", () => {
    const content = ucdFiles.file("PropList-2.1.8.txt");
    const expected = ucdFiles.expected("PropList-2.1.8.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-2.1.8.txt)", () => {
    const content = ucdFiles.file("ReadMe-2.1.8.txt");
    const expected = ucdFiles.expected("ReadMe-2.1.8.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing-1.txt)", () => {
    const content = ucdFiles.file("SpecialCasing-1.txt");
    const expected = ucdFiles.expected("SpecialCasing-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-2.1.8.txt)", () => {
    const content = ucdFiles.file("UnicodeData-2.1.8.txt");
    const expected = ucdFiles.expected("UnicodeData-2.1.8.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff215v216.txt)", () => {
    const content = ucdFiles.file("diff215v216.txt");
    const expected = ucdFiles.expected("diff215v216.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff216v217.txt)", () => {
    const content = ucdFiles.file("diff216v217.txt");
    const expected = ucdFiles.expected("diff216v217.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff217v218.txt)", () => {
    const content = ucdFiles.file("diff217v218.txt");
    const expected = ucdFiles.expected("diff217v218.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff218v218d1.txt)", () => {
    const content = ucdFiles.file("diff218v218d1.txt");
    const expected = ucdFiles.expected("diff218v218d1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
