function boo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("boo!");
  }
}

boo([1, 2, 3, 4, 5]); // o(n)

function arrayOfHiTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiTimes(6);
