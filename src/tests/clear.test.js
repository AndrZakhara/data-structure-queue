import Stack from '../index.js';

describe('tests for method clear', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  test('stack length must be 0 after using this method', () => {
    expect(stack.length).toBe(3);
    stack.clear();
    expect(stack.length).toBe(0);
  });

  test('stack must be empty after using  method clear', () => {
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
  });
});