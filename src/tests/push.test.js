/* eslint-disable */
import Stack from '../index.js';

describe('tests for method push', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('instance has not own property push', () => {
    expect(stack.hasOwnProperty('push')).toBeFalsy();
  });

  test('method returns new length', () => {
    const expectedLength = stack.length + 1;
    stack.push(4);
    const newLength = stack.length;

    expect(newLength).toBe(expectedLength);
  });

  test('method doesn\'t change length, if 0 argument is put', () => {
    stack.push();
    expect(stack.length).toBe(0);
  });
});