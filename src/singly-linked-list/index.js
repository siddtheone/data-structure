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
  }

  reverse() {
    // const current = this.shift();
    // if (this.length > 1) this.reverse();
    // this.push(current.value);

    // const firstNode = this.shift();
    // const lastNode = this.pop();
    // if (this.length > 1) this.reverse();
    // this.push(firstNode.value);
    // this.unshift(lastNode.value);

    let prev = null,
      current = this.head,
      next;

    while (current) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
    const tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;

    return this;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
    } else if (this.length === 1) {
      this.head.next = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.head;
    let pre;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    if (pre) {
      this.tail = pre;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  shift() {
    if (this.length === 0) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;

    let res = this.head;
    for (let i = 0; i < index; i++) {
      res = res.next;
    }

    return res;
  }

  set(index, value) {
    const oldNode = this.get(index);

    if (oldNode) {
      oldNode.value = value;
      return oldNode;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(value);
      return true;
    } else if (index === this.length) {
      this.push(value);
      return true;
    }

    let prev = this.get(index - 1);
    const newNode = new Node(value);

    newNode.next = prev.next;
    prev.next = newNode;

    // const temp = prev.next;
    // prev.next = newNode;
    // newNode.next = temp;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const pre = this.get(index - 1);
    const temp = pre.next;
    pre.next = pre.next.next;

    return temp;
  }

  get length() {
    let i = { point: this.head, i: 0 };

    while (i.point) {
      i.i++;
      i.point = i.point.next;
    }

    return i.i;
  }
}
