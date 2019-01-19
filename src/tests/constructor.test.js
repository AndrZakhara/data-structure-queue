import Stack from '../index.js';

describe('tests for constructor', () => {
  test('should has a constructor in Queue ', () => {
    const STACK = new Stack();

    expect(Stack.prototype.constructor).toBe(Stack);
  });
});

