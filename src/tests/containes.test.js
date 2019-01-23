import Stack from '../index.js';

describe('tests for method containes', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
  });

  test('throw error if element is undefined', () => {
    expect(() => {
      stack.contains();
    }).toThrow();
  });

  test('if stack has element method must return true', () => {
    const element = 5;
    stack.push(4);
    stack.push(element);
    stack.push('apple');

    expect(stack.contains(element)).toBeTruthy();
  });
});