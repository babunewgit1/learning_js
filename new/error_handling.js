/*
   ===> syntex error.
   ===> referance error.
   ===> type error.
   ===> range error.
   ===> How to through a custom error.
   ===> Use try, catch and finally for error hendeling.
*/



// Use try, catch and finally for error hendeling.

// try...
try {
   multi (10, 1); 
}

catch(error) {
   console.log(`this is error object ${error}`);
   console.log(error.message);
} 

finally {
   console.log('hello world');
}


// syntex error
/* const f name = 'babu'; */

// syntex error solution 
const fname = 'babu';
console.log(fname);

// referance error.
/* console.log(lastName); */

// referance error solve.
let lastName = 'Mia';
console.log(lastName);

// type error.
/* let str = true;
   console.log(str.toUpperCase());*
   
   ===> akhne type error er karon ta hocche touppercase
   method ta shudu string er jonno kaj korbe. "true" jehotu
   akta boolian data type tar jonno ai method ta kaj korbe na
   tai type error asche.   
*/

// type error solution
let str = 'babu';
console.log(str.toUpperCase());

// Range error.

/* let sum = 3.1415786;
   console.log(sum.toFixed(200)) 
   
   ===> akhne range error ta ashar karon ta hocche javascipt
   toFixed method er jonno 1-100 porjonto range niea thake.
   er bashi gale range error ashe.
*/

// Range error solution
let sum = 3.1415786;
console.log(sum.toFixed(40)) ;


// How to through a custom error.

// ### Kono number ke jodi 0 diea vag kora hoi tahole result "infinity" ashe. user jodi 1st number ta ke 0 deia vag korte chai tahole jeno console e akta custom error recive kore.

// use thoug method.

function custom (n1, n2) {
   if(n2 === 0) {
      throw '2nd number can not be 0'
   }
   console.log(n1 / n2);
}
custom (10, 0);


// use thoug object.

function multi (n1, n2) {
   if (n2 === 1) {
      throw new Error ('n2 can not be 1');
   }
   console.log(n1 * n2);
}

multi (10, 1);






