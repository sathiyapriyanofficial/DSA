class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) this.data[index] = [];

    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] === key) {
        this.data[index][i][1] = value;
        return;
      }
    }

    this.data[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.data[index];
    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }
    return undefined;
  }

  // Return all keys in the hash table
  keys() {
    const allKeys = [];
    for (let bucket of this.data) {
      if (bucket) {
        for (let [k, v] of bucket) {
          allKeys.push(k);
        }
      }
    }
    return allKeys;
  }

  show() {
    console.log(this.data);
  }
}

// Usage
const myHashTable = new HashTable(2);
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 1000);
console.log(myHashTable.get('apples')); // 1000
console.log(myHashTable.keys()); // ['grapes', 'apples']
myHashTable.show();
