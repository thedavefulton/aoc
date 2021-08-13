import { convertDimensionsToArray, getRibbonLength, getSquareFeetRequired } from '../index';

test('convertDimensionsToArray', () => {
  expect(convertDimensionsToArray('2x3x4')).toStrictEqual([2, 3, 4]);
  expect(convertDimensionsToArray('1x10x1')).toStrictEqual([1, 1, 10]);
  expect(convertDimensionsToArray('24x8x21')).toStrictEqual([8, 21, 24]);
});

test('getSquareFeetRequired', () => {
  expect(getSquareFeetRequired('2x3x4')).toBe(58);
  expect(getSquareFeetRequired('1x1x10')).toBe(43);
});

test('getRibbonLength', () => {
  expect(getRibbonLength('2x3x4')).toBe(34);
  expect(getRibbonLength('1x1x10')).toBe(14);
});
