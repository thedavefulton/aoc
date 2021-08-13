import { calculateFloor } from "..";


test('calculateFloor', () => {
  expect(calculateFloor('(())')).toBe(0);
  expect(calculateFloor('()()')).toBe(0)
  expect(calculateFloor('(((')).toBe(3)
  expect(calculateFloor('(()(()(')).toBe(3)
  expect(calculateFloor('))(((((')).toBe(3)
  expect(calculateFloor('())')).toBe(-1)
  expect(calculateFloor('))(')).toBe(-1)
  expect(calculateFloor(')))')).toBe(-3)
  expect(calculateFloor(')())())')).toBe(-3)
});
