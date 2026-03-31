// Fields and sections no longer exist in the simplified AST.
// The parser now only produces CommentNode, EmptyNode, and UnknownNode.
//
// Use list-nodes.ts to inspect the node breakdown of a UCD file:
//
//   pnpm tsx playground/src/list-nodes.ts <file-path-or-url>

console.error(
  "check-fields.ts is no longer applicable. The parser no longer produces sections or fields.\n"
  + "Use list-nodes.ts instead:\n\n"
  + "  pnpm tsx playground/src/list-nodes.ts <file-path-or-url>",
);
process.exit(1);
