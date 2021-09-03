import { ListItem } from '../partOne';

const tests = [
  ['"', '"'],
  ['"', 'a', 'b', 'c', '"'],
  ['"', 'a', 'a', 'a', '\\', '"', 'a', 'a', 'a', '"'],
  ['"', '\\', 'x', '2', '7', '"'],
];

describe('partOne', () => {
  test('literalLength', () => {
    const listItem = new ListItem(tests[0]);
    expect(listItem.literalLength).toBe(2);

    listItem.literal = tests[1];
    expect(listItem.literalLength).toBe(5);

    listItem.literal = tests[2];
    expect(listItem.literalLength).toBe(10);

    listItem.literal = tests[3];
    expect(listItem.literalLength).toBe(6);
  });

  test('inMemoryLength', () => {
    const listItem = new ListItem(tests[0]);
    expect(listItem.inMemoryLength).toBe(0);

    listItem.literal = tests[1];
    expect(listItem.inMemoryLength).toBe(3);

    listItem.literal = tests[2];
    expect(listItem.inMemoryLength).toBe(7);

    listItem.literal = tests[3];
    expect(listItem.inMemoryLength).toBe(1);
  });

  test('lengthDiff', () => {
    const totalDiff = tests.reduce((acc, cur) => {
      const listItem = new ListItem(cur);
      acc += listItem.lengthDiff;

      return acc;
    }, 0);
    expect(totalDiff).toBe(12);
  });
});
