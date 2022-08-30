/*
   ===> Find a string with test method.
   ===> Find a string with test method with i modifire.

*/

//Find a string with test method.
const regexp = /hello/;
console.log(regexp.test('hello world'));


// Find a string with test method with i modifire.
const reg = /Hello/i;
console.log(reg.test('hello world'));

// source 
const str = /there/i;
console.log(str.source);

// exec;
const rex = /there/ig;
console.log(rex.exec('Hello there'));

// match 
const strx = 'Hi, hello there there there there';
console.log(strx.match(rex));

// search 
console.log(strx.search(rex));

// replace 
console.log(strx.replace(rex, 'fuck'));

