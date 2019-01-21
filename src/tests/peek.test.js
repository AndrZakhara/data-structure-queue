/* eslint-disable */
import Stack from '../index.js';

describe('tests for method peek', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
    stack.push(5);
  });

  test('method must show last element', () => {
    expect(stack.peek()).toBe(5);

  });

  test('throw error if array is empty', () => {
    const emptyStack = new Stack();
    

    expect(emptyStack.peek()).toThrow(Error);
  });
});
