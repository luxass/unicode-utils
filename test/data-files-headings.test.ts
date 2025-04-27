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
        # at http://www.unicode.org/reports/tr14/
        #"
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
        # at https://www.unicode.org/reports/tr14/
        #"
    `);
  });
});

describe("parseDataFileHeading(BidiMirroring)", () => {
  it("v15.1.0", () => {
    const content = dataFileFixture("15.1.0", "BidiMirroring.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# BidiMirroring-15.1.0.txt
        # Date: 2023-01-05
        # © 2023 Unicode®, Inc.
        # For terms of use, see https://www.unicode.org/terms_of_use.html
        #
        # Unicode Character Database
        # For documentation, see https://www.unicode.org/reports/tr44/
        #
        # Bidi_Mirroring_Glyph Property
        #
        # This file is an informative contributory data file in the
        # Unicode Character Database.
        #
        # This data file lists characters that have the Bidi_Mirrored=Yes property
        # value, for which there is another Unicode character that typically has a glyph
        # that is the mirror image of the original character's glyph.
        #
        # The repertoire covered by the file is Unicode 15.1.0.
        #
        # The file contains a list of lines with mappings from one code point
        # to another one for character-based mirroring.
        # Note that for "real" mirroring, a rendering engine needs to select
        # appropriate alternative glyphs, and that many Unicode characters do not
        # have a mirror-image Unicode character.
        #
        # Each mapping line contains two fields, separated by a semicolon (';').
        # Each of the two fields contains a code point represented as a
        # variable-length hexadecimal value with 4 to 6 digits.
        # A comment indicates where the characters are "BEST FIT" mirroring.
        #
        # Code points for which Bidi_Mirrored=Yes, but for which no appropriate
        # characters exist with mirrored glyphs, are
        # listed as comments at the end of the file.
        #
        # Formally, the default value of the Bidi_Mirroring_Glyph property
        # for each code point is <none>, unless a mapping to
        # some other character is specified in this data file. When a code
        # point has the default value for the Bidi_Mirroring_Glyph property,
        # that means that no other character exists whose glyph is suitable
        # for character-based mirroring.
        #
        # For information on bidi mirroring, see UAX #9: Unicode Bidirectional Algorithm,
        # at https://www.unicode.org/reports/tr9/
        #
        # This file was originally created by Markus Scherer.
        # Extended for Unicode 3.2, 4.0, 4.1, 5.0, 5.1, 5.2, and 6.0 by Ken Whistler,
        # and for subsequent versions by Ken Whistler, Laurentiu Iancu, and Roozbeh Pournader.
        #
        # Historical and Compatibility Information:
        #
        # The OpenType Mirroring Pairs List (OMPL) is frozen to match the
        # Unicode 5.1 version of the Bidi_Mirroring_Glyph property (2008).
        # See https://www.microsoft.com/typography/otspec/ompl.txt
        #
        # The Unicode 6.1 version of the Bidi_Mirroring_Glyph property (2011)
        # added one mirroring pair: 27CB <--> 27CD.
        #
        # The Unicode 11.0 version of the Bidi_Mirroring_Glyph property (2018)
        # underwent a substantial revision, to formally recognize all of the
        # exact mirroring pairs and "BEST FIT" mirroring pairs that had been
        # added after the freezing of the OMPL list. As a result, starting
        # with Unicode 11.0, the bmg mapping values more accurately reflect
        # the current status of glyphs for Bidi_Mirrored characters in
        # the Unicode Standard, but this listing now extends significantly
        # beyond the frozen OMPL list. Implementers should be aware of this
        # intentional distinction.
        #
        # ############################################################
        #
        # Property:\tBidi_Mirroring_Glyph
        #"
      `);
  });

  it("v6.1.0", () => {
    const content = dataFileFixture("6.1.0", "BidiMirroring.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# BidiMirroring-6.1.0.txt
        # Date: 2011-12-20, 19:31:00 GMT [KW, LI]
        #
        # Bidi_Mirroring_Glyph Property
        #\u0020
        # This file is an informative contributory data file in the
        # Unicode Character Database.
        #
        # Copyright (c) 1991-2011 Unicode, Inc.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        #
        # This data file lists characters that have the Bidi_Mirrored=Yes property
        # value, for which there is another Unicode character that typically has a glyph
        # that is the mirror image of the original character's glyph.
        #
        # The repertoire covered by the file is Unicode 6.1.0.
        #\u0020
        # The file contains a list of lines with mappings from one code point
        # to another one for character-based mirroring.
        # Note that for "real" mirroring, a rendering engine needs to select
        # appropriate alternative glyphs, and that many Unicode characters do not
        # have a mirror-image Unicode character.
        #\u0020
        # Each mapping line contains two fields, separated by a semicolon (';').
        # Each of the two fields contains a code point represented as a
        # variable-length hexadecimal value with 4 to 6 digits.
        # A comment indicates where the characters are "BEST FIT" mirroring.
        #\u0020
        # Code points for which Bidi_Mirrored=Yes, but for which no appropriate\u0020
        # characters exist with mirrored glyphs, are
        # listed as comments at the end of the file.
        #
        #   Note: (2011-12-19) There is an inconsistency between the\u0020
        #   following statement about the default value
        #   of the Bidi_Mirroring_Glyph property and the
        #   value of the @missing line for Bidi_Mirroring_Glyph in
        #   PropertyValueAliases.txt. This inconsistency was discovered too
        #   late in the release process to be resolved by
        #   the UTC. The inconsistency will be resolved in a future revision.
        #
        # Formally, the default value of the Bidi_Mirroring_Glyph property
        # for each code point is the code point itself, unless a mapping to
        # some other character is specified in this data file. When a code
        # point has the default value for the Bidi_Mirroring_Glyph property,
        # that means that no other character exists whose glyph is suitable
        # for character-based mirroring.
        #\u0020
        # For information on bidi mirroring, see UAX #9: Bidirectional Algorithm,
        # at http://www.unicode.org/unicode/reports/tr9/
        #\u0020
        # This file was originally created by Markus Scherer.
        # Extended for Unicode 3.2, 4.0, 4.1, 5.0, 5.1, 5.2, and 6.0 by Ken Whistler,
        # and for Unicode 6.1 by Ken Whistler and Laurentiu Iancu.
        #\u0020
        # ############################################################
        #
        # Property:\tBidi_Mirroring_Glyph
        #"
      `);
  });
});

describe("parseDataFileHeading(BidiTest)", () => {
  it("v14.0.0", () => {
    const content = dataFileFixture("14.0.0", "BidiTest.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# BidiTest-14.0.0.txt
        # Date: 2021-03-08, 19:35:40 GMT
        # © 2021 Unicode®, Inc.
        # Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        #
        # Unicode Character Database
        #   For documentation, see http://www.unicode.org/reports/tr44/
        #
        # This file provides a conformance test for UBA (Unicode Bidi Algorithm) implementations.
        # It is designed to be reasonably compact, and yet provide a thorough test of all cases up to
        # a given limit (currently 4). Additionally, it contains some longer cases useful for testing
        # some common pitfalls of UBA implementations.
        #
        # Note that for the test cases in this file, it is assumed that no bidi
        # paired brackets exist in the input that would affect the resolved levels
        # or reordering. For test cases with bidi paired brackets and other
        # character-code specific test cases, refer to BidiCharacterTest.txt.
        # Implementations are expected to correctly cover all test cases in both
        # test files.
        #
        # The test cases in this file are further limited in the following ways:
        #
        # - The Bidi_Class B (Paragraph_Separator) only appears as the last
        #   character in a sequence. Thus, each sequence is assumed to consist of
        #   only one paragraph. Implementations may need extra testing for rule P1
        #   of the UBA.
        #
        # - For the application of rules L1 and L2, it is assumed that all the
        #   characters in the input would be rendered on a single line, with no line
        #   breaks.
        #
        # - Implementation of rules L3 and L4 is platform- and character-specific
        #   and test cases for it are not provided in this data file.
        #
        #
        # Format:
        #
        # All tokens may be separated by whitespaces (space or tab). There are three kinds of lines:
        # Levels, Reorder, and data.
        #
        # A Levels line indicates that all following data lines, up to the next Levels line,
        # have the same resulting ordering levels. It has the following format:
        #
        # @Levels: <levels>
        #
        #    <levels> =     An ordered space-delimited list of numbers indicating the resulting levels
        #                   for each input property value. The UBA does not assign levels to certain values;
        #                   those are indicated with an x. See the note below.
        # Examples:
        #   @Levels:    1 0
        #   @Levels:    x 1 x 2
        #
        # A Reorder line indicates that all following data lines, up to the next Reorder line,
        # have the same resulting reordering. It has the following format:
        #
        # @Reorder: <ordering>
        #
        #    <ordering> =   An ordered space-delimited list of numbers indicating the resulting
        #                   visual ordering from left to right. The numbers are zero-based, and
        #                   are indexes into the input string. Items with a level of x are skipped.
        #                   Thus "1 0" indicates what would happen with input of "L R" and an RTL
        #                   paragraph direction.
        # Example:
        #   @Reorder:    1 0
        #   @Reorder:    3 1
        #
        # A data line has the following format:
        # <input> ; <bitset>
        #   <input>  =      An ordered list of BIDI property values
        #   <bitset> =      A hex bitset for paragraph levels (P): 1 = auto-LTR, 2 = LTR, 4 = RTL
        #                   Auto-LTR (standard BIDI) uses the first L/R/AL character, and is LTR if none is found.
        # Example:
        #    L LRE R R; 7
        #    L LRE R AL; 7
        #
        # Any other line starting with @ is to be ignored (this allows some degree of forward compatibility).
        #
        # Usage:
        #
        # - If the implementation API allows a list of bidi property values as input:
        #
        #   For each of the paragraph levels in the bitset:
        #     Find the levels in each line, and compare that to the last @Levels values.
        #       If they are different, the test fails.
        #     Reorder the elements, and compare to the @Reorder values.
        #       If they are different, the test fails.
        #
        # - If the implementation allows for a character string as input,
        #   randomly pick characters from those with the same Bidi_Class values,
        #   and test the reordering as above.
        #
        # Note that the UBA doesn't specify the output level or order of certain characters,
        # such as LRO. These are omitted from the reordered output. Thus the following two
        # input lines have the same result (0), since the LRE (item 1) is omitted on the second line.
        #
        #   L; 7
        #   L LRE; 7
        #"
      `);
  });

  it("v5.2.0", () => {
    const content = dataFileFixture("5.2.0", "BidiTest.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# BidiTest-5.2.0.txt
        # Date: 2009-06-03, 17:03:12 GMT [MD]
        #
        # Unicode Character Database
        # Copyright (c) 1991-2009 Unicode, Inc.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        # For documentation, see http://www.unicode.org/reports/tr44/
        #
        # This file provides a conformance test for UBA (Unicode Bidi Algorithm) implementations.
        # It is designed to be reasonably compact, and yet provide a thorough test of all cases up to
        # a given limit (currently 4).
        #
        # Format:
        #
        # @Type:    <bidi_class>:  <set>
        # These lines define which characters have the bidi_class property value,
        # and are used in the remainder of the test.
        #   <bidi_class> =  The bidi class property value
        #   <set> =         All and only the those codepoints with that property value in <set>.
        #                   <set> is a character range as defined in UTS #18 Unicode Regular Expressions.
        # Example:
        #   @Type:    AN:    [\\u0600-\\u0603\\u0660-\\u0669\\u066B\\u066C\\u06DD]
        #
        # @Levels: <levels>
        # These lines indicate that all following* data lines have the same resulting ordering levels
        # (*that is, data lines up to the next @Levels).
        #    <levels> =     An ordered space-delimited list of numbers indicating the resulting levels
        #                   for each input property value. The UBA does not assign levels to certain values;
        #                   those are indicated with an x. See the note below.
        # Examples:
        #   @Levels:    1 0
        #   @Levels:    x 1 x 2
        #
        # @Reorder: <ordering>
        # These lines indicate that all following* data lines have the same resulting reordering
        # (*that is, data lines up to the next @Reorder).
        #    <ordering> =   An ordered space-delimited list of numbers indicating the resulting
        #                   ordering from left to right. The numbers are zero-based. Items with
        #                   a level of x are skipped. Thus "1 0" indicates what would happen
        #                   with input of "L R" and an RTL paragraph direction.
        # Example:
        #   @Reorder:    1 0
        #   @Reorder:    3 1
        #
        # <input> ; <bitset>
        #   <input>  =      An ordered list of BIDI property values
        #   <bitset> =      A bitset for paragraph levels (P): 1 = automatic, 2 = LTR, 4 = RTL
        # Example:
        #    L LRE R R; 7
        #    L LRE R AL; 7
        #
        # Usage:
        #
        # - If the implementation API allows a list of bidi property values as input:
        #
        #   For each of the paragraph levels in the bitset:
        #     Find the levels in each line, and compare that to the last @Levels values.
        #       If they are different, the test fails.
        #     Reorder the elements, and compare to the @Reorder values.
        #       If they are different, the test fails.
        #
        # - If the implementation allows for a character string as input,
        #   randomly pick characters from the @type values, and test the reordering as above.
        #
        # Note that the UBA doesn't specify the output level or order of certain characters,
        # such as LRO. These are omitted from the reordered output. Thus the following two
        # input lines have the same result (0), since the LRE (item 1) is omitted on the second line.
        #
        #   L; 7
        #   L LRE; 7
        #"
      `);
  });
});

describe("parseDataFileHeading(CaseFolding)", () => {
  it("v13.0.0", () => {
    const content = dataFileFixture("13.0.0", "CaseFolding.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
      "# CaseFolding-13.0.0.txt
      # Date: 2019-09-08, 23:30:59 GMT
      # © 2019 Unicode®, Inc.
      # Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
      # For terms of use, see http://www.unicode.org/terms_of_use.html
      #
      # Unicode Character Database
      #   For documentation, see http://www.unicode.org/reports/tr44/
      #
      # Case Folding Properties
      #
      # This file is a supplement to the UnicodeData file.
      # It provides a case folding mapping generated from the Unicode Character Database.
      # If all characters are mapped according to the full mapping below, then
      # case differences (according to UnicodeData.txt and SpecialCasing.txt)
      # are eliminated.
      #
      # The data supports both implementations that require simple case foldings
      # (where string lengths don't change), and implementations that allow full case folding
      # (where string lengths may grow). Note that where they can be supported, the
      # full case foldings are superior: for example, they allow "MASSE" and "Maße" to match.
      #
      # All code points not listed in this file map to themselves.
      #
      # NOTE: case folding does not preserve normalization formats!
      #
      # For information on case folding, including how to have case folding
      # preserve normalization formats, see Section 3.13 Default Case Algorithms in
      # The Unicode Standard.
      #
      # ================================================================================
      # Format
      # ================================================================================
      # The entries in this file are in the following machine-readable format:
      #
      # <code>; <status>; <mapping>; # <name>
      #
      # The status field is:
      # C: common case folding, common mappings shared by both simple and full mappings.
      # F: full case folding, mappings that cause strings to grow in length. Multiple characters are separated by spaces.
      # S: simple case folding, mappings to single characters where different from F.
      # T: special case for uppercase I and dotted uppercase I
      #    - For non-Turkic languages, this mapping is normally not used.
      #    - For Turkic languages (tr, az), this mapping can be used instead of the normal mapping for these characters.
      #      Note that the Turkic mappings do not maintain canonical equivalence without additional processing.
      #      See the discussions of case mapping in the Unicode Standard for more information.
      #
      # Usage:
      #  A. To do a simple case folding, use the mappings with status C + S.
      #  B. To do a full case folding, use the mappings with status C + F.
      #
      #    The mappings with status T can be used or omitted depending on the desired case-folding
      #    behavior. (The default option is to exclude them.)
      #
      # ================================================================="
    `);
  });

  it("v7.0.0", () => {
    const content = dataFileFixture("7.0.0", "CaseFolding.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
      "# CaseFolding-7.0.0.txt
      # Date: 2014-04-09, 20:00:56 GMT [MD]
      #
      # Unicode Character Database
      # Copyright (c) 1991-2014 Unicode, Inc.
      # For terms of use, see http://www.unicode.org/terms_of_use.html
      # For documentation, see http://www.unicode.org/reports/tr44/
      #
      # Case Folding Properties
      #
      # This file is a supplement to the UnicodeData file.
      # It provides a case folding mapping generated from the Unicode Character Database.
      # If all characters are mapped according to the full mapping below, then
      # case differences (according to UnicodeData.txt and SpecialCasing.txt)
      # are eliminated.
      #
      # The data supports both implementations that require simple case foldings
      # (where string lengths don't change), and implementations that allow full case folding
      # (where string lengths may grow). Note that where they can be supported, the
      # full case foldings are superior: for example, they allow "MASSE" and "Maße" to match.
      #
      # All code points not listed in this file map to themselves.
      #
      # NOTE: case folding does not preserve normalization formats!
      #
      # For information on case folding, including how to have case folding\u0020
      # preserve normalization formats, see Section 3.13 Default Case Algorithms in
      # The Unicode Standard.
      #
      # ================================================================================
      # Format
      # ================================================================================
      # The entries in this file are in the following machine-readable format:
      #
      # <code>; <status>; <mapping>; # <name>
      #
      # The status field is:
      # C: common case folding, common mappings shared by both simple and full mappings.
      # F: full case folding, mappings that cause strings to grow in length. Multiple characters are separated by spaces.
      # S: simple case folding, mappings to single characters where different from F.
      # T: special case for uppercase I and dotted uppercase I
      #    - For non-Turkic languages, this mapping is normally not used.
      #    - For Turkic languages (tr, az), this mapping can be used instead of the normal mapping for these characters.
      #      Note that the Turkic mappings do not maintain canonical equivalence without additional processing.
      #      See the discussions of case mapping in the Unicode Standard for more information.
      #
      # Usage:
      #  A. To do a simple case folding, use the mappings with status C + S.
      #  B. To do a full case folding, use the mappings with status C + F.
      #
      #    The mappings with status T can be used or omitted depending on the desired case-folding
      #    behavior. (The default option is to exclude them.)
      #
      # ================================================================="
    `);
  });
});

describe("parseDataFileHeading(EmojiSources)", () => {
  it("v12.1.0", () => {
    const content = dataFileFixture("12.1.0", "EmojiSources.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
      "# EmojiSources-12.1.0.txt
      # Date: 2019-03-08, 23:59:00 GMT [MS, KW]
      # © 2019 Unicode®, Inc.
      # For terms of use, see http://www.unicode.org/terms_of_use.html
      #
      # Unicode Character Database
      # For documentation, see http://www.unicode.org/reports/tr44/
      #
      # This file provides historical mappings between Unicode code points and sequences on one hand
      # and Shift-JIS codes for cell phone carrier symbols on the other hand.
      # Each mapping is symmetric ("round trip"), for equivalent Unicode and carrier
      # symbols or sequences. This file does not include best-fit ("fallback")
      # mappings to similar but not equivalent symbols in either mapping direction.
      #
      # Created for Unicode 6.0 by Markus Scherer.
      # Updated for subsequent versions by Ken Whistler (no changes to mappings).
      #
      # Format: Semicolon-delimited file with a fixed number of fields.
      # Note that the format, including the number of fields, may change in the future.
      #
      # Fields:
      # 0: Unicode code point or sequence
      # 1: DoCoMo Shift-JIS code
      # 2: KDDI Shift-JIS code
      # 3: SoftBank Shift-JIS code
      #
      # Each field 1..3 contains a code if and only if the vendor character set
      # has a symbol which is equivalent to the Unicode character or sequence."
    `);
  });

  it("v6.0.0", () => {
    const content = dataFileFixture("6.0.0", "EmojiSources.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
      "# EmojiSources-6.0.0.txt
      # Date: 2010-04-24, 00:00:00 GMT [MS]
      #
      # Unicode Character Database
      # Copyright (c) 1991-2010 Unicode, Inc.
      # For terms of use, see http://www.unicode.org/terms_of_use.html
      # For documentation, see http://www.unicode.org/reports/tr44/
      #
      # This file provides mappings between Unicode code points and sequences on one hand
      # and Shift-JIS codes for cell phone carrier symbols on the other hand.
      # Each mapping is symmetric ("round trip"), for equivalent Unicode and carrier
      # symbols or sequences. This file does not include best-fit ("fallback")
      # mappings to similar but not equivalent symbols in either mapping direction.
      #
      # Note: It is possible that future versions of this file will include
      # additional data columns providing mappings for additional vendors.
      #
      # Format: Semicolon-delimited file with a fixed number of fields.
      # The number of fields may increase in the future.
      #
      # Fields:
      # 0: Unicode code point or sequence
      # 1: DoCoMo Shift-JIS code
      # 2: KDDI Shift-JIS code
      # 3: SoftBank Shift-JIS code
      #
      # Each field 1..3 contains a code if and only if the vendor character set
      # has a symbol which is equivalent to the Unicode character or sequence."
    `);
  });
});

describe("parseDataFileHeading(NamedSequences)", () => {
  it("v15.0.0", () => {
    const content = dataFileFixture("15.0.0", "NamedSequences.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
      "# NamedSequences-15.0.0.txt
      # Date: 2021-12-07, 17:18:00 GMT [KW]
      # © 2021 Unicode®, Inc.
      # For terms of use, see https://www.unicode.org/terms_of_use.html
      #
      # Unicode Character Database
      # For documentation, see https://www.unicode.org/reports/tr44/
      #
      # Unicode Named Character Sequences
      #
      # This file is a normative contributory data file in the Unicode
      # Character Database.
      #
      # Format:
      # Name of Sequence; Code Point Sequence for USI
      #
      # Code point sequences in the Unicode Character Database
      # use spaces as delimiters. The corresponding format for a
      # UCS Sequence Identifier (USI) in ISO/IEC 10646 uses
      # comma delimitation and angle brackets. Thus, a Unicode
      # named character sequence of the form:
      #
      # EXAMPLE NAME;1000 1001 1002
      #
      # in this data file, would correspond to an ISO/IEC 10646 USI
      # as follows:
      #
      # <1000, 1001, 1002>
      #
      # For more information, see UAX #34: Unicode Named Character
      # Sequences, at https://www.unicode.org/reports/tr34/
      #
      # Note: The order of entries in this file is not significant.
      # However, entries are generally in script order corresponding
      # to block order in the Unicode Standard, to make it easier
      # to find entries in the list."
    `);
  });

  it("v9.0.0", () => {
    const content = dataFileFixture("9.0.0", "NamedSequences.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
      "# NamedSequences-9.0.0.txt
      # Date: 2016-05-26, 00:00:00 GMT [KW, LI]
      # © 2016 Unicode®, Inc.
      # For terms of use, see http://www.unicode.org/terms_of_use.html
      #
      # Unicode Character Database
      # For documentation, see http://www.unicode.org/reports/tr44/
      #
      # Unicode Named Character Sequences
      #
      # This file is a normative contributory data file in the Unicode
      # Character Database.
      #
      # Format:
      # Name of Sequence; Code Point Sequence for USI
      #
      # Code point sequences in the Unicode Character Database
      # use spaces as delimiters. The corresponding format for a
      # UCS Sequence Identifier (USI) in ISO/IEC 10646 uses
      # comma delimitation and angle brackets. Thus, a Unicode
      # named character sequence of the form:
      #
      # EXAMPLE NAME;1000 1001 1002
      #
      # in this data file, would correspond to an ISO/IEC 10646 USI
      # as follows:
      #
      # <1000, 1001, 1002>
      #
      # For more information, see UAX #34: Unicode Named Character
      # Sequences, at http://www.unicode.org/unicode/reports/tr34/
      #
      # Note: The order of entries in this file is not significant.
      # However, entries are generally in script order corresponding
      # to block order in the Unicode Standard, to make it easier
      # to find entries in the list."
    `);
  });
});

describe("parseDataFileHeading(PropList)", () => {
  it("v11.0.0", () => {
    const content = dataFileFixture("11.0.0", "PropList.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
      "# PropList-11.0.0.txt
      # Date: 2018-03-15, 04:28:35 GMT
      # © 2018 Unicode®, Inc.
      # Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
      # For terms of use, see http://www.unicode.org/terms_of_use.html
      #
      # Unicode Character Database
      #   For documentation, see http://www.unicode.org/reports/tr44/"
    `);
  });

  it("v4.1.0", () => {
    const content = dataFileFixture("4.1.0", "PropList.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
      "# PropList-4.1.0.txt
      # Date: 2005-03-26, 00:34:40 GMT [MD]
      #
      # Unicode Character Database
      # Copyright (c) 1991-2005 Unicode, Inc.
      # For terms of use, see http://www.unicode.org/terms_of_use.html
      # For documentation, see UCD.html"
    `);
  });
});

describe("parseDataFileHeading(Scripts)", () => {
  it("v12.0.0", () => {
    const content = dataFileFixture("12.0.0", "Scripts.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# Scripts-12.0.0.txt
        # Date: 2019-01-28, 22:16:47 GMT
        # © 2019 Unicode®, Inc.
        # Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        #
        # Unicode Character Database
        #   For documentation, see http://www.unicode.org/reports/tr44/
        # For more information, see:
        #   UAX #24, Unicode Script Property: http://www.unicode.org/reports/tr24/
        #     Especially the sections:
        #       http://www.unicode.org/reports/tr24/#Assignment_Script_Values
        #       http://www.unicode.org/reports/tr24/#Assignment_ScriptX_Values
        #"
      `);
  });

  it("v5.0.0", () => {
    const content = dataFileFixture("5.0.0", "Scripts.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(dedent`
        "# Scripts-5.0.0.txt
        # Date: 2006-03-09, 23:14:25 GMT [MD]
        #
        # Unicode Character Database
        # Copyright (c) 1991-2006 Unicode, Inc.
        # For terms of use, see http://www.unicode.org/terms_of_use.html
        # For documentation, see UCD.html"
      `);
  });
});

describe("parseDataFileHeading(UnicodeData)", () => {
  it("v10.0.0", () => {
    const content = dataFileFixture("10.0.0", "UnicodeData.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`undefined`);
  });

  it("v6.2.0", () => {
    const content = dataFileFixture("6.2.0", "UnicodeData.txt");
    expect(parseDataFileHeading(content)).toMatchInlineSnapshot(`undefined`);
  });
});
