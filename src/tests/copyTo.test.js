/* eslint-disable */
import Stack from '../index.js';

describe('tests for method copyTo', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('Throw error if one of the arguments is not an Array', () => {
    const notArray = '';
    
    expect(() => {
      stack.copyTo(notArray, 1)
    }).toThrow();
  });

  test('Throw error if one of the arguments is not an Array', () => {

    expect(() => {
      stack.copyTo([], 0)
    }).toThrow();
  });
});
