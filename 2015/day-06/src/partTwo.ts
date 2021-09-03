import { readFile, shout } from './utils';

export enum Command {
  TOGGLE = 'TOGGLE',
  TURN_OFF = 'TURN_OFF',
  TURN_ON = 'TURN_ON',
}

export interface Instruction {
  command: Command;
  topLeft: [number, number];
  botRight: [number, number];
}

export class LightBoard {
  grid: number[][];

  constructor(dimension: number) {
    this.grid = this.generateGrid(dimension);
  }

  private generateGrid(dimension: number): number[][] {
    const rows: number[][] = [];
    for (let i = 0; i < dimension; i++) {
      rows.push(this.generateRow(dimension));
    }

    return rows;
  }

  private generateRow(dimension: number): number[] {
    const row: number[] = [];
    for (let i = 0; i < dimension; i++) {
      row.push(0);
    }

    return row;
  }

  followInstruction(instruction: string) {
    const parsedInstruction = this.parseInstruction(instruction);
    if (parsedInstruction.command === Command.TOGGLE) {
      this.toggle(parsedInstruction);
    } else if (parsedInstruction.command === Command.TURN_ON) {
      this.turnOn(parsedInstruction);
    } else {
      this.turnOff(parsedInstruction);
    }
  }

  toggle(instruction: Instruction) {
    for (let i = instruction.topLeft[0]; i <= instruction.botRight[0]; i++) {
      for (let j = instruction.topLeft[1]; j <= instruction.botRight[1]; j++) {
        this.grid[i][j] = this.grid[i][j] += 2;
      }
    }
  }

  turnOn(instruction: Instruction) {
    for (let i = instruction.topLeft[0]; i <= instruction.botRight[0]; i++) {
      for (let j = instruction.topLeft[1]; j <= instruction.botRight[1]; j++) {
        this.grid[i][j] = this.grid[i][j] += 1;
      }
    }
  }

  turnOff(instruction: Instruction) {
    for (let i = instruction.topLeft[0]; i <= instruction.botRight[0]; i++) {
      for (let j = instruction.topLeft[1]; j <= instruction.botRight[1]; j++) {
        this.grid[i][j] = this.grid[i][j] === 0 ? 0 : this.grid[i][j] - 1;
      }
    }
  }

  parseInstruction(instruction: string): Instruction {
    const re = /([a-z\s]+)(\d+),(\d+) through (\d+),(\d+)/;
    // @ts-ignore
    const [, command, left, top, right, bot] = re.exec(instruction);

    return {
      command:
        command.trim() === 'toggle'
          ? Command.TOGGLE
          : command.trim() === 'turn on'
          ? Command.TURN_ON
          : Command.TURN_OFF,
      topLeft: [parseInt(left), parseInt(top)],
      botRight: [parseInt(right), parseInt(bot)],
    };
  }

  get brightness(): number {
    let lumens = 0;
    for (const row of this.grid) {
      for (const light of row) {
        lumens += light;
      }
    }

    return lumens;
  }
}

async function main() {
  const lb = new LightBoard(1000);
  const instructions = await readFile();

  for (const instruction of instructions) {
    lb.followInstruction(instruction);
  }

  shout(lb.brightness);
}

main();
