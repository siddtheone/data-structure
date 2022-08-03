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
    const prevIndex = this.keyMap[index].findIndex(
      ([prevKey]) => prevKey === key
    );

    if (prevIndex === -1) {
      this.keyMap[index].push(toInsert);
    } else {
      this.keyMap[index][prevIndex] = toInsert;
    }
  }

  get(key) {
    const index = this._hash(key);
    const existingValue = this.keyMap[index];

    if (Array.isArray(existingValue)) {
      const found = existingValue.find(([keySaved]) => keySaved === key);
      if (found) {
        return found[1];
      }
    }
    return undefined;
  }

  keys() {
    return this.keyMap.reduce((acc, entries) => {
      acc.push(...entries.map(([key]) => key));
      return acc;
    }, []);
  }

  values(override = true) {
    const values = this.keyMap.reduce(
      (acc, entires) => {
        if (entires) {
          if (override) {
            entires.forEach(([_, value]) => acc.add(value));
          } else {
            acc.push(...entires.map(([_, value]) => value));
          }
        }
        return acc;
      },
      override ? new Set() : []
    );

    return override ? Array.from(values.values()) : values;
  }
}
