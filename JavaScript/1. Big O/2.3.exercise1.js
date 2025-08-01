// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // o(1)
  a = 50 + 3; // o(n) - assign so o(1)

  for (let i = 0; i < input.length; i++) {
    // o(n)
    anotherFunction(); // o(n)
    let stranger = true; // o(n)
    a++; // o(n)
  }
  return a; // o(1)
}

funChallenge(5); // o(n)
/* Math Step

Big O = (3* O(1)) + O(n+n+n+n)
      = 3+ 4n
      = n


*/

/* Take away
1. note down every line via count
*/
