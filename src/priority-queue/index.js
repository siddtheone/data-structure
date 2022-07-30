export class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

export class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);

    this.values.push(node);
    this._rearrange();
  }

  _rearrange(index = this.values.length - 1) {
    const node = this.values[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.values[parentIndex];

    if (parent && node.priority < parent.priority) {
      this.values[parentIndex] = node;
      this.values[index] = parent;
      this._rearrange(parentIndex);
    }
  }

  dequeue() {
    const min = this.values[0];
    this.values[0] = this.values.pop();

    this._sinkDown();

    return min;
  }

  _sinkDown(i = 0) {
    const node = this.values[i];
    const leftChildIndex = 2 * i + 1;
    const rightChildIndex = 2 * i + 2;

    const leftChild = this.values[leftChildIndex];
    const rightChild = this.values[rightChildIndex];

    if (rightChild) {
      if (
        leftChild.priority < rightChild.priority &&
        node.priority > leftChild.priority
      ) {
        this._swapElementsAtIndexes(i, leftChildIndex);
        this._sinkDown(leftChildIndex);
      }

      if (
        rightChild.priority < leftChild.priority &&
        node.priority > rightChild.priority
      ) {
        this._swapElementsAtIndexes(i, rightChildIndex);
        this._sinkDown(rightChildIndex);
      }
    } else if (leftChild && node.priority > leftChild.priority) {
      this._swapElementsAtIndexes(i, leftChildIndex);
      this._sinkDown(leftChildIndex);
    }
  }

  _swapElementsAtIndexes(index1, index2) {
    const temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }
}
