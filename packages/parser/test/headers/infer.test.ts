import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import { inferHeaderFromAst } from "../../src/header";
import { parseDataFileIntoAst } from "../../src/parser";

describe("inferHeaderFromAst", () => {
  it("returns undefined for missing date and copyright", () => {
    const root = parseDataFileIntoAst("# SomeFile-1.0.0.txt\n0041; data");
    const header = inferHeaderFromAst(root);

    expect(header.fileName).toBe("SomeFile");
    expect(header.version).toBe("1.0.0");
    expect(header.date).toBeUndefined();
    expect(header.copyright).toBeUndefined();
    expect(header.startLine).toBe(0);
    expect(header.endLine).toBe(0);
    expect(header.text).toBe("# SomeFile-1.0.0.txt");
  });

  it("extracts header when date/copyright are inside a section before data", () => {
    const fixture = dedent`
      # TestFile-2.0.0.txt
      # ================================================
      # Date: 2025-01-01
      # © 2025 Unicode®, Inc.
      0041; data
    `;

    const root = parseDataFileIntoAst(fixture);
    const header = inferHeaderFromAst(root);

    expect(header.fileName).toBe("TestFile");
    expect(header.version).toBe("2.0.0");
    expect(header.date).toBe("2025-01-01");
    expect(header.copyright).toBe("2025 Unicode®, Inc.");
    expect(header.startLine).toBe(0);
    expect(header.endLine).toBe(3);
    expect(header.text).toBe(dedent`
      # TestFile-2.0.0.txt
      # ================================================
      # Date: 2025-01-01
      # © 2025 Unicode®, Inc.
    `);
  });

  it("tracks startLine and endLine correctly", () => {
    const fixture = dedent`
      # File-1.0.0.txt
      # Date: 2025-06-15
      # © 2025 Unicode®, Inc.

      # description
      0041; data
    `;

    const root = parseDataFileIntoAst(fixture);
    const header = inferHeaderFromAst(root);

    expect(header.fileName).toBe("File");
    expect(header.version).toBe("1.0.0");
    expect(header.date).toBe("2025-06-15");
    expect(header.copyright).toBe("2025 Unicode®, Inc.");
    expect(header.startLine).toBe(0);
    expect(header.endLine).toBe(4);
    expect(header.text).toBe(dedent`
      # File-1.0.0.txt
      # Date: 2025-06-15
      # © 2025 Unicode®, Inc.

      # description
    `);
  });
});
