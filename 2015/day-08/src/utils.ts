const readline = require('readline');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');

export const readFile = async (fileName = 'data.txt') => {
  const lines: string[] = [];
  const instream = fs.createReadStream(path.resolve(process.cwd(), fileName));
  const rl = readline.createInterface({ input: instream });

  for await (const line of rl) {
    lines.push(line);
  }

  return lines;
};

export const readFileByChar = (fileName = 'data.txt'): string[][] => {
  let data = fs.readFileSync(fileName, 'utf-8');
  const lines: string[][] = [];
  let line: string[] = [];

  for (const ch of data) {
    if (/\s/.test(ch)) {
      if (line.length) {
        lines.push(line);
      }
      line = [];
    } else {
      line.push(ch);
    }
  }

  return lines;
};

export function shout(message: string | number) {
  if (typeof message === 'number') {
    message = message.toString();
  }
  console.log(boxen(chalk.blue(message), { padding: 1, margin: 1 }));
}
