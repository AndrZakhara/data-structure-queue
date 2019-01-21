class Stack {
  constructor() {
    this.elements = [];
    this.length = this.elements.length;
  }

  push(elem) {
    this.length += 1;
    this.values[this.length - 1] = elem;
  }

  isEmpty() {
    return this.length === 0;
  }

  clone() {
    const stack = new Stack();

    this.values.forEach(value => {
      stack.push(value);
    });
    stack.length = this.values.length;

    return stack;
  }
}

export default Stack;