import Stack from '../index.js';

describe('tests for method isEmpty', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
  });

  test('method must return true if array is empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  test('instance has method isEmpty', () => {
    expect(stack.isEmpty).toBeInstanceOf(Function);
  });

  test('method must return false if array is not empty after push', () => {
    stack.push(100);
    expect(stack.isEmpty()).toBeFalsy();
  });
});