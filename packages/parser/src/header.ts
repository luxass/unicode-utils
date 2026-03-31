import type { RootNode, SectionNode } from "./ast";
import { NodeTypes, visit } from "./ast";

export interface InferredHeader {
  fileName?: string;
  version?: string;
  date?: string;
  copyright?: string;
  startLine: number;
  endLine: number;
  text: string;
}

export function inferHeaderFromAst(root: RootNode): InferredHeader {
  let date: string | undefined;
  let copyright: string | undefined;
  let startLine = 0;
  let endLine = 0;
  let done = false;

  function trackLine(line: number) {
    startLine = Math.min(startLine, line);
    endLine = Math.max(endLine, line);
  }

  function sectionHasData(node: SectionNode): boolean {
    return node.children.some((c) => c.type === NodeTypes.DATA);
  }

  visit(root, {
    section(node) {
      if (done) {
        return;
      }
      if (sectionHasData(node)) {
        done = true;
      }
    },
    data() {
      done = true;
    },
    unknown() {
      done = true;
    },
    comment(node) {
      if (done) {
        return;
      }

      trackLine(node.line);

      if (!date && /^Date:\s*/i.test(node.value)) {
        date = node.value.slice("Date:".length).trim();
      }
      if (!copyright && node.value.includes("©")) {
        copyright = node.value.slice(node.value.indexOf("©") + 1).trim();
      }
    },
    empty(node) {
      if (done) {
        return;
      }
      trackLine(node.line);
    },
    boundary(node) {
      if (done) {
        return;
      }
      trackLine(node.line);
    },
    missing(node) {
      if (done) {
        return;
      }
      trackLine(node.line);
    },
  });

  const lines = root.raw.split(/\r?\n/);
  const text = lines.slice(startLine, endLine + 1).join("\n");

  return {
    fileName: root.fileName,
    version: root.version,
    date,
    copyright,
    startLine,
    endLine,
    text,
  };
}
