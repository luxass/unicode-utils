import type { MissingAnnotation } from "../line-helpers";
import type { RootNode, SectionNode } from "./ast";
import { isSectionNode } from "./typeguards";

export interface StringifySectionsOptions {
  /**
   * Separator placed between fields when reconstructing data lines.
   * Default: "; "
   */
  separator?: string;
  /**
   * Emit "# @missing:" lines before each section's data when
   * the section has missingAnnotations. Default: true
   */
  emitMissingAnnotations?: boolean;
  /** Append "# EOF" at the end of the output. Default: false */
  emitEOF?: boolean;
  /** Line ending style. Default: "\n" */
  lineEnding?: "\n" | "\r\n";
}

function reconstructMissingLine(annotation: MissingAnnotation): string {
  const range = `${annotation.start}..${annotation.end}`;
  if (annotation.propertyName) {
    return `# @missing: ${range}; ${annotation.propertyName}; ${annotation.defaultPropertyValue}`;
  }
  return `# @missing: ${range}; ${annotation.defaultPropertyValue}`;
}

function fieldToString(value: unknown, rawValue: string): string {
  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    const r = value as Record<string, unknown>;
    if (typeof r.start === "string" && typeof r.end === "string") {
      return `${r.start}..${r.end}`;
    }
  }
  if (Array.isArray(value)) {
    return value.map((v) => fieldToString(v, "")).join(" ");
  }
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  return rawValue;
}

function stringifySectionNode(section: SectionNode, options?: StringifySectionsOptions): string {
  const sep = options?.separator ?? "; ";
  const emitMissing = options?.emitMissingAnnotations ?? true;
  const lineEnding = options?.lineEnding ?? "\n";
  const lines: string[] = [];

  lines.push(`# ${section.name}`);
  if (section.description) {
    for (const descLine of section.description.split("\n")) {
      if (descLine) lines.push(`# ${descLine}`);
    }
  }

  if (emitMissing) {
    for (const annotation of section.missingAnnotations) {
      lines.push(reconstructMissingLine(annotation));
    }
  }

  // Emit all children in original order
  for (const child of section.children) {
    if (child.type === "data") {
      const record = child;
      if (record.parsedFields && record.parsedFields.length > 0) {
        lines.push(record.parsedFields.map((f) => fieldToString(f.value, f.rawValue)).join(sep));
      } else {
        lines.push(record.raw);
      }
    } else {
      // Boundaries, empty lines, comments, etc. — emit raw
      lines.push(child.raw);
    }
  }

  return lines.join(lineEnding);
}

/**
 * Stringify a RootNode back to UCD text, using SectionNodes for section content.
 *
 * Walks root.children:
 * - SectionNode: emits section header comment + @missing annotations + data records
 * - Any other ChildNode: emits node.raw
 *
 * This is the preferred stringify path when working with the AST directly.
 */
export function stringifyAst(root: RootNode, options?: StringifySectionsOptions): string {
  const lineEnding = options?.lineEnding ?? "\n";
  const lines: string[] = [];

  for (const child of root.children) {
    if (isSectionNode(child)) {
      lines.push(stringifySectionNode(child, options));
    } else {
      lines.push(child.raw);
    }
  }

  let output = lines.join(lineEnding);

  if (options?.emitEOF && !output.trimEnd().endsWith("# EOF")) {
    output = `${output + lineEnding}# EOF`;
  }

  return output;
}
