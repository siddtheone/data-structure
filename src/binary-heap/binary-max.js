export class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.rearrange();
  }

  rearrange(index = this.values.length - 1) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.values[parentIndex];
    const node = this.values[index];

    if (parent < node) {
      const temp = parent;
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;

      this.rearrange(parentIndex);
    }
  }
}
