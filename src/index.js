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

  peek() {
    if (this.elements.length === 0) {
      throw new Error('Stack is empty!');
    }

    return this.elements[this.elements.length - 1];
  }

  copyTo(array, index) {
    if (!(array instanceof Array)) {
        throw new Error(`${array} is not an Array!`);
    }

    if (index < 0) {
        throw new Error('Index must be greater than 0!');
    }

    for (let i = 0; i < this.elements.length; i++) {
        array[index] = this.elements[i];
        index++;
    }
  }
}

export default Stack;