import { shout } from './utils';

export class ListItem {
  literal: string[];

  constructor(literal: string[]) {
    this.literal = literal;
  }

  get literalLength() {
    return this.literal.length;
  }

  get inMemoryLength() {
    const trimmedLiteral = this.literal.slice(1, -1);
    if (trimmedLiteral.length < 2) return trimmedLiteral.length;

    let length = 0;
    for (let i = 0; i < trimmedLiteral.length; i++) {
      if (trimmedLiteral[i].includes('\\')) {
        i = trimmedLiteral[i + 1] === 'x' ? (i += 3) : (i += 1);
      }
      length += 1;
    }
    return length;
  }

  get lengthDiff() {
    return this.literalLength - this.inMemoryLength;
  }

  get encodedLength() {
    const trimmedLiteral = this.literal;
    let totalLength = 2;
    for (let i = 0; i < trimmedLiteral.length; i++) {
      if (['"', '\\'].includes(trimmedLiteral[i])) {
        totalLength += 1;
      }
      totalLength += 1;
    }
    return totalLength;
  }
}
