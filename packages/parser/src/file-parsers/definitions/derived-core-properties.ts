import type { FileParser } from "../types";

export const DERIVED_CORE_PROPERTIES_PARSER: FileParser = {
  fileName: "DerivedCoreProperties",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "range", type: "codepoint-or-range" },
    { name: "property", type: "string-trimmed" },
  ],
};
