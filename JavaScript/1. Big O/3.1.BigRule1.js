const nemo = ["nemo"];
const everyoneBest = [
  "nemo",
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Kathy",
  "Liam",
  "Mona",
  "Nina",
  "Oscar",
];
const everyoneWorst = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Hannah",
  "Ivy",
  "Jack",
  "Kathy",
  "Liam",
  "Mona",
  "Nina",
  "Oscar",
  "nemo",
];

const largeArray = new Array(10000).fill("nemo");
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("Count " + i);
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
      break;
    }
  }
}

findNemo(everyoneWorst); // worst case
findNemo(everyoneBest); // Best case
