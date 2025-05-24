import { parseFileNameLine } from "../line-helpers";

export function inferHeading(content: string): string | undefined {
  if (!content) {
    return undefined;
  }

  // parse the file name and version from the content
  const parsed = parseFileNameLine(content);
  if (!parsed) {
    return undefined;
  }

  const { fileName, version } = parsed;

  if (!fileName || !version) {
    return undefined;
  }
}
