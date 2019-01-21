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

  test('method must return true or false', () => {
    let emptyArray = new Stack();

    expect(stack.isEmpty()).toBeFalsy(),
    expect(emptyArray.isEmpty()).toBeTruthy()
  });

  test('instance has method isEmpty', () => {
    expect(stack.isEmpty).toBeInstanceOf(Function);
  });
});
