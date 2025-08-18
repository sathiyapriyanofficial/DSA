class HashTable {
  constructor(len) {
    this.data = new Array(len);
  }

  print() {
    console.log(this.data);
  }
}

const SummaHash = new HashTable(5);

SummaHash.print();
