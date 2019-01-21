/* eslint-disable */
import Stack from '../index.js';

describe('tests for method isEmpty', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  test('method must return true if array is empty', () => {
    let emptyArray = new Stack();
    expect(emptyArray.isEmpty()).toBeTruthy()
  });

  test('method must return false if array isn\'t empty', () => {
    expect(stack.isEmpty()).toBeFalsy()
  });

   test('instance has method isEmpty', () => {
    expect(stack.isEmpty).toBeInstanceOf(Function);
  });
});
