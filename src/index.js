class Stack {
  constructor() {
    this.elements = [];
    this.length = this.elements.length;
  }

  push(elem) {
    this.length += 1;
    this.values[this.length - 1] = elem;
  }
}

export default Stack;