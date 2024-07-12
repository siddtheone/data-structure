export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;

    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;

    let current = this.head;
    let pre;
    while (current.next) {
      pre = current;
      current = current.next;
    }

    if (pre) {
      pre.next = null;
      this.tail = pre;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    currentHead.next = null;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;

    if (this.length === 1) {
      this.tail = node;
    }

    return this.length;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let item = this.head;
    for (let i = 0; i < index; i++) {
      item = item.next;
    }

    return item;
  }

  set(index, value) {
    const itemToSet = this.get(index);

    if (itemToSet) {
      itemToSet.value = value;
    }

    return itemToSet;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    }

    const pre = this.get(index - 1);
    const node = new Node(value);

    node.next = pre.next;
    pre.next = node;
    this.length++;

    return this.length;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }

    const pre = this.get(index - 1);
    const nodeToRemove = pre.next;

    pre.next = nodeToRemove.next;
    nodeToRemove.next = null;

    this.length--;

    return nodeToRemove;
  }
}
