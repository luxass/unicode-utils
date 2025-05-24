import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v1");

describe("heading inference v1", async () => {
  it("inferHeading(UnicodeData-1.1.5.txt)", () => {
    const content = ucdFiles.file("UnicodeData-1.1.5.txt");
    const expected = ucdFiles.expected("UnicodeData-1.1.5.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
