import type { Field } from "./types";

interface ExistingField {
  name: string;
  source: string | null;
}

function sourceFromGeneratedLink(link: string): string | null {
  const lineMatch = /#(L\d+(?:-L\d+)?)$/.exec(link);
  if (lineMatch != null) {
    return `header:${lineMatch[1]}`;
  }

  const reportMatch = /^https:\/\/ucdjs\.dev\/reports\/([^/]+)\/?$/.exec(link);
  if (reportMatch != null) {
    return `report:https://www.unicode.org/reports/${reportMatch[1]}/`;
  }

  return null;
}

function parseExistingFields(code: string): ExistingField[] {
  const fields: ExistingField[] = [];
  const fieldPattern = /\/\*\*([\s\S]*?)\*\/\n\s+([A-Za-z_$][\w$]*):\s*[^;\n]+;/g;

  for (const match of code.matchAll(fieldPattern)) {
    const doc = match[1] ?? "";
    const sourceMatch = /@source\s+(\S+)/.exec(doc);
    fields.push({
      name: match[2]!,
      source: sourceMatch == null ? null : sourceFromGeneratedLink(sourceMatch[1]!),
    });
  }

  return fields;
}

export function preserveExistingFieldNames(fields: Field[], existingCode: string | null): Field[] {
  if (existingCode == null || fields.length === 0) {
    return fields;
  }

  const existingFields = parseExistingFields(existingCode);
  if (existingFields.length !== fields.length) {
    return fields;
  }

  const sourcesMatch = existingFields.every(
    (existingField, index) =>
      existingField.source != null && existingField.source === fields[index]!.source,
  );
  if (!sourcesMatch) {
    return fields;
  }

  return fields.map((field, index) => ({
    ...field,
    name: existingFields[index]!.name,
  }));
}
