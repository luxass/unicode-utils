import { tool } from "ai";
import z from "zod";

import { fetchUnicodeReport, normalizeReportUrl } from "./reports";
import { CANDIDATE_FIELD_SCHEMA } from "./schema";
import { loadSkill } from "./skill";
import { validateAndNormalizeCandidateFields } from "./validation";

interface FieldToolContext {
  fetchedUrls: Set<string>;
  headingLines: ReadonlyMap<number, string>;
}

function getFieldToolContext(value: unknown): FieldToolContext {
  if (typeof value !== "object" || value === null) {
    throw new Error("experimental_context requires fetchedUrls and headingLines");
  }

  const context = value as Partial<FieldToolContext>;
  if (!(context.fetchedUrls instanceof Set) || !(context.headingLines instanceof Map)) {
    throw new Error("experimental_context requires fetchedUrls and headingLines");
  }

  return {
    fetchedUrls: context.fetchedUrls,
    headingLines: context.headingLines,
  };
}

export const LOAD_SKILL_TOOL = tool({
  description:
    "Load the detailed playbook for a specific UCD header pattern. Call this after identifying which pattern the current header matches. You MUST call this before producing a final answer (unless returning an empty fields array).",
  inputSchema: z.object({
    name: z.string().describe("The skill name to load."),
  }),
  execute: async ({ name }) => loadSkill(name),
});

const UNICODE_REPORT_URL_PATTERN = /^https?:\/\/(www\.)?unicode\.org\/reports\/(.*)$/m;
export const FETCH_UNICODE_REPORT_TOOL = tool({
  description: "Fetch a Unicode report or specification page from unicode.org",
  inputSchema: z.object({
    url: z.string().regex(UNICODE_REPORT_URL_PATTERN),
  }),
  execute: async ({ url }, options) => {
    const context = getFieldToolContext(options.experimental_context);

    if (!/^https?:\/\/(www\.)?unicode\.org\/reports\/(.*)$/m.test(url)) {
      return "Error: Only unicode.org/reports/ URLs are permitted.";
    }

    const normalizedUrl = normalizeReportUrl(url);
    if (context.fetchedUrls.has(normalizedUrl)) {
      return "Error: This URL has already been fetched. Do not fetch the same URL twice.";
    }
    context.fetchedUrls.add(normalizedUrl);

    const text = await fetchUnicodeReport(normalizedUrl);
    const maxChars = 12_000;
    return text.length > maxChars
      ? `${text.slice(0, maxChars)}\n\n[truncated - content exceeded ${maxChars} characters]`
      : text;
  },
});

export const VALIDATE_FIELDS_TOOL = tool({
  description:
    "Validate and normalize candidate fields. Call this before final output. If issues are returned, fix and call again.",
  inputSchema: z.object({
    fields: z.array(CANDIDATE_FIELD_SCHEMA),
  }),
  execute: async ({ fields }, options) => {
    const context = getFieldToolContext(options.experimental_context);
    const { violations } = validateAndNormalizeCandidateFields(
      fields,
      context.headingLines,
      context.fetchedUrls,
    );
    return {
      ok: violations.length === 0,
      violations,
    };
  },
});
