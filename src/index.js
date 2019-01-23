class Stack {
  constructor() {
    this.elements = [];
  }

  get length() {
    return this.elements.length;
  }

  push(elem) {
    if (typeof elem === 'undefined') {
      return;
    }

    this.elements.push(elem);
  }

  isEmpty() {
    return this.length === 0;
  }

  clone() {
    const stack = new Stack();

    this.elements.forEach(value => {
      stack.push(value);
    });

    return stack;
  }

  pop() {
    if (this.elements.length === 0) {
      return;
    }

    return this.elements.pop();
  }

  peek() {
    if (this.elements.length === 0) {
      throw new Error('Stack is empty!');
    }

    const { elements } = this;

    return elements[elements.length - 1];
  }

  copyTo(array, index) {
    if (!(array instanceof Array)) {
      throw new Error(`${array} is not an Array!`);
    }

    if (index < 0) {
      throw new Error('Index must be greater than 0!');
    }

    let elementIndex = index;

    for (let i = this.elements.length - 1; i >= 0; i--) {
      array[elementIndex] = this.elements[i];
      elementIndex += 1;
    }
  }

  toArray() {
    return this.elements.slice();
  }

  clear() {
    this.elements.length = 0;
  }

  contains(element) {
    if (element === undefined) {
      throw Error('Method argument is not define');
    }

    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i] === element) {
        return true;
      }
    }

    return false;
  }
}

export default Stack;