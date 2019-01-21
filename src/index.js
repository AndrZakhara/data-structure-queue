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

  toArray() {
    const newArr = [];
    this.elements.forEach(value => {
      newArr.push(value);
    });

    return newArr;
  }
}

export default Stack;