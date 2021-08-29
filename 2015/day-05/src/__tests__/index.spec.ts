import { extractPairs, hasMatchingLetter, hasMatchingPair, lineIsNice, matchesFirstPair } from '../index';

describe('part 2', () => {
  test('extractPairs', () => {
    expect(extractPairs('abcde')).toStrictEqual(['ab', 'bc', 'cd', 'de']);
    expect(extractPairs('ab')).toStrictEqual(['ab']);
    expect(extractPairs('a')).toStrictEqual([]);
  });

  test('matchesFirstPair', () => {
    expect(matchesFirstPair('xyxy')).toBe(true);
    expect(matchesFirstPair('aabcdefgaa')).toBe(true);
    expect(matchesFirstPair('aaa')).toBe(false);
  });

  test('hasMatchingPair', () => {
    expect(hasMatchingPair('bxyxy')).toBe(true);
    expect(hasMatchingPair('xyxy')).toBe(true);
    expect(hasMatchingPair('xybxy')).toBe(true);
    expect(hasMatchingPair('aaa')).toBe(false);
  });

  test('hasMatchingLetter', () => {
    expect(hasMatchingLetter('abcdefeghi')).toBe(true);
    expect(hasMatchingLetter('iabcdefghi')).toBe(false);
    expect(hasMatchingLetter('abcdeeghi')).toBe(false);
  });

  test('lineIsNice', () => {
    expect(lineIsNice('qjhvhtzxzqqjkmpb')).toBe(true);
    expect(lineIsNice('xxyxx')).toBe(true);
    expect(lineIsNice('uurcxstgmygtbstg')).toBe(false);
  });
});
