/* eslint-disable */
import Stack from '../index.js';

describe('tests for method clear', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

  });

  test('instance has not own property clear', () => {
    expect(stack.hasOwnProperty('clear')).toBeFalsy();
  });

  test('stack length must be 0', () => {
    stack.clear()
    expect(stack.length).toBe(0);
  });
});