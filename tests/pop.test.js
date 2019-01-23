import Stack from '../src/index.js';

describe('tests for method pop', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(5);
  });

  test('method must delete last added element from stack', () => {
    const elem = 'last element';
    stack.push(elem);
    expect(stack.pop()).toBe(elem);
    expect(stack.contains(elem)).toBeFalsy();
  });

  test('method must return deleted element', () => {
    expect(stack.pop()).toBe(5);
  });

  test('length of stack must reduce by 1', () => {
    const initialLength = stack.length;
    stack.pop();

    expect(stack.length).toBe(initialLength - 1);
    expect(stack.length).toBe(2);
  });

  test('empty array length always must be 0', () => {
    const arrEmpty = new Stack();
    const { length: initialLength } = arrEmpty;

    arrEmpty.pop();
    arrEmpty.pop();

    const { length: finalLength } = arrEmpty;

    expect(initialLength).toBe(0);
    expect(finalLength).toBe(0);
  });
});