import { partTwoShout } from './partTwo';
import { readFileByChar, shout } from './utils';
import { ListItem } from './partOne';

function partOne() {
  const lines = readFileByChar();
  console.log(lines.length);
  const totalDiff = lines.reduce((acc, cur) => {
    const listItem = new ListItem(cur);
    acc += listItem.lengthDiff;

    return acc;
  }, 0);

  shout(totalDiff);
}

function main() {
  // partTwoShout();

  partOne();
}

main();
