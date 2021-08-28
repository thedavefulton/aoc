import { readFile, shout } from './utils';

export type Step = '<' | '>' | '^' | 'v';

class Santa {
  housesVisited: { [key: string]: number };
  currentStep: {
    x: number;
    y: number;
    toHouseKey: () => string;
  };

  constructor() {
    this.housesVisited = {
      '0,0': 1,
    };
    this.currentStep = {
      x: 0,
      y: 0,
      toHouseKey() {
        return `${this.x},${this.y}`;
      },
    };
  }

  processStep(step: Step) {
    this.move(step);
    this.deliverPresent();
  }

  numHousesVisited(): number {
    return Object.keys(this.housesVisited).length;
  }

  houseKeysVisited(): string[] {
    return Object.keys(this.housesVisited);
  }

  private move(step: Step) {
    if (['<', '>'].includes(step)) {
      this.moveX(step);
    } else {
      this.moveY(step);
    }
  }

  private moveX(step: Step) {
    const distance = step === '>' ? 1 : -1;
    this.currentStep.x += distance;
  }

  private moveY(step: Step) {
    const distance = step === '^' ? 1 : -1;
    this.currentStep.y += distance;
  }

  private deliverPresent() {
    const houseKey = this.currentStep.toHouseKey();
    if (this.housesVisited.hasOwnProperty(houseKey)) {
      this.housesVisited[houseKey] += 1;
    } else {
      this.housesVisited[houseKey] = 1;
    }
  }
}

export function processSteps(steps: Step[]): string[] {
  const santa = new Santa();
  for (const step of steps) {
    santa.processStep(step);
  }

  return santa.houseKeysVisited();
}

export function splitSteps(steps: Step[]) {
  const realSanta: Step[] = [];
  const roboSanta: Step[] = [];

  for (let i = 0; i < steps.length; i++) {
    if (i % 2 === 0) {
      realSanta.push(steps[i]);
    } else {
      roboSanta.push(steps[i]);
    }
  }

  return { realSanta, roboSanta };
}

async function main() {
  const [steps] = await readFile();
  const splitStepsObj = splitSteps(steps as unknown as Step[]);

  const realSantaKeys = processSteps(splitStepsObj.realSanta);
  const roboSantaKeys = processSteps(splitStepsObj.roboSanta);
  console.log({ realSantaKeys, roboSantaKeys });

  const houseKeysSet = new Set([...realSantaKeys, ...roboSantaKeys]);
  console.log(houseKeysSet);
  shout(houseKeysSet.size);
}

main();
