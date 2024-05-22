// index.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter elements of the array : ', input => {
  const arr = input.split(' ').map(item => item.trim());
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
      if(arr[i]==arr[i+1]) {
          arr[i] = arr[i]*2;
          arr[i+1] = arr[i+1]*1;
          i++;
      }
      else arr[i] = arr[i]*2;
  }
  console.log(arr);
  rl.close();
});
