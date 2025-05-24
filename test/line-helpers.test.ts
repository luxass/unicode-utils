import { describe, expect, it } from "vitest";
import {
  inferFileName,
  inferVersion,
  isCommentLine,
  isEmptyLine,
  isEqualsBoundary,
  isHashBoundary,
  isLineWithData,
  isMissingAnnotation,
  parseMissingAnnotation,
} from "../src/line-helpers";

describe("missing annotation", () => {
  it.each([
    ["# @missing: 0000..007F; Basic Latin", true],
    ["# @missing: 0000..10FFFF; NFD_QC; Yes", true],
    ["# @missing: 20000..2FFFD; Wide", true],
    ["# Not a missing annotation", false],
    ["Regular text", false],
  ])("should identify %s as %s", (line, expected) => {
    expect(isMissingAnnotation(line)).toBe(expected);
  });

  it("should return null for non-missing annotation lines", () => {
    expect(parseMissingAnnotation("# This is not a missing annotation")).toBeNull();
    expect(parseMissingAnnotation("Regular content")).toBeNull();
  });

  it("should correctly parse simple missing annotation", () => {
    const result = parseMissingAnnotation("# @missing: 0000..007F; Basic Latin");
    expect(result).toEqual({
      start: "0000",
      end: "007F",
      propertyName: undefined,
      defaultPropertyValue: "Basic Latin",
    });
  });

  it("should correctly parse missing annotation with property name", () => {
    const result = parseMissingAnnotation("# @missing: 0000..10FFFF; NFD_QC; Yes");
    expect(result).toEqual({
      start: "0000",
      end: "10FFFF",
      propertyName: "NFD_QC",
      defaultPropertyValue: "Yes",
    });
  });

  it("should handle different code point ranges", () => {
    const result = parseMissingAnnotation("# @missing: 20000..2FFFD; Wide");
    expect(result).toEqual({
      start: "20000",
      end: "2FFFD",
      propertyName: undefined,
      defaultPropertyValue: "Wide",
    });
  });

  it("should handle missing annotation with special tags", () => {
    const result = parseMissingAnnotation("# @missing: 0000..007F; Script; <none>");
    expect(result).toEqual({
      start: "0000",
      end: "007F",
      propertyName: "Script",
      defaultPropertyValue: "<none>",
      specialTag: "none",
    });
  });

  it("should return null for malformed missing annotations", () => {
    expect(parseMissingAnnotation("# @missing: invalid..format; Value")).toBeNull();
    expect(parseMissingAnnotation("# @missing: 0000..007F")).toBeNull();
    expect(parseMissingAnnotation("# @missing:")).toBeNull();
  });
});

describe("isCommentLine", () => {
  it.each([
    ["# This is a comment", true],
    ["#", true],
    ["  #  ", true],
    ["#This is not a comment", false],
    ["Text # with hash", false],
    ["", false],
    ["  # This is a comment with leading space", false],
    [" #This is not a comment despite space", false],
  ])("should correctly identify '%s' as %s", (line, expected) => {
    expect(isCommentLine(line)).toBe(expected);
  });
});

describe("isEmptyLine", () => {
  it.each([
    ["", true],
    ["  ", true],
    ["\t", true],
    ["\n", true],
    ["  \t  ", true],
    ["text", false],
    [" text ", false],
    ["\ttext\t", false],
    ["  text with spaces  ", false],
    ["special chars !@#", false],
  ])("should correctly identify '%s' as %s", (line, expected) => {
    expect(isEmptyLine(line)).toBe(expected);
  });
});

describe("isEqualsBoundary", () => {
  it.each([
    ["# ====", true],
    ["# =======", true],
    ["# ============", true],
    ["# ==", true],
    ["# = =", false],
    ["# ===", true],
    ["# ===  ", true],
    ["#  ===", true],
    ["#  ==", true],
    ["#", false],
    ["", false],
  ])("should correctly identify '%s' as %s", (line, expected) => {
    expect(isEqualsBoundary(line)).toBe(expected);
  });
});

describe("isHashBoundary", () => {
  it.each([
    ["# ####", true],
    ["# ########", true],
    ["# ##########", true],
    ["# ##", true],
    ["# # #", false],
    ["# ###", true],
    ["# #### ", true],
    ["#  ####", true],
    ["#", false],
    ["", false],
  ])("should correctly identify '%s' as %s", (line, expected) => {
    expect(isHashBoundary(line)).toBe(expected);
  });
});

describe("isLineWithData", () => {
  it.each([
    ["# This is a comment", false],
    ["", false],
    ["  ", false],
    ["\t", false],
    ["\n", false],
    ["  \t  ", false],
    ["text", true],
    [" text ", true],
    ["\ttext\t", true],
    ["  text with spaces  ", true],
    ["special chars !@#", true],
  ])("should correctly identify '%s' as %s", (line, expected) => {
    expect(isLineWithData(line)).toBe(expected);
  });
});

describe("inferrence", () => {
  describe("inferFileName", () => {
    it.each([
      // valid comment lines with file names and versions
      ["# ArabicShaping-5.0.0.txt", "ArabicShaping"],
      ["# UnicodeData-14.0.0.txt", "UnicodeData"],
      ["#   PropertyValueAliases-13.0.0.txt", "PropertyValueAliases"],
      ["# DerivedAge-15.1.0.txt", "DerivedAge"],
      ["# EastAsianWidth-12.1.0.txt", "EastAsianWidth"],

      // valid comment lines without versions
      ["# ReadMe.txt", "ReadMe"],
      ["# SimpleFile.txt", "SimpleFile"],
      ["# NameWithoutVersion", "NameWithoutVersion"],
      ["# AnotherFile", "AnotherFile"],

      // file names with complex patterns
      ["# File-Name-Complex-1.2.3.txt", "File-Name-Complex"],
      ["# Multi-Part-File-0.0.1.txt", "Multi-Part-File"],
      ["# name-with-hyphens-2.5.7.txt", "name-with-hyphens"],
    ])("should extract \"%s\" correctly as \"%s\"", (line, expected) => {
      expect(inferFileName(line)).toBe(expected);
    });

    it.each([
      // empty or undefined inputs
      ["", undefined],
      [null as any, undefined],
      [undefined as any, undefined],

      // non-comment lines
      ["UnicodeData-14.0.0.txt", undefined],
      ["This is not a comment", undefined],
      ["# ", undefined],
      ["#", undefined],

      // invalid patterns
      ["# NoExtension", "NoExtension"],
      ["# .txt", undefined], // empty fileName should now return undefined
      ["# -1.0.0.txt", undefined], // empty fileName should now return undefined
      ["# File-.txt", "File-"],
    ])("should return undefined or expected value for invalid input \"%s\"", (line, expected) => {
      expect(inferFileName(line)).toBe(expected);
    });
  });

  describe("inferVersion", () => {
    it.each([
      // valid comment lines with versions
      ["# ArabicShaping-5.0.0.txt", "5.0.0"],
      ["# UnicodeData-14.0.0.txt", "14.0.0"],
      ["# PropertyValueAliases-13.0.0.txt", "13.0.0"],
      ["# DerivedAge-15.1.0.txt", "15.1.0"],
      ["# EastAsianWidth-12.1.0.txt", "12.1.0"],

      // different version formats
      ["# File-1.txt", "1"],
      ["# File-1.2.txt", "1.2"],
      ["# File-1.2.3.4.txt", "1.2.3.4"],
      ["# File-0.0.1.txt", "0.0.1"],
      ["# File-999.999.999.txt", "999.999.999"],

      // complex file names with versions
      ["# Multi-Part-File-2.5.7.txt", "2.5.7"],
      ["# File-With-Many-Hyphens-3.1.4.txt", "3.1.4"],
    ])("should extract version from \"%s\" as \"%s\"", (line, expected) => {
      expect(inferVersion(line)).toBe(expected);
    });

    it.each([
      // files without versions
      ["# ReadMe.txt", undefined],
      ["# SimpleFile.txt", undefined],
      ["# FileName", undefined],
      ["# AnotherFile", undefined],

      // empty or invalid inputs
      ["", undefined],
      [null as any, undefined],
      [undefined as any, undefined],

      // non-comment lines
      ["UnicodeData-14.0.0.txt", undefined],
      ["This is not a comment", undefined],
      ["# ", undefined],
      ["#", undefined],

      // invalid patterns
      ["# File-.txt", undefined], // empty fileName before hyphen
      ["# -1.0.0.txt", undefined], // empty fileName before hyphen
      ["# .txt", undefined], // empty fileName
      ["# File-v1.0.0.txt", undefined], // invalid version format
      ["# File-abc.txt", undefined], // non-numeric version
    ])("should return undefined for no version in \"%s\"", (line, expected) => {
      expect(inferVersion(line)).toBe(expected);
    });
  });

  describe("edge cases and complex scenarios", () => {
    it.each([
      // multi-line input (should only process first line)
      ["# FirstLine-1.0.0.txt\nSecondLine", "FirstLine", "1.0.0"],
      ["# OnlyFirst-2.0.0.txt\n# IgnoreThis-3.0.0.txt", "OnlyFirst", "2.0.0"],
      ["# Line1-5.0.0.txt\n\n# Line3", "Line1", "5.0.0"],

      // whitespace variations
      ["  #  SpacesBefore-1.0.0.txt  ", "SpacesBefore", "1.0.0"],
      ["#\t\tTabsBefore-2.0.0.txt", "TabsBefore", "2.0.0"],
      ["#    LotsOfSpaces-3.0.0.txt    ", "LotsOfSpaces", "3.0.0"],

      // special characters in file names
      ["# File_With_Underscores-1.0.0.txt", "File_With_Underscores", "1.0.0"],
      ["# File.With.Dots-2.0.0.txt", "File.With.Dots", "2.0.0"],

      // version edge cases
      ["# SingleDigit-1.txt", "SingleDigit", "1"],
      ["# VeryLongVersion-1.2.3.4.5.6.7.8.9.txt", "VeryLongVersion", "1.2.3.4.5.6.7.8.9"],
      ["# ZeroVersion-0.0.0.txt", "ZeroVersion", "0.0.0"],
    ])("should handle \"%s\" correctly, extracting fileName: \"%s\" and version: \"%s\"", (line, expectedFileName, expectedVersion) => {
      expect(inferFileName(line)).toBe(expectedFileName);
      expect(inferVersion(line)).toBe(expectedVersion);
    });

    it.each([
      // boundary cases
      ["", undefined, undefined],
      ["#", undefined, undefined],
      ["# ", undefined, undefined],
      ["#\t", undefined, undefined],
      ["# .txt", undefined, undefined], // empty fileName should now return undefined
      ["# -1.0.0.txt", undefined, undefined], // empty fileName should now return undefined

      // malformed inputs
      ["Not a comment line", undefined, undefined],
      ["# File with spaces-1.0.0.txt", "File with spaces", "1.0.0"],
      ["# File\twith\ttabs-2.0.0.txt", "File\twith\ttabs", "2.0.0"],
    ])("should handle boundary case \"%s\" with fileName: %s and version: %s", (line, expectedFileName, expectedVersion) => {
      expect(inferFileName(line)).toBe(expectedFileName);
      expect(inferVersion(line)).toBe(expectedVersion);
    });
  });
});
