import type { FileParser } from "../types";

export const UNICODE_DATA_PARSER: FileParser = {
  fileName: "UnicodeData",
  separator: ";",
  trimFields: false,
  stripInlineComments: false,
  fields: [
    { name: "codepoint", type: "codepoint" },
    { name: "name", type: "string" },
    { name: "general_category", type: "string" },
    { name: "canonical_combining", type: "number" },
    { name: "bidi_class", type: "string" },
    { name: "decomposition", type: "optional-string", nullable: true },
    { name: "decimal_digit", type: "optional-string", nullable: true },
    { name: "digit", type: "optional-string", nullable: true },
    { name: "numeric", type: "optional-string", nullable: true },
    { name: "mirrored", type: "string" },
    { name: "unicode1_name", type: "optional-string", nullable: true },
    { name: "iso_comment", type: "optional-string", nullable: true },
    { name: "uppercase_mapping", type: "optional-string", nullable: true },
    { name: "lowercase_mapping", type: "optional-string", nullable: true },
    { name: "titlecase_mapping", type: "optional-string", nullable: true },
  ],
};
