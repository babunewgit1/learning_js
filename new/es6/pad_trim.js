/*
   ===> consvert 1 lenght string to 5 lenght string form start
   ===> consvert 1 lenght string to 5 lenght string form last
   ===> remove unnecery sapce form string
   ===> remove unnecery sapce form string from first
   ===> remove unnecery sapce form string from last
*/

// consvert 1 lenght string to 5 lenght string form start
const str = '1';
let after = str.padStart(4, '0');
console.log(after);

// consvert 1 lenght string to 5 lenght string form last
let before = str.padEnd(10, '0');
console.log(before);

// remove unnecery sapce form string
const str1 = '     babu    ';
let resutl = str1.trim();
console.log(resutl);

// remove unnecery sapce form string from first
let result2 = str1.trimStart();
console.log(result2);

// remove unnecery sapce form string from last
let result3 = str1.trimEnd();
console.log(result3);