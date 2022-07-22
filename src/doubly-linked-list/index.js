export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index, onTraverse) {
    if (index < 0 || index >= this.length) return undefined;

    const isFindingInFirstHalf = index <= this.length / 2;
    let from, i, changeCounter;

    if (isFindingInFirstHalf) {
      from = { start: this.head, direction: "next" };
      i = 0;
      changeCounter = () => i++;
    } else {
      from = { start: this.tail, direction: "prev" };
      i = this.length - 1;
      changeCounter = () => i--;
    }
    let res = from.start;

    while (i !== index) {
      if (typeof onTraverse === "function") {
        onTraverse();
      }
      res = res[from.direction];
      changeCounter();
    }
    return res;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this.head;
  }

  shift() {
    if (this.length === 0) return undefined;

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  /*
   * Pops last element from the doubly linked list
   */
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this.tail;
  }
}

export class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
