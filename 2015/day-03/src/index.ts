import { readFile, shout } from './utils';

export type Step = '<' | '>' | '^' | 'v';

export const stepsMap: { [key: string]: number } = {
  '0,0': 1,
};

export const currentStep = {
  x: 0,
  y: 0,

  toStepKey() {
    return `${this.x},${this.y}`;
  },
};

export function processSteps(steps: Step[]): number {
  for (const step of steps) {
    processStep(step);
  }

  return Object.keys(stepsMap).length;
}

function processStep(step: Step) {
  moveStep(step);
  deliverPresent();
}

function deliverPresent() {
  const stepKey = currentStep.toStepKey();
  if (stepsMap.hasOwnProperty(stepKey)) {
    stepsMap[stepKey] += 1;
  } else {
    stepsMap[stepKey] = 1;
  }
}

function moveStep(step: Step) {
  if (['<', '>'].includes(step)) {
    moveX(step);
  } else {
    moveY(step);
  }
}

function moveX(step: Step) {
  const move = step === '>' ? 1 : -1;
  currentStep.x += move;
}

function moveY(step: Step) {
  const move = step === '^' ? 1 : -1;
  currentStep.y += move;
}

async function main() {
  const [steps] = await readFile();
  shout(processSteps(steps as unknown as Step[]));
}

main();
