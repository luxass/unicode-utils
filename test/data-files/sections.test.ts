import { describe, expect, it } from "vitest";
import { hasSections } from "../../src/data-files";
import { dataFileFixture } from "../__utils";

describe("hasSections", () => {
  it.each([
    [{ version: "11.0.0", file: "PropertyAliases.txt", expected: true }],
  ])("hasSections($version - $file)", ({ file, version, expected }) => {
    const dataFile = dataFileFixture(version, file);
    expect(hasSections(dataFile)).toBe(expected);
  });
});
