const nemo = ["nemo"];
const everyone = [
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

// const largeArray = new Array(10000).fill("nemo");
// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     // const element = array[i];
//     if (array[0] === "nemo") console.log("Found NEMO!");
//   }
// }

// findNemo(nemo);
// findNemo(everyone);

// findNemo(largeArray); // O(n) - Linear Time

const boxes = [0, 1, 2, 3, 4, 5, 6];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[5]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
