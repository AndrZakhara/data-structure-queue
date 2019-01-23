import Stack from '../index.js';

describe('tests for method peek', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
    stack.push(5);
  });

  test('method must always show last element', () => {
    expect(stack.peek()).toBe(5);
    stack.pop();
    stack.push('element1');
    stack.push('element2');
    stack.push('element3');
    expect(stack.peek()).toBe('element3');
    stack.pop();
    expect(stack.peek()).toBe('element2');
    stack.pop();
    expect(stack.peek()).toBe('element1');
  });
});
