import Stack from '../src/index.js';

describe('tests for method toArray', () => {
  let stack = null;
  let array = null;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    array = stack.toArray();
  });

  test('method must return an array', () => {
    expect(array).toBeInstanceOf(Array);
  });

  test('the number of array elements must be equal to the number of stack elements', () => {
    expect(array.length).toBe(3);
  });

  test('array elements must be the same as in stack and in same order', () => {
    expect(array).toEqual([1, 2, 3]);
  });
});