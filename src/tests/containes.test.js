/* eslint-disable */
import Stack from '../index.js';

describe('tests for method copyTo', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('throw error if element is undefined', () => {
    expect(() => {
      stack.containes();
    }).toThrow();
  });

  test('', () => {
    const element = () => {};
    
    expect(stack.containes(element)).toBeTruthy();
  });
});