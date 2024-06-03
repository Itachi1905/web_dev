let str = "Alpha Coder"
let x = 0;
let l = str.length
let arr = ['a','e','i','o','u','A','E','I','O','U']
while(l--) {
    if( arr.find( element => element == str[l] ) ) x++; 
}
console.log(x)