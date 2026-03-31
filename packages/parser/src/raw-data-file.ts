import type { RootNode } from "./ast";
import { DataFile } from "./data-file";

export class RawDataFile {
  readonly ast: RootNode;
  readonly rawContent: string;

  constructor(rawContent: string) {
    this.rawContent = rawContent;
    // Will be fixed!
    this.ast = null as any;
  }

  static async from(
    url: string | URL,
  ): Promise<RawDataFile> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data file from ${url}: ${response.status} ${response.statusText}`);
    }
    const content = await response.text();
    return new RawDataFile(content);
  }

  toDataFile(): DataFile {
    return new DataFile(this.ast);
  }
}
