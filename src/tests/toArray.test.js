/* eslint-disable */
import Stack from '../index.js';

describe('tests for method toArray', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  test('method must return an array', () => {
    let array = stack.toArray();
    expect(array).toBeInstanceOf(Array);
  });

  test('the number of array elements must be equal to the number of class elements', () => {
    const array = stack.toArray()
    expect(array.length === stack.length).toBeTruthy();
  });
  
});