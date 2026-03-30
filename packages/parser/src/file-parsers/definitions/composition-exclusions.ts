import type { FileParser } from "../types";

export const COMPOSITION_EXCLUSIONS_PARSER: FileParser = {
  fileName: "CompositionExclusions",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "codepoint", type: "codepoint" },
  ],
};
