import { stringIsNice } from '../_index';

describe('checkString', () => {
  test('ugknbfddgicrmopn is nice', () => {
    expect(stringIsNice('ugknbfddgicrmopn')).toBe(true);
  });

  test('aaa is nice', () => {
    expect(stringIsNice('aaa')).toBe(true);
  });

  test('jchzalrnumimnmhp is naughty', () => {
    expect(stringIsNice('jchzalrnumimnmhp')).toBe(false);
  });

  test('haegwjzuvuyypxyu is nice', () => {
    expect(stringIsNice('haegwjzuvuyypxyu')).toBe(false);
  });

  test('dvszwmarrgswjxmb is nice', () => {
    expect(stringIsNice('dvszwmarrgswjxmb')).toBe(false);
  });
});
