/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let ar = Math.floor(Math.random() * 3) + 1;
let br = Math.floor(Math.random() * 3) + 1;
let cr = Math.floor(Math.random() * 3) + 1;

let s = "";
if( ar == 1 ) {
    s = s + "Crazy";
}
else if( ar == 2 ) {
    s = s + "Amazing";
}
else if( ar == 3 ) {
    s = s + "Fire";
}
if( br == 1 ) {
    s = s + " Engine";
}
else if( br == 2 ) {
    s = s + " Foods";
}
else if( br == 3 ) {
    s = s + " Garments";
}
if( cr == 1 ) {
    s = s + " Bros";
}
else if( cr == 2 ) {
    s = s + " Limited";
}
else if( cr == 3 ) {
    s = s + " Hub";
}
console.log(s)