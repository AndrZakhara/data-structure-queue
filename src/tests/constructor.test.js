import Queue from '../index.js';

describe('tests for constructor', () => {
  test('should has a constructor in Queue ', () => {
    const QUEUE = new Queue;

    expect(Queue.prototype.constructor).toBe(Queue);
  });
});

