import type { RootNode, SectionNode } from "./ast";
import { isSectionNode } from "./typeguards";

export interface StringifySectionsOptions {
  /** Append "# EOF" at the end of the output. Default: false */
  emitEOF?: boolean;
  /** Line ending style. Default: "\n" */
  lineEnding?: "\n" | "\r\n";
}

function stringifySectionNode(section: SectionNode, options?: StringifySectionsOptions): string {
  const lineEnding = options?.lineEnding ?? "\n";
  const lines: string[] = [];

  lines.push(`# ${section.name}`);
  if (section.description) {
    for (const descLine of section.description.split("\n")) {
      if (descLine) lines.push(`# ${descLine}`);
    }
  }

  for (const child of section.children) {
    lines.push(child.raw);
  }

  return lines.join(lineEnding);
}

/**
 * Stringify a RootNode back to UCD text, using SectionNodes for section content.
 *
 * Walks root.children:
 * - SectionNode: emits section header comment + children in original order
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
