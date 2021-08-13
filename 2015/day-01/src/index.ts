import {readFile, shout } from "./utils";

export function calculateFloor(steps: string): number {
    return steps.split("").reduce((acc, cur) => {
        acc = cur === "(" ? acc += 1 : acc -= 1;
        return acc
    }, 0)
}

async function main() {
    const lines = await readFile('src/steps.txt')
    const floor = calculateFloor(lines[0])
    shout(floor.toString())
}

main()