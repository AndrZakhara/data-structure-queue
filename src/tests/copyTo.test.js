/* eslint-disable */
import Stack from '../index.js';

describe('tests for method copyTo', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
  });

  test('Throw error if one of the arguments is not an Array', () => {
    const notArray = '';
    
    expect(() => {
      stack.copyTo(notArray, 1)
    }).toThrow();
  });

  test('Throw error if index < 0', () => {

    expect(() => {
      stack.copyTo([1,2,3], -1)
    }).toThrow();
  });
});
