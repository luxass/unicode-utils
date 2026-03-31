import type { RootNode } from "./ast";

export class DataFile {
  readonly ast: Readonly<RootNode>;

  constructor(ast: RootNode) {
    this.ast = Object.freeze(ast);
  }
}
