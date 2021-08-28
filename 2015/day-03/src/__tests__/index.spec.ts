import { processSteps, stepsMap, currentStep, Step } from '../index';

test('processSteps returns the correct num of houses', () => {
  expect(processSteps('>' as unknown as Step[])).toBe(2);
});
