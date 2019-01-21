class Stack {
  constructor() {
    this.elements = [];
    this.length = this.elements.length;
  }

  push(elem) {
    this.length += 1;
    this.elements[this.length - 1] = elem;
  }

  isEmpty() {
    return this.length === 0;
  }

  clone() {
    const stack = new Stack();

    this.elements.forEach(value => {
      stack.push(value);
    });
    stack.length = this.elements.length;

    return stack;
  }

  pop() {
    return this.elements.splice(this.elements.length - 1, 1);
  }

  peek() {
    if (this.elements.length === 0) {
      throw new Error('Stack is empty!');
    }

    return this.elements[this.elements.length - 1];
  }

  toArray() {
    const newArr = [];
    this.elements.forEach(value => {
      newArr.push(value);
    });

    return newArr;
  }
}

export default Stack;
