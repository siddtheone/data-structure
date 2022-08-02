export class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    const min = Math.min(key.length, 101);
    for (let i = 0; i < min; i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    const existingValue = this.keyMap[index];
    const toInsert = [key, value];
    if (!existingValue) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push(toInsert);
  }

  get(key) {
    const index = this._hash(key);
    const existingValue = this.keyMap[index];

    if (Array.isArray(existingValue)) {
      return existingValue.find(([keySaved]) => keySaved === key);
    }
    return undefined;
  }
}
