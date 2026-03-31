import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import { RawDataFile } from "../../src/datafile/model";

const CONTENT = dedent`
  # Scripts-16.0.0.txt
  #
  # Basic Latin
  0000..007F; Latin
  0041; Latin
  # Greek
  0370..03FF; Greek
`;

describe("dataFile", () => {
  it("toDataFile() returns a DataFile with sections", () => {
    const file = new RawDataFile(CONTENT).toDataFile();
    expect(file.sections).toHaveLength(2);
  });

  it("exposes fileName and version", () => {
    const file = new RawDataFile(CONTENT).toDataFile();
    expect(file.fileName).toBe("Scripts");
    expect(file.version).toBe("16.0.0");
  });

  it("findSection returns section by exact name", () => {
    const file = new RawDataFile(CONTENT).toDataFile();
    expect(file.findSection("Basic Latin")).toBeDefined();
    expect(file.findSection("basic latin")).toBeUndefined(); // case-sensitive
  });

  it("findSectionsByName returns sections containing substring", () => {
    const file = new RawDataFile(CONTENT).toDataFile();
    expect(file.findSectionsByName("Latin")).toHaveLength(1);
    expect(file.findSectionsByName("")).toHaveLength(2); // all sections
  });

  it("recordCount returns total records across all sections", () => {
    const file = new RawDataFile(CONTENT).toDataFile();
    expect(file.recordCount).toBe(3); // 2 in Basic Latin, 1 in Greek
  });

  it("sections are frozen — mutation throws", () => {
    const file = new RawDataFile(CONTENT).toDataFile();
    expect(() => {
      (file.sections as any)[0].name = "Mutated";
    }).toThrow();
  });

  it("records array is frozen — push throws", () => {
    const file = new RawDataFile(CONTENT).toDataFile();
    const section = file.sections[0]!;
    expect(() => {
      (section.records as any).push({});
    }).toThrow();
  });

  it("hasEOF is false when no EOF marker", () => {
    const file = new RawDataFile(CONTENT).toDataFile();
    expect(file.hasEOF).toBe(false);
  });

  it("hasEOF is true when EOF marker present", () => {
    const content = `${CONTENT}\n# EOF`;
    const file = new RawDataFile(content).toDataFile();
    expect(file.hasEOF).toBe(true);
  });
});
