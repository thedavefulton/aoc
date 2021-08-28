import { splitSteps, Step } from '../index';

describe('splitSteps', () => {
  test('^v', () => {
    const res = splitSteps('^v' as unknown as Step[]);
    expect(res.realSanta.join('')).toBe('^');
    expect(res.roboSanta.join('')).toBe('v');
  });
});
