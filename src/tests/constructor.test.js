import Stack from '../index.js';

describe('tests for constructor', () => {
  let stack = null;
  beforeEach(() => {
    stack = new Stack();
  });

  test('should has a constructor in Stack ', () => {
    expect(Stack.prototype.constructor).toBe(Stack);
  });

  test('length of empty stack is 0', () => {
    expect(stack.length).toBe(0);
  });
});

