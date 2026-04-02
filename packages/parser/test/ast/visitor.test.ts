import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import type { Visitor } from "../../src/ast";
import { visit } from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";

describe("visit", () => {
  const fixture = dedent`
    # Scripts-16.0.0.txt
    # Date: 2024-04-30
    #
    # Unicode Character Database

    # ================================================

    # Property: Script
    #
    #  All code points not explicitly listed for Script
    #  have the value Unknown (Zzzz).

    # @missing: 0000..10FFFF; Unknown

    # ================================================

    0000..001F    ; Common # Cc  [32] <control-0000>..<control-001F>
    0020          ; Common # Zs       SPACE
    0021..0023    ; Common # Po   [3] EXCLAMATION MARK..NUMBER SIGN
  `;

  const ast = parseDataFileIntoAst(fixture);

  it("should visit all data nodes", () => {
    const values: string[] = [];
    visit(ast, {
      data(node) {
        values.push(node.value);
      },
    });
    expect(values).toHaveLength(3);
    expect(values[0]).toContain("0000..001F");
  });

  it("should visit the root node first", () => {
    const order: string[] = [];
    visit(ast, {
      root() {
        order.push("root");
      },
      comment() {
        order.push("comment");
      },
    });
    expect(order[0]).toBe("root");
  });

  it("should visit section before its children", () => {
    const order: string[] = [];
    visit(ast, {
      section() {
        order.push("section");
      },
      data() {
        order.push("data");
      },
      missing() {
        order.push("missing");
      },
    });
    // First section (property section) comes before its missing child
    // Second section (data section) comes before its data children
    const sectionIndices = order.reduce<number[]>((acc, type, i) => {
      if (type === "section") acc.push(i);
      return acc;
    }, []);
    const dataIndex = order.indexOf("data");
    expect(sectionIndices.length).toBe(2);
    expect(sectionIndices[1]).toBeLessThan(dataIndex);
  });

  it("should visit boundary nodes at root level", () => {
    const styles: string[] = [];
    visit(ast, {
      boundary(node) {
        styles.push(node.style);
      },
    });
    expect(styles).toEqual(["=", "="]);
  });

  it("should visit missing annotation nodes inside sections", () => {
    let count = 0;
    visit(ast, {
      missing(node) {
        count++;
        expect(node.annotation).not.toBeNull();
        expect(node.annotation!.defaultPropertyValue).toBe("Unknown");
      },
    });
    expect(count).toBe(1);
  });

  it("should handle an empty visitor without errors", () => {
    const visitor: Visitor = {};
    expect(() => visit(ast, visitor)).not.toThrow();
  });

  it("should visit empty nodes", () => {
    let count = 0;
    visit(ast, {
      empty() {
        count++;
      },
    });
    expect(count).toBeGreaterThan(0);
  });

  it("should visit all node types across the tree", () => {
    const seen = new Set<string>();
    visit(ast, {
      root() {
        seen.add("root");
      },
      comment() {
        seen.add("comment");
      },
      empty() {
        seen.add("empty");
      },
      boundary() {
        seen.add("boundary");
      },
      section() {
        seen.add("section");
      },
      missing() {
        seen.add("missing");
      },
      data() {
        seen.add("data");
      },
    });
    expect(seen).toEqual(
      new Set(["root", "comment", "empty", "boundary", "section", "missing", "data"]),
    );
  });
});
