import { findLowestNumber } from '../index';

describe('findLowestNumber', () => {
  test('abcdef', () => {
    expect(findLowestNumber('abcdef')).toBe(609043);
  });

  test('pqrstuv', () => {
    expect(findLowestNumber('pqrstuv')).toBe(1048970);
  });
});
