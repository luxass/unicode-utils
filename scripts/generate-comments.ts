/* eslint-disable node/prefer-global/process */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path, { basename, join } from "node:path";
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

const UCD_VERSION = "v5.1.0";
const MAX_LINES = 150;
const DEFAULT_EXCLUDED_FILES = [".comments.txt"];
const ADDITIONAL_EXCLUDED_FILES: string[] = [
];

const EXCLUDED_FILES = [...DEFAULT_EXCLUDED_FILES, ...ADDITIONAL_EXCLUDED_FILES];

async function run() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY environment variable. Please set it before running this script.");
  }

  // validate version directory exists
  const ucdFilesDir = join(process.cwd(), "ucd-files");
  const versionDir = join(ucdFilesDir, UCD_VERSION);

  if (!existsSync(versionDir)) {
    throw new Error(`Version directory does not exist: ${versionDir}`);
  }

  const files = readFilesRecursively(versionDir);

  const filesToProcess = files.filter((file) => {
    const fileName = basename(file);
    return !EXCLUDED_FILES.some((excluded) => fileName.endsWith(excluded));
  });

  console.log(`Found ${filesToProcess.length} files to process in version ${UCD_VERSION}`);

  const promises = filesToProcess.map((filePath) => processFile(filePath, versionDir));
  await Promise.all(promises);

  console.log("All files processed successfully.");
}

async function processFile(filePath: string, versionDir: string): Promise<void> {
  const relativeFilePath = filePath.replace(`${versionDir}/`, "");

  const outputFilePath = `${filePath.replace(/\.txt$/, "")}.comments.txt`;

  console.log(`Processing ${relativeFilePath}...`);

  try {
    const content = readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    const limitedContent = lines.slice(0, MAX_LINES).join("\n");

    const prompt = `
I have a Unicode Character Database (UCD) file. Your task is to extract the heading (header section) from this file.

A heading in a UCD file:
- Starts at the beginning of the file
- Contains comment lines (lines starting with #)
- Ends when one of these is encountered:
  1. A data line (any line that is neither a comment nor empty) - this ALWAYS marks the end of a heading
  2. A boundary line (comment lines with multiple #, -, or = characters in a row) ONLY if it's not followed by more comment lines
  3. A line starting with "# Property" or "# @missing" - these special comment lines mark the end of the heading section
- If the file doesn't contain ANY comment lines starting with #, then there is NO heading, and the result should be empty

Here are the first ${MAX_LINES} lines of the file:

\`\`\`
${limitedContent}
\`\`\`

Please extract ONLY the heading content from this file. Do not include any data lines or content after the heading ends. Do not add any explanatory text - just return the exact heading content as it appears in the file.

Important rules:
- If you see patterns like "# ######" or "# ------" or "# ======", these are boundary markers, but they only end the heading if they're NOT followed by more regular comment lines.
- If a boundary marker is followed by more comment lines, the heading continues until another ending condition is met.
- Any data line (non-comment, non-empty line) immediately ends the heading.
- Lines beginning with "# Property" or "# @missing" mark the end of the heading and should not be included.
`;

    const result = await generateObject({
      model: openai("gpt-4o-mini"),
      schema: z.object({
        text: z.string(),
      }),
      messages: [
        { role: "system", content: "You are an expert at extracting headers from Unicode Character Database (UCD) files. Extract only the heading section of files exactly as they appear. A heading ends when: 1) a data line appears, 2) a boundary marker is encountered that isn't followed by more comment lines, or 3) a line starting with '# Property' or '# @missing' is encountered. If no comment lines (starting with #) exist in the file, return an empty string." },
        { role: "user", content: prompt },
      ],
    });

    const response = result.object.text;
    if (!response) {
      console.warn(`No response generated for ${relativeFilePath}. Skipping.`);
      return;
    }

    await writeFile(outputFilePath, response, "utf-8");
    console.log(`✓ Extracted heading for ${relativeFilePath}`);
  } catch (error) {
    console.error(`Error processing ${relativeFilePath}:`, error);
  }
}

function readFilesRecursively(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });

  const files = entries
    .filter((entry) => !entry.isDirectory())
    .map((entry) => join(dir, entry.name));

  const folders = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(dir, entry.name));

  const subFiles = folders.flatMap((folder) => readFilesRecursively(folder));

  return [...files, ...subFiles];
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
