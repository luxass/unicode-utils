import { z } from "zod";

export const FIELD_TYPE_SCHEMA = z.object({
  kind: z
    .enum([
      "string",
      "number",
      "boolean",
      "string_array",
      "number_array",
      "record_string",
      "record_number",
      "record_unknown",
      "unknown",
    ])
    .describe("Semantic type kind. Do not emit TypeScript syntax here."),
  literals: z
    .array(z.string())
    .optional()
    .describe("Allowed string literal values. Only valid when kind is 'string'."),
  allowOther: z
    .boolean()
    .optional()
    .describe("For string literals, whether values outside literals are also accepted."),
});

export const CANDIDATE_FIELD_SCHEMA = z.object({
  name: z.string(),
  type: FIELD_TYPE_SCHEMA,
  description: z.string(),
  source: z
    .string()
    .describe(
      "Origin: 'header:L<n>', 'header:L<start>-L<end>', or 'report:<url>'. No other values permitted.",
    ),
});
