export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }

    let temp = this.root;
    while (true) {
      if (value < temp.value) {
        if (temp.left === null) {
          temp.left = node;
          return this;
        }
        temp = temp.left;
      } else if (value > temp.value) {
        if (temp.right === null) {
          temp.right = node;
          return this;
        }
        temp = temp.right;
      } else {
        return undefined;
      }
    }
  }
}
