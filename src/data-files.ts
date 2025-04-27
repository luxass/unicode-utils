/**
 * Extracts and concatenates comment lines from a data file content.
 *
 * This function takes a string representing the content of a data file,
 * filters out all lines except those that start with '#' (comment lines),
 * and joins them together with newline characters.
 *
 * @param {string} content - The content of the data file as a string
 * @returns {string} A string containing all comment lines concatenated with newline characters
 */
export function getDataFileComments(content: string): string {
  return content.split("\n").filter((line) => line.trim() && line.trim().startsWith("# ")).join("\n");
}
