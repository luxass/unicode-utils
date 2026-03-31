/**
 * Inspect the AST of a UCD file.
 *
 * Edit the VERSION and FILE below, then run:
 *   tsx packages/playground/src/inspect-ast.ts
 */
import { RawDataFile } from "@unicode-utils/parser";
import { formatAst } from "./shared";

// ─── Configure here ───────────────────────────────────────────────────────────

const VERSION = "16.0.0";
const FILE = "Scripts.txt";
const MAX_RECORDS = 5;

// ─── Run ──────────────────────────────────────────────────────────────────────

const url = `https://unicode.org/Public/${VERSION}/ucd/${FILE}`;
console.log(`Fetching ${url}...\n`);

const raw = await RawDataFile.from(url);
console.log(formatAst(raw.ast, { maxRecords: 50000 }));
