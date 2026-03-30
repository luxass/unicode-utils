import type { FileParser } from "../types";

export const BLOCKS_PARSER: FileParser = {
  fileName: "Blocks",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "range", type: "codepoint-range" },
    { name: "name", type: "string-trimmed" },
  ],
};
