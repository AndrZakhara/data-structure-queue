import Stack from '../index.js';

describe('tests for method copyTo', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
    stack.push('element3');
    stack.push('element2');
    stack.push('element1');
  });

  test('method must return an array with cloned elements', () => {
    const array = [];
    stack.copyTo(array, 0);

    expect(array[0]).toBe('element1');
    expect(array[1]).toBe('element2');
    expect(array[2]).toBe('element3');
  });

  test('Throw error if one of the arguments is not an Array', () => {
    const notArray = '';
    expect(() => {
      stack.copyTo(notArray, 1);
    }).toThrow();
  });

  test('Throw error if index < 0', () => {
    expect(() => {
      stack.copyTo([1, 2, 3], -1);
    }).toThrow();
  });
});