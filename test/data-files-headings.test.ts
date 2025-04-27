import { readFileSync } from "node:fs";
import { join } from "node:path";
import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";
import { parseDataFileHeading } from "../src/data-files";

function dataFileFixture(version: string, file: string) {
  return readFileSync(
    join(__dirname, "fixtures/data-files", `v${version}`, file),
    "utf-8",
  );
}

describe("parseDataFileHeading(ArabicShaping)", () => {
  it("v12.0.0", () => {
    const content = dataFileFixture("12.0.0", "ArabicShaping.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# ArabicShaping-12.0.0.txt
        # Date: 2018-09-22, 23:54:00 GMT [KW, RP]
        # © 2018 Unicode®, Inc.
        # Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        #
        # This file is a normative contributory data file in the
        # Unicode Character Database.
        #
        # This file defines the Joining_Type and Joining_Group property
        # values for Arabic, Syriac, N'Ko, Mandaic, Manichaean,
        # Hanifi Rohingya, and Sogdian positional
        # shaping, repeating in machine readable form the information
        # exemplified in Tables 9-3, 9-8, 9-9, 9-10, 9-14, 9-15, 9-16, 9-19,
        # 9-20, 10-4, 10-5, 10-6, 10-7, 14-10, 16-16, and 19-5 of The Unicode Standard core
        # specification. This file also defines Joining_Type values for
        # Mongolian, Phags-pa, Psalter Pahlavi, and Adlam positional shaping,
        # which are not listed in tables in the standard.
        #
        # See Sections 9.2, 9.3, 9.5, 10.5, 10.6, 13.4, 14.3, 14.10, 16.13, 19.4, and 19.9
        # of The Unicode Standard core specification for more information.
        #
        # Each line contains four fields, separated by a semicolon.
        #
        # Field 0: the code point, in 4-digit hexadecimal
        #   form, of an Arabic, Syriac, N'Ko, Mandaic, Mongolian,
        #   Phags-pa, Manichaean, Psalter Pahlavi, Hanifi Rohingya, Sogdian,
        #   or other character.
        #
        # Field 1: gives a short schematic name for that character.
        #   The schematic name is descriptive of the shape, based as
        #   consistently as possible on a name for the skeleton and
        #   then the diacritic marks applied to the skeleton, if any.
        #   Note that this schematic name is considered a comment,
        #   and does not constitute a formal property value.
        #
        # Field 2: defines the joining type (property name: Joining_Type)
        #   R Right_Joining
        #   L Left_Joining
        #   D Dual_Joining
        #   C Join_Causing
        #   U Non_Joining
        #   T Transparent
        #
        # See Section 9.2, Arabic for more information on these joining types.
        # Note that for cursive joining scripts which are typically rendered
        # top-to-bottom, rather than right-to-left, Joining_Type=L conventionally
        # refers to bottom joining, and Joining_Type=R conventionally refers
        # to top joining. See Section 14.3, Phags-pa for more information on the
        # interpretation of joining types in vertical layout.
        #
        # Field 3: defines the joining group (property name: Joining_Group)
        #
        # The values of the joining group are based schematically on character
        # names. Where a schematic character name consists of two or more parts
        # separated by spaces, the formal Joining_Group property value, as specified in
        # PropertyValueAliases.txt, consists of the same name parts joined by
        # underscores. Hence, the entry:
        #
        #   0629; TEH MARBUTA; R; TEH MARBUTA
        #
        # corresponds to [Joining_Group = Teh_Marbuta].
        #
        # Note: The property value now designated [Joining_Group = Teh_Marbuta_Goal]
        #   used to apply to both of the following characters
        #   in earlier versions of the standard:
        #
        #   U+06C2 ARABIC LETTER HEH GOAL WITH HAMZA ABOVE
        #   U+06C3 ARABIC LETTER TEH MARBUTA GOAL
        #
        #   However, it currently applies only to U+06C3, and *not* to U+06C2.
        #   To avoid destabilizing existing Joining_Group property aliases, the
        #   prior Joining_Group value for U+06C3 (Hamza_On_Heh_Goal) has been
        #   retained as a property value alias, despite the fact that it
        #   no longer applies to its namesake character, U+06C2.
        #   See PropertyValueAliases.txt.
        #
        # When other cursive scripts are added to the Unicode Standard in the
        # future, the joining group value of all its letters will default to
        # jg=No_Joining_Group in this data file. Other, more specific
        # joining group values will be defined only if an explicit proposal
        # to define those values exactly has been approved by the UTC. This
        # is the convention exemplified by the N'Ko, Mandaic, Mongolian,
        # Phags-pa, Psalter Pahlavi, and Sogdian scripts.
        # Only the Arabic, Manichaean, and Syriac scripts currently have
        # explicit joining group values defined for all characters, including
        # those which have only a single character in a particular Joining_Group
        # class. Hanifi Rohingya has explicit Joining_Group values assigned only for
        # the few characters which share a particular Joining_Group class, but
        # assigns jg=No_Joining_Group to all the singletons.
        #
        # Note: Code points that are not explicitly listed in this file are
        # either of joining type T or U:
        #
        # - Those that are not explicitly listed and that are of General Category Mn, Me, or Cf
        #   have joining type T.
        # - All others not explicitly listed have joining type U.
        #
        # For an explicit listing of all characters of joining type T, see
        # the derived property file DerivedJoiningType.txt.
        #
        # #############################################################"
      `);
  });

  it("v6.2.0", () => {
    const content = dataFileFixture("6.2.0", "ArabicShaping.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# ArabicShaping-6.2.0.txt
        # Date: 2012-05-15, 21:05:00 GMT [KW]
        #
        # This file is a normative contributory data file in the
        # Unicode Character Database.
        #
        # Copyright (c) 1991-2012 Unicode, Inc.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        #
        # This file defines the Joining_Type and Joining_Group
        # property values for Arabic, Syriac, N'Ko, and Mandaic
        # positional shaping, repeating in machine readable form the
        # information exemplified in Tables 8-3, 8-8, 8-9, 8-10, 8-13, 8-14,
        # 8-15, 13-5, 14-5, and 14-6 of The Unicode Standard, Version 6.2.
        #
        # See sections 8.2, 8.3, 13.5, and 14.12 of The Unicode Standard,\u0020
        # Version 6.2 for more information.
        #
        # Each line contains four fields, separated by a semicolon.
        #
        # Field 0: the code point, in 4-digit hexadecimal
        #   form, of an Arabic, Syriac, N'Ko, or Mandaic character.
        #
        # Field 1: gives a short schematic name for that character.
        #   The schematic name is descriptive of the shape, based as
        #   consistently as possible on a name for the skeleton and
        #   then the diacritic marks applied to the skeleton, if any.
        #   Note that this schematic name is considered a comment,
        #   and does not constitute a formal property value.
        #
        # Field 2: defines the joining type (property name: Joining_Type)
        #   R Right_Joining
        #   L Left_Joining
        #   D Dual_Joining
        #   C Join_Causing
        #   U Non_Joining
        #   T Transparent
        #     See Section 8.2, Arabic for more information on these types.
        #
        # Field 3: defines the joining group (property name: Joining_Group)
        #
        # The values of the joining group are based schematically on character
        # names. Where a schematic character name consists of two or more parts separated
        # by spaces, the formal Joining_Group property value, as specified in
        # PropertyValueAliases.txt, consists of the same name parts joined by
        # underscores. Hence, the entry:
        #
        #   0629; TEH MARBUTA; R; TEH MARBUTA
        #
        # corresponds to [Joining_Group = Teh_Marbuta].
        #
        # Note: The property value now designated [Joining_Group = Teh_Marbuta_Goal]\u0020
        #   used to apply to both of the following characters
        #   in earlier versions of the standard:
        #
        #   U+06C2 ARABIC LETTER HEH GOAL WITH HAMZA ABOVE
        #   U+06C3 ARABIC LETTER TEH MARBUTA GOAL
        #
        #   However, it currently applies only to U+06C3, and *not* to U+06C2.
        #   To avoid destabilizing existing Joining_Group property aliases, the
        #   prior Joining_Group value for U+06C3 (Hamza_On_Heh_Goal) has been
        #   retained as a property value alias, despite the fact that it
        #   no longer applies to its namesake character, U+06C2.
        #   See PropertyValueAliases.txt.
        #
        # When other cursive scripts are added to the Unicode Standard in
        # the future, the joining group value of all its letters will default
        # to jg=No_Joining_Group in this data file. Other, more specific
        # joining group values will be defined only if an explicit proposal
        # to define those values exactly has been approved by the UTC. This
        # is the convention exemplified by the N'Ko and Mandaic scripts. Only the Arabic
        # and Syriac scripts currently have explicit joining group values defined.
        #
        # Note: Code points that are not explicitly listed in this file are
        # either of joining type T or U:
        #
        # - Those that not explicitly listed that are of General Category Mn, Me, or Cf
        #   have joining type T.
        # - All others not explicitly listed have joining type U.
        #
        # For an explicit listing of characters of joining type T, see
        # the derived property file DerivedJoiningType.txt.
        #
        # There are currently no characters of joining type L defined in Unicode.
        #
        # #############################################################"
      `);
  });
});

describe("parseDataFileHeading(LineBreak)", () => {
  it("v4.1.0", () => {
    const content = dataFileFixture("4.1.0", "LineBreak.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# LineBreak-4.1.0.txt
        # Date: 2005-03-17, 15:21:00 PST [KW]
        #
        # Line Break Properties
        #
        # This file is a normative contributory data file in the
        # Unicode Character Database.
        # It contains both normative and informative data.
        #
        # Copyright (c) 1991-2005 Unicode, Inc.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        #
        # The format is two fields separated by a semicolon.
        # Field 0: Unicode value
        # Field 1: LineBreak property, consisting of one of the following values:
        #   Normative:
        #         "BK", "CR", "LF", "CM", "SG", "GL", "CB", "SP", "ZW",
        #         "NL", "WJ", "JL", "JV", "JT", "H2", "H3"
        #   Informative:
        #         "XX", "OP", "CL", "QU", "NS", "EX", "SY",
        #         "IS", "PR", "PO", "NU", "AL", "ID", "IN", "HY",
        #         "BB", "BA", "SA", "AI", "B2"
        #  - All code points, assigned and unassigned, that are not listed\u0020
        #         explicitly are given the value "XX".
        #  - Characters ranges are specified as for other property files in
        #         the Unicode Character Database.
        #
        # The Unicode name of each character is provided in a comment for help
        # in identifying the characters.
        #
        # See UAX #14: Line Breaking Properties, for more information"
    `);
  });

  it("v10.0.0", () => {
    const content = dataFileFixture("10.0.0", "LineBreak.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# LineBreak-10.0.0.txt
        # Date: 2017-03-08, 02:00:00 GMT [KW, LI]
        # © 2017 Unicode®, Inc.
        # Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        #
        # Unicode Character Database
        # For documentation, see http://www.unicode.org/reports/tr44/
        #
        # Line_Break Property
        #
        # This file is a normative contributory data file in the
        # Unicode Character Database.
        #
        # The format is two fields separated by a semicolon.
        # Field 0: Unicode code point value or range of code point values
        # Field 1: Line_Break property, consisting of one of the following values:
        #   Non-tailorable:
        #         "BK", "CM", "CR", "GL", "LF", "NL", "SP", "WJ", "ZW", "ZWJ"
        #   Tailorable:
        #         "AI", "AL", "B2", "BA", "BB", "CB", "CJ", "CL", "CP", "EB",
        #         "EM", "EX", "H2", "H3", "HL", "HY", "ID", "IN", "IS", "JL",
        #         "JT", "JV", "NS", "NU", "OP", "PO", "PR", "QU", "RI", "SA",
        #         "SG", "SY", "XX"
        #  - All code points, assigned and unassigned, that are not listed
        #      explicitly are given the value "XX".
        #  - The unassigned code points in the following blocks default to "ID":
        #         CJK Unified Ideographs Extension A: U+3400..U+4DBF
        #         CJK Unified Ideographs:             U+4E00..U+9FFF
        #         CJK Compatibility Ideographs:       U+F900..U+FAFF
        #  - All undesignated code points in Planes 2 and 3, whether inside or
        #      outside of allocated blocks, default to "ID":
        #         Plane 2:                            U+20000..U+2FFFD
        #         Plane 3:                            U+30000..U+3FFFD
        #  - All unassigned code points in the following Plane 1 range, whether
        #      inside or outside of allocated blocks, also default to "ID":
        #         Plane 1 range:                      U+1F000..U+1FFFD
        #  - The unassigned code points in the following block default to "PR":
        #         Currency Symbols:                   U+20A0..U+20CF
        #
        # Character ranges are specified as for other property files in the
        # Unicode Character Database.
        #
        # For legacy reasons, there are no spaces before or after the semicolon
        # which separates the two fields. The comments following the number sign
        # "#" list the General_Category property value or the L& alias of the
        # derived value LC, the Unicode character name or names, and, in lines
        # with ranges of code points, the code point count in square brackets.
        #
        # For more information, see UAX #14: Unicode Line Breaking Algorithm,
        # at http://www.unicode.org/reports/tr14/"
    `);
  });

  it("v16.0.0", () => {
    const content = dataFileFixture("16.0.0", "LineBreak.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# LineBreak-16.0.0.txt
        # Date: 2024-07-29, 16:26:55 GMT
        # © 2024 Unicode®, Inc.
        # Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
        # For terms of use and license, see https://www.unicode.org/terms_of_use.html
        #
        # Unicode Character Database
        #   For documentation, see https://www.unicode.org/reports/tr44/
        #
        # Line_Break Property
        #
        # This file is a normative contributory data file in the
        # Unicode Character Database.
        #
        # The format is two fields separated by a semicolon.
        # Field 0: Unicode code point value or range of code point values
        # Field 1: Line_Break property, consisting of one of the following values:
        #   Non-tailorable:
        #         "BK", "CM", "CR", "GL", "LF", "NL", "SP", "WJ", "ZW", "ZWJ"
        #   Tailorable:
        #         "AI", "AK", "AL", "AP", "AS", "B2", "BA", "BB", "CB", "CJ",
        #         "CL", "CP", "EB", "EM", "EX", "H2", "H3", "HL", "HY", "ID",
        #         "IN", "IS", "JL", "JT", "JV", "NS", "NU", "OP", "PO", "PR",
        #         "QU", "RI", "SA", "SG", "SY", "VF", "VI", "XX"
        #  - All code points, assigned and unassigned, that are not listed
        #      explicitly are given the value "XX".
        #  - The unassigned code points in the following blocks default to "ID":
        #         CJK Unified Ideographs Extension A: U+3400..U+4DBF
        #         CJK Unified Ideographs:             U+4E00..U+9FFF
        #         CJK Compatibility Ideographs:       U+F900..U+FAFF
        #  - All undesignated code points in Planes 2 and 3, whether inside or
        #      outside of allocated blocks, default to "ID":
        #         Plane 2:                            U+20000..U+2FFFD
        #         Plane 3:                            U+30000..U+3FFFD
        #  - All unassigned code points in the following Plane 1 ranges, whether
        #      inside or outside of allocated blocks, also default to "ID":
        #         Plane 1 range:                      U+1F000..U+1FAFF
        #         Plane 1 range:                      U+1FC00..U+1FFFD
        #  - The unassigned code points in the following block default to "PR":
        #         Currency Symbols:                   U+20A0..U+20CF
        #
        # Character ranges are specified as for other property files in the
        # Unicode Character Database.
        #
        # The comments following the number sign "#" list the General_Category
        # property value or the L& alias of the derived value LC, the Unicode
        # character name or names, and, in lines with ranges of code points,
        # the code point count in square brackets.
        #
        # For more information, see UAX #14: Unicode Line Breaking Algorithm,
        # at https://www.unicode.org/reports/tr14/"
    `);
  });
});

describe("parseDataFileHeading(BidiMirroring)", () => {
  it("v15.1.0", () => {
    const content = dataFileFixture("15.1.0", "BidiMirroring.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });

  it("v6.1.0", () => {
    const content = dataFileFixture("6.1.0", "BidiMirroring.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });
});

describe("parseDataFileHeading(BidiTest)", () => {
  it("v14.0.0", () => {
    const content = dataFileFixture("14.0.0", "BidiTest.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });

  it("v5.2.0", () => {
    const content = dataFileFixture("5.2.0", "BidiTest.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });
});

describe("parseDataFileHeading(CaseFolding)", () => {
  it("v13.0.0", () => {
    const content = dataFileFixture("13.0.0", "CaseFolding.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });

  it("v7.0.0", () => {
    const content = dataFileFixture("7.0.0", "CaseFolding.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });
});

describe("parseDataFileHeading(EmojiSources)", () => {
  it("v12.1.0", () => {
    const content = dataFileFixture("12.1.0", "EmojiSources.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });

  it("v6.0.0", () => {
    const content = dataFileFixture("6.0.0", "EmojiSources.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });
});

describe("parseDataFileHeading(NamedSequences)", () => {
  it("v15.0.0", () => {
    const content = dataFileFixture("15.0.0", "NamedSequences.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });

  it("v9.0.0", () => {
    const content = dataFileFixture("9.0.0", "NamedSequences.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });
});

describe("parseDataFileHeading(PropList)", () => {
  it("v11.0.0", () => {
    const content = dataFileFixture("11.0.0", "PropList.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });

  it("v4.1.0", () => {
    const content = dataFileFixture("4.1.0", "PropList.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });
});

describe("parseDataFileHeading(Scripts)", () => {
  it("v12.0.0", () => {
    const content = dataFileFixture("12.0.0", "Scripts.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });

  it("v5.0.0", () => {
    const content = dataFileFixture("5.0.0", "Scripts.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });
});

describe("parseDataFileHeading(UnicodeData)", () => {
  it("v10.0.0", () => {
    const content = dataFileFixture("10.0.0", "UnicodeData.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });

  it("v6.2.0", () => {
    const content = dataFileFixture("6.2.0", "UnicodeData.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`INSERT HERE`);
  });
});
