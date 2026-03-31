// Sections no longer exist in the simplified AST.
// Use list-nodes.ts instead:
//
//   pnpm tsx playground/src/list-nodes.ts <file-path-or-url>

console.error(
  "list-sections.ts is no longer available. The parser no longer produces SectionNodes.\n"
  + "Use list-nodes.ts instead:\n\n"
  + "  pnpm tsx playground/src/list-nodes.ts <file-path-or-url>",
);
process.exit(1);
