/*
   ===> Write a normal funciton
   ===> Wrtie a function with perameter and argument
   ===> Write a function with return
   ===> Write a function with defult parameter
   ===> Write a function as function expression
   ===> Write a arrow function
   ===> Write a arrow function with multiply by 2
   ===> Write a arrow function with rest perameter
   ===> Write a arrow function with rest perameter doing multiply
   ===> Write three function (pure function, function expression, arrow function) for calculating the area of a circel.
   ===> Write a arrow function for getting max number form perameter

*/

// write a normal function
function write () {
   console.log('I love to lear javascript');
}
write();

// Wrtie a function with perameter and argument
function nameOfMan (name, age) {
   console.log(`My name is ${name}, I am ${age} years old.`);
}
nameOfMan('Mahmudul Hasan', 24);


// Write a function with return
function sum (num1, num2) {
   let sumOf = num1 + num2;
   return sumOf;
}
console.log(sum(10, 20));

// Write a function with defult perameter
function pera (num2, num1 = 10, num3 = 15) {
   let sumPera = num1 + num2 + num3;
   return sumPera;
}
const resultPara = pera(5);
console.log(resultPara);

// defult perameter gula always last e dite hobe na hole NAN output hobe.


// write a functon as a funciton expression
const total = function (math1, math2) {
   const totalresult = math1 + math2;
   return totalresult;
}
let mainresutl = total(10, 11);
console.log(mainresutl);


// write an arrow function 
const arrow = (num1, num2) => {
   return num1 + num2;
}
console.log(arrow(10, 90));


// Write a arrow function with multiply by 2
const multiply = (base, mult) => {
   return base * mult;
}
console.log(multiply(10, 2));


//Write a arrow function with rest perameter 
const rest = (...arg) => {
   return arg;
}
console.log(rest (1,2,3,4,5));


// Write a arrow function with rest perameter doing multiply
const restPara = (...arg) => {
   let tResult = 1;
   for (let times of arg) {
      tResult *= times;
   }
   return tResult;
}

const mResult = restPara(10,20,30);
console.log(mResult);


// calculate area of a circel with pure function
function area (radious) {
   return Math.PI * radious * radious;
}
let resultOne = area (2);
console.log(`pure function's result is ${resultOne}`);

// calculate area of a circel with function expression
const cArea = function (radious) {
   return Math.PI * radious * radious;
}
console.log(cArea(2));

// calculate area of a circel with arrow function
const arrowArea = (radious) => {
   return Math.PI * radious * radious;
}
console.log(arrowArea (3));

// max number 



// Write a arrow function for getting max number form perameter
const max = (...args) => {
   let storeValue = -1;
   for (let values of args) {
      if (values > storeValue) {
         storeValue = values;
      }
   }
   return storeValue;
}

console.log(max(1,2,3,4,5,6,7,8,9,0));

