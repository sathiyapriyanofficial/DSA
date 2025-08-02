/*
Static Array - Fixed size
Dynamic Array - copy and rebuild an array at a new location

High-level operations:
- dynamically allocate memory
- some operations (like insert/delete) can be O(n)

Implementing a Custom Array:
1. How to build one
2. How to use it
*/

class BuildOwnArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new BuildOwnArray();

newArray.push('First Item');
newArray.push('Second Item');
newArray.push('Third Item');
newArray.push('Fourth Item');

newArray.pop(); // removes 'Fourth Item'
newArray.delete(1); // deletes 'Second Item'
newArray.delete(1); // deletes 'Third Item'
newArray.delete(1); // nothing left at index 1

console.log(newArray);
