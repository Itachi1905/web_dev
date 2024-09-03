// index.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter elements of the array : ', input => {
  const arr = input.split(' ').map(item => item.trim());
  console.log(arr);
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
      if(arr[i]<0) break;
      x = x + parseInt(arr[i]);
  }
  console.log(x);
  rl.close();
});