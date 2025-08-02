const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Give me a string to reverse: ', function (str) {
  if (!str || typeof str !== 'string' || str.trim() === '') {
    console.log('❌ Invalid input: Please enter a non-empty string.');
    rl.close();
    return;
  }

  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  console.log('🔁 Reversed String:', reverse);
  rl.close();
});

// Even you can solve this via in-build function
