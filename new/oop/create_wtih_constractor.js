/*
   ===> create a string with constractor.
   ===> create a number with constractor.
   ===> create a boolean with constractor.
   ===> create a function with constractor.
   ===> create a object with constractor.
   ===> create a array with constractor.
*/

// create a string with constractor.
const str = new String("babu");
console.log(str);

// create a number with constractor.
const number = new Number (12345);
console.log(number);

// create a boolean with constractor.
const boolean = new Boolean(true);
console.log(boolean);

// create a function with constractor.
const func = new Function('n1', 'n2', 'return n1 + n2');
console.log(func(1,2));

// create a object with constractor.
const obj = new Object ({
   name : 'babu',
   age : 24
});
console.log(obj);

// create a array with constractor.
const arr = new Array(1,2,3,4,5,6);
console.log(arr);