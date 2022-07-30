export class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this._rearrange();
  }

  _rearrange(index = this.values.length - 1) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.values[parentIndex];
    const node = this.values[index];

    if (parent < node) {
      this.values[parentIndex] = node;
      this.values[index] = parent;

      this._rearrange(parentIndex);
    }
  }

  extractMax() {
    this._swapElementsOnIndex(0, this.values.length - 1);
    const maxNode = this.values.pop();
    this._sink();

    return maxNode;
  }

  _sink(i = 0) {
    const node = this.values[i];

    const leftChildIndex = 2 * i + 1;
    const rightChildIndex = 2 * i + 2;

    const leftChild = this.values[leftChildIndex];
    const rightChild = this.values[rightChildIndex];

    if (rightChild) {
      if (leftChild > rightChild && node < leftChild) {
        this._swapElementsOnIndex(i, leftChildIndex);
        this._sink(leftChildIndex);
      }

      if (rightChild > leftChild && node < rightChild) {
        this._swapElementsOnIndex(i, rightChildIndex);
        this._sink(rightChildIndex);
      }
    } else if (node < leftChild) {
      this._swapElementsOnIndex(i, leftChildIndex);
      this._sink(leftChildIndex);
    }
  }

  _swapElementsOnIndex(index1, index2) {
    const temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }
}
