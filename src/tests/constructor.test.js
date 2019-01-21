/* eslint-disable */
import Stack from '../index.js';

describe('tests for constructor', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test('should has a constructor in Queue ', () => {
    expect(Stack.prototype.constructor).toBe(Stack);
  });

  test('should have own property count', () => {

    expect(stack.hasOwnProperty('length')).toBeTruthy();
  });
});

