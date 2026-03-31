import type { ChildNode, DataNode, Node, RootNode, SectionChildNode, SectionNode } from "./ast";
import { NodeTypes } from "./ast";
import {
  getBoundaryLineStyle,
  inferFileName,
  inferVersion,
  isCommentLine,
  isEmptyLine,
  isLineWithData,
  isBoundaryLine,
  isMissingAnnotation,
  parseMissingAnnotation,
  trimCommentLine,
} from "./line-helpers";

export interface ParseAstOptions {
  fileName?: string;
}

function parseDataLine(line: string, lineNumber: number): DataNode {
  const trimmed = line.trim();

  // Split off inline comment: everything after # that follows the data fields
  // Data lines may look like: 0041; C; 0061; # LATIN CAPITAL LETTER A
  // But the # must be preceded by whitespace or semicolon to be a comment,
  // otherwise it could be part of the data itself.
  let dataContent: string;
  let comment: string | undefined;

  const commentMatch = trimmed.match(/\s+#\s+(.*)/);
  if (commentMatch) {
    const commentStart = trimmed.indexOf(commentMatch[0]);
    dataContent = trimmed.slice(0, commentStart).trim();
    comment = commentMatch[1];
  } else {
    dataContent = trimmed;
  }

  // Split fields by semicolon and trim each
  const fields = dataContent
    .split(";")
    .map((f) => f.trim())
    .filter((f) => f !== "");

  // Parse code point from first field
  const codepointRaw = fields[0] ?? "";
  let codepoint: [string, string];

  if (codepointRaw.includes("..")) {
    const [start, end] = codepointRaw.split("..");
    codepoint = [start!, end!];
  } else {
    codepoint = [codepointRaw, codepointRaw];
  }

  return {
    type: NodeTypes.DATA,
    value: trimmed,
    raw: line,
    line: lineNumber,
    codepointRaw,
    codepoint,
    fields,
    comment,
  };
}

function createSectionNode(children: SectionChildNode[]): SectionNode {
  return {
    type: NodeTypes.SECTION,
    value: "",
    raw: children.map((c) => c.raw).join("\n"),
    line: children[0]?.line ?? 0,
    children,
  };
}

export function parseDataFileIntoAst(content: string, options?: ParseAstOptions): RootNode {
  const lines = content.split(/\r?\n/);
  const rootChildren: ChildNode[] = [];
  let sectionChildren: SectionChildNode[] | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;

    // Empty lines go to whichever context we're in
    if (isEmptyLine(line)) {
      const node = {
        type: NodeTypes.EMPTY,
        value: "",
        raw: line,
        line: i,
      } as const;

      if (sectionChildren !== null) {
        sectionChildren.push(node);
      } else {
        rootChildren.push(node);
      }
      continue;
    }

    // Boundary lines always go to root — they delimit sections
    if (isBoundaryLine(line)) {
      // Flush any accumulated section children
      if (sectionChildren !== null && sectionChildren.length > 0) {
        rootChildren.push(createSectionNode(sectionChildren));
      }

      rootChildren.push({
        type: NodeTypes.BOUNDARY,
        value: trimCommentLine(line),
        raw: line,
        line: i,
        style: getBoundaryLineStyle(line),
      });

      // Enter section mode — start collecting children for the next section
      sectionChildren = [];
      continue;
    }

    // --- Section context: full classification ---
    if (sectionChildren !== null) {
      if (isMissingAnnotation(line)) {
        sectionChildren.push({
          type: NodeTypes.MISSING,
          value: trimCommentLine(line),
          raw: line,
          line: i,
          annotation: parseMissingAnnotation(line),
        });
      } else if (isCommentLine(line)) {
        sectionChildren.push({
          type: NodeTypes.COMMENT,
          value: trimCommentLine(line),
          raw: line,
          line: i,
        });
      } else if (isLineWithData(line)) {
        sectionChildren.push(parseDataLine(line, i));
      } else {
        sectionChildren.push({
          type: NodeTypes.UNKNOWN,
          value: line.trim(),
          raw: line,
          line: i,
        });
      }
      continue;
    }

    // --- Header context: basic types only ---
    if (isCommentLine(line)) {
      rootChildren.push({
        type: NodeTypes.COMMENT,
        value: trimCommentLine(line),
        raw: line,
        line: i,
      });
    } else {
      rootChildren.push({
        type: NodeTypes.UNKNOWN,
        value: line.trim(),
        raw: line,
        line: i,
      });
    }
  }

  // Flush any remaining section children after the last boundary
  if (sectionChildren !== null && sectionChildren.length > 0) {
    rootChildren.push(createSectionNode(sectionChildren));
  }

  return {
    type: NodeTypes.ROOT,
    value: "",
    raw: content,
    line: 0,
    children: rootChildren,
    fileName: options?.fileName ?? inferFileName(content),
    version: inferVersion(content),
  };
}

export function stringifyNode(node: Node): string {
  return node.raw;
}

export function stringifyNodes(nodes: ChildNode[]): string {
  return nodes.map((n) => n.raw).join("\n");
}
