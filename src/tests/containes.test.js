/* eslint-disable */
import Stack from '../index.js';

describe('tests for method copyTo', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('throw error if element is undefined', () => {
    expect(() => {
      stack.contains();
    }).toThrow();
  });

  test('if argument is a function method must return true', () => {
    const element = () => 5;
    stack.push(() => 5);
    
    expect(stack.contains(element)).toBeTruthy();
  });

  test('if argument is an Object method must return true', () => {
    const element = {};
    stack.push({});
    
    expect(stack.contains(element)).toBeTruthy();
  });
});