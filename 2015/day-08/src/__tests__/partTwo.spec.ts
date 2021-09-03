import { sum } from '../partTwo';
import { ListItem } from '../partOne';

const tests = [
  ['"', '"'],
  ['"', 'a', 'b', 'c', '"'],
  ['"', 'a', 'a', 'a', '\\', '"', 'a', 'a', 'a', '"'],
  ['"', '\\', 'x', '2', '7', '"'],
];

describe('partTwo', () => {
  test('encodedLength', () => {
    const listItem = new ListItem(tests[0]);
    expect(listItem.encodedLength).toBe(6);

    listItem.literal = tests[1];
    expect(listItem.encodedLength).toBe(9);

    listItem.literal = tests[2];
    expect(listItem.encodedLength).toBe(16);

    listItem.literal = tests[3];
    expect(listItem.encodedLength).toBe(11);
  });

  test('encodedDiff', () => {
    const totalDiff = tests.reduce((acc, cur) => {
      const listItem = new ListItem(cur);
      acc += listItem.encodedLength - listItem.literalLength;

      return acc;
    }, 0);

    expect(totalDiff).toBe(19);
  });
});
