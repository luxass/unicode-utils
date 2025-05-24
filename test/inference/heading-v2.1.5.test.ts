import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v2.1.5");

describe("heading inference v2.1.5", async () => {
  it("inferHeading(ReadMe-2.1.5.txt)", () => {
    const content = ucdFiles.file("ReadMe-2.1.5.txt");
    const expected = ucdFiles.expected("ReadMe-2.1.5.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-2.1.5.txt)", () => {
    const content = ucdFiles.file("UnicodeData-2.1.5.txt");
    const expected = ucdFiles.expected("UnicodeData-2.1.5.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff212v214.txt)", () => {
    const content = ucdFiles.file("diff212v214.txt");
    const expected = ucdFiles.expected("diff212v214.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(diff214v215.txt)", () => {
    const content = ucdFiles.file("diff214v215.txt");
    const expected = ucdFiles.expected("diff214v215.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
