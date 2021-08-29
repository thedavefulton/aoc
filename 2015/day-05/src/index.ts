import { readFile, shout } from './utils';

export function extractPairs(test: string): string[] {
  if (test.length < 2) return [];

  const pairs: string[] = [];
  for (let i = 0; i < test.length - 1; i++) {
    pairs.push(test.slice(i, i + 2));
  }

  return pairs;
}

export function matchesFirstPair(test: string): boolean {
  const firstPair = test.slice(0, 2);

  return extractPairs(test.slice(2)).includes(firstPair);
}

export function hasMatchingPair(test: string): boolean {
  if (test.length < 4) return false;
  let foundMatch = false;

  for (let i = 0; i < test.length - 3; i++) {
    if (matchesFirstPair(test.slice(i))) {
      foundMatch = true;
      break;
    }
  }

  return foundMatch;
}

export function hasMatchingLetter(test: string): boolean {
  if (test.length < 3) return false;
  let foundMatch = false;

  for (let i = 0; i < test.length - 2; i++) {
    if (test[i] === test[i + 2]) {
      foundMatch = true;
      break;
    }
  }

  return foundMatch;
}

export function lineIsNice(test: string): boolean {
  return hasMatchingPair(test) && hasMatchingLetter(test);
}

async function main() {
  const lines = await readFile();
  const niceStringsCount = lines.filter((line) => lineIsNice(line)).length;

  shout(niceStringsCount);
}

main();
