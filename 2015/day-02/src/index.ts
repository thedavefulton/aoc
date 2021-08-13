import { readFile, shout } from './utils';

export function getSquareFeetRequired(dimensions: string): number {
  const [a, b, c] = convertDimensionsToArray(dimensions);
  const boxArea = 2 * a * b + 2 * b * c + 2 * c * a;
  const extraArea = a * b;
  return boxArea + extraArea;
}

export function getRibbonLength(dimensions: string): number {
  const [a, b, c] = convertDimensionsToArray(dimensions);
  const perimeter = 2 * (a + b);
  const volume = a * b * c;

  return perimeter + volume;
}

export function convertDimensionsToArray(dimensions: string): number[] {
  return dimensions
    .split('x')
    .map((dim) => parseInt(dim))
    .sort((a, b) => a - b);
}

async function main() {
  const boxes = await readFile('src/boxes.txt');
  const totalSquareFeet = boxes.reduce((acc, cur) => {
    return acc + getSquareFeetRequired(cur);
  }, 0);

  shout(`Wrapping Paper: ${totalSquareFeet}`);

  const totalRibbonLength = boxes.reduce((acc, cur) => {
    return acc + getRibbonLength(cur);
  }, 0);

  shout(`Ribbon Length: ${totalRibbonLength}`);
}

main();
