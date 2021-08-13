import {readFile, shout } from "./utils";

export function calculateFloor(steps: string): number {
    let shoutedPosition = false;
    let position = 0;

    return steps.split("").reduce((acc, cur) => {
        acc = cur === "(" ? acc += 1 : acc -= 1;
        position += 1;
        if (acc === -1 && !shoutedPosition) {
            shout(position)
            shoutedPosition = true;
        }
        return acc
    }, 0)
}

async function main() {
    const lines = await readFile('src/steps.txt')
    const floor = calculateFloor(lines[0])
    shout(floor.toString())
}

main()