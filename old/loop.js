/*
   ===> Loop problem solving
   1. 1+2+3+4+5;
   2. 1*2*3*4*5;
*/
let result1 = 0;
for (let i = 1; i <= 5; i++) {
   result1 = result1 + i;
}
console.log(result1);

let result2 = 1;
for (j = 1; j <= 5; j++) {
   result2 = result2 * j;
}
console.log(result2);

/*
   ===> Loop problem solving
   1. 5^6 (5*5*5*5*5*5);
   2. 2^6 + 4 ^7;
   3. 2^6 * 4 ^7;
*/

let base = 5;
let expo = 7;
let stroge = 1;
for (let b = 1; b<=expo; b++) {
   stroge = stroge * base;
}
console.log(stroge);

function mainLrn (bas, exp) {
   let store = 1;
   for (let x = 1; x <= exp; x ++) {
      store = store * bas;
   }

   return store;
}


