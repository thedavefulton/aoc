import { readFile, shout } from './utils';

function hasThreeVowels(test: string): boolean {
  const vowelsFound = test.split('').reduce((acc, cur) => {
    if ('aeiou'.includes(cur)) {
      acc += 1;
    }

    return acc;
  }, 0);

  return vowelsFound >= 3;
}

function hasDouble(test: string): boolean {
  const letters = test.split('');
  let doubleFound = false;
  for (let i = 0; i < letters.length - 1; i++) {
    if (letters[i] === letters[i + 1]) {
      doubleFound = true;
      break;
    }
  }

  return doubleFound;
}

function noBadStrings(test: string): boolean {
  const badStrings = ['ab', 'cd', 'pq', 'xy'];
  let hasBadString = false;
  for (const badString of badStrings) {
    if (test.includes(badString)) {
      hasBadString = true;
      break;
    }
  }

  return !hasBadString;
}

export function stringIsNice(test: string): boolean {
  const threeVowels = hasThreeVowels(test);
  const double = hasDouble(test);
  const noBadString = noBadStrings(test);

  return threeVowels && double && noBadString;
}

async function main() {
  const lines = await readFile();
  const numberOfNice = lines.reduce((acc, cur) => {
    if (stringIsNice(cur)) {
      acc += 1;
    }

    return acc;
  }, 0);

  shout(numberOfNice);
}

// main();
