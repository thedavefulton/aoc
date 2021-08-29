import { Command, LightBoard } from '../partOne';

describe('LightBoard', () => {
  test('create LightBoard grid', () => {
    const lb = new LightBoard(2);
    expect(lb.grid).toStrictEqual([
      [false, false],
      [false, false],
    ]);
  });

  test('parseInstruction', () => {
    const lb = new LightBoard(2);
    expect(lb.parseInstruction('turn on 0,0 through 999,999')).toStrictEqual({
      command: 'TURN_ON',
      topLeft: [0, 0],
      botRight: [999, 999],
    });
    expect(lb.parseInstruction('toggle 0,0 through 999,0')).toStrictEqual({
      command: 'TOGGLE',
      topLeft: [0, 0],
      botRight: [999, 0],
    });
    expect(lb.parseInstruction('turn off 499,499 through 500,500')).toStrictEqual({
      command: 'TURN_OFF',
      topLeft: [499, 499],
      botRight: [500, 500],
    });
  });

  test('toggle', () => {
    const lb = new LightBoard(2);
    lb.toggle({ command: Command.TOGGLE, topLeft: [0, 0], botRight: [0, 1] });
    expect(lb.grid).toStrictEqual([
      [true, true],
      [false, false],
    ]);
    lb.toggle({ command: Command.TOGGLE, topLeft: [0, 0], botRight: [1, 1] });
    expect(lb.grid).toStrictEqual([
      [false, false],
      [true, true],
    ]);
  });

  test('turnOn', () => {
    const lb = new LightBoard(2);
    lb.turnOn({ command: Command.TURN_ON, topLeft: [0, 0], botRight: [0, 1] });
    expect(lb.grid).toStrictEqual([
      [true, true],
      [false, false],
    ]);
    lb.turnOn({ command: Command.TURN_ON, topLeft: [0, 0], botRight: [1, 1] });
    expect(lb.grid).toStrictEqual([
      [true, true],
      [true, true],
    ]);
  });

  test('numLit', () => {
    const lb = new LightBoard(2);
    expect(lb.numLit).toBe(0);
    lb.turnOn({ command: Command.TURN_ON, topLeft: [0, 0], botRight: [0, 1] });
    expect(lb.numLit).toBe(2);
  });
});
