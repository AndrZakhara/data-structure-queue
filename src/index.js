const deepEqual = require('deep-equal');

class Stack {
  constructor() {
    this.elements = [];
    this.length = this.elements.length;
  }

  push(elem) {
    if (typeof elem === 'undefined') {
      return;
    }
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
    if (this.elements.length === 0) {
      return;
    }

    this.length -= 1;

    return this.elements.splice(this.elements.length - 1, 1)[0];
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

    let elementIndex = index;

    for (let i = this.elements.length - 1; i >= 0; i--) {
      array[elementIndex] = this.elements[i];
      elementIndex += 1;
    }
  }

  toArray() {
    const newArr = [];
    this.elements.forEach(value => {
      newArr.push(value);
    });

    return newArr;
  }

  clear() {
    this.elements.length = 0;
    this.length = 0;
  }

  contains(element) {
    if (element !== undefined) {
      for (let i = 0; i < this.elements.length; i++) {
        if (this.elements[i] === element) {
          return true;
        }

        if (typeof element === 'object') {
          if (deepEqual(this.elements[i], element)) {
            return true;
          }
        }

        if (typeof element === 'function') {
          if (String(element) === String(this.elements[i])) {
            return true;
          }
        }
      }

      return false;
    } else {
      throw Error('Method argument is not define');
    }
  }
}

export default Stack;