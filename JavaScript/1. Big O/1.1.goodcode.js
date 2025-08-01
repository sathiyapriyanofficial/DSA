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

const largeArray = new Array(10000).fill("nemo");
function findNemo(array) {
  let timeStart = performance.now();

  for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    if (array[0] === "nemo") console.log("Found NEMO!");
  }

  let timeEnd = performance.now();
  console.log(
    "Call to find NEMO took " + (timeEnd - timeStart) + " Milliseconds"
  );
}

// findNemo(nemo);
// findNemo(everyone);
findNemo(largeArray);
