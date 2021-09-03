import { partTwoShout } from './partTwo';
import { readFileByChar, shout } from './utils';
import { ListItem } from './partOne';

function partOne() {
  const lines = readFileByChar();
  const totalDiff = lines.reduce((acc, cur) => {
    const listItem = new ListItem(cur);
    acc += listItem.lengthDiff;

    return acc;
  }, 0);

  shout(totalDiff);
}

function partTwo() {
  const lines = readFileByChar();
  const totalDiff = lines.reduce((acc, cur) => {
    const listItem = new ListItem(cur);
    acc += listItem.encodedLength - listItem.literalLength;

    return acc;
  }, 0);

  shout(totalDiff);
}

function main() {
  // partOne();
  partTwo();
}

main();
