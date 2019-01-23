import Stack from '../src/index.js';

describe('tests for method push', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
  });

  test('method returns new length which bigger by 1 that prev length', () => {
    let initLength = stack.length;
    stack.push(1);
    let newLength = stack.length;
    expect(newLength).toBe(initLength + 1);

    initLength = stack.length;
    stack.push('text');
    newLength = stack.length;
    expect(newLength).toBe(initLength + 1);

    initLength = stack.length;
    stack.push([1, 2, 3]);
    newLength = stack.length;
    expect(newLength).toBe(initLength + 1);
  });

  test('method don\'t change initial length if we push nothing', () => {
    const initLength = stack.length;
    stack.push();
    const newLength = stack.length;

    expect(newLength).toBe(initLength);
  });
});