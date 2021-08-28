import { shout } from './utils';
const crypto = require('crypto');

function hashString(text: string): string {
  return crypto.createHash('md5').update(text).digest('hex');
}

function checkHash(hash: string): boolean {
  return hash.slice(0, 6) === '000000';
}

export function findLowestNumber(secret: string): number {
  let lowestNumber = 0;
  let foundHash = false;

  while (!foundHash) {
    lowestNumber += 1;
    const newHash = hashString(`${secret}${lowestNumber}`);
    foundHash = checkHash(newHash);
  }

  return lowestNumber;
}

shout(findLowestNumber('ckczppom'));
