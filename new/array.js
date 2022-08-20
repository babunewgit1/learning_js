/*
   ===> Write an array.
   ===> Print an element of array.
   ===> Print the lenght of a array.
   ===> Add some element of a array form 1st.
   ===> Add some element of a array form last.
   ===> Add some element of a array form middle.
   ===> remove some element of a array form 1st.
   ===> remove some element of a array form last.
   ===> remove some element of a array form middle.
   ===> Find a element from an array (ans will be true or false).
   ===> Find a element from an array and print it's index number from first.
   ===> Find a element from an array and print it's index number from last.
   ===> Write an object in an array.
   ===> find information for the object of array
   ===> find index number of information for the object of array
   ===> travers all element of array and it's index with for each method
   ===> sort array element.
   ===> reverse array element.
   ===> perfectly sort array element and reverse it with chainging funciton.
   ===> check even number for an array with every method.
   ===> check even number for an array with some method.
   ===> add two array with concat method.
   ===> slice an array.
   ===> clone an array with slice method.
   ===> clone an array with spread operator.
   ===> concat an array with spread operator.
   ===> convert a array with join method.
   ===> split a string.
*/

// Write an array
const arr = ['f1', 'f2', 'f3', 'f4', 'f5'];
console.log(arr);

// Print an element of array.
console.log(arr[2]);

// Print the lenght of a array.
console.log(`The lenght of array is ${arr.length}`);

// Add some element of a array form 1st.
arr.unshift(1,2,3,4);
console.log(arr);

// Add some element of a array form last.
arr.push ('ami', 'tumi', 'tui');
console.log(arr);

// Add some element of a array form middle.
arr. splice(4, 0, 'i', 'love', 'you');
console.log(arr);




const arraySecond = [1,2,3,4,5,6,7,8,9,0];

// remove some element of an array for 1st 
arraySecond.shift();
console.log(arraySecond);


// remove some element of an array for last
arraySecond.pop();
console.log(arraySecond);


// remove some element of an array for middle
arraySecond.splice(2, 3);
console.log(arraySecond);


// declare a new array
const newArray = [1,3,4,2,4,5,2];

// Find a element from an array (ans will be true or false).
console.log(newArray.includes(3));
console.log(newArray.includes(3, 3));

// Find a element from an array and print it's index number from first.
console.log(newArray.indexOf(2));
console.log(newArray.indexOf(2, 4));

// Find a element from an array and print it's index number from first.
console.log(newArray.lastIndexOf(2, 4));

/*
   ===> indexOf(index, operation index) er somoi 2 ta peramerter er moddhe 1st perameter ta ki khujtesi oi ta bujai. r second peremeter ta bujai koto tomo index theke operation ta start hobe.

   ===> lastIndexOf(index, operation index) er somoi 2 ta peramerter er moddhe 1st perameter ta ki khujtesi oi ta bujai. r second peremeter ta bujai koto tomo index porjonto operation ta cholbe
*/


// print the referance type of array
const doctor = [
   {
      name : 'Mahmudul Hasan',
      age : 24,
   },

   {
      name : 'Shipa',
      age : 17,
   },
]
console.log(doctor);
console.log(doctor[0]);
console.log(doctor[0].name);


// find information for the object of array
const find = doctor.find(function (doctor) {
   return doctor.name === 'Mahmudul Hasan'
});
console.log(find);

const findTwo = doctor.find((doctor) => {
   return doctor.name === 'Shipa'
});
console.log(findTwo);


// find index number of information for the object of array
const fIndex = doctor.findIndex(function (doctor) {
   return doctor.name === 'Mahmudul Hasan'
})
console.log(fIndex);

const fIndexTwo = doctor.findIndex ((doctor) => {
   return doctor.age === 17
});
console.log(fIndexTwo);


// travers all element of array and it's index with for each method
const arrayTra = ['ami', 2,3,4,5]
const traArry = arrayTra.forEach((element, index) => {
   console.log(`this is element ${element}`);
   console.log(`this is index ${index}`);
});


// sort array element.
const sortArr = [2,3,4,56,10];
sortArr.sort();
console.log(sortArr);

// reverse array element.
sortArr.reverse();
console.log(sortArr);

// perfectly sort array element with chainging funciton.
const perfect = [
   {
      name : 'Mahmudul',
      age : 24,
   },

   {
      name : 'shipa',
      age : 16,
   },
]

const pOne = perfect.sort((d1, d2) => {
   return d1.age - d2.age;
});
console.log(pOne);

const perfectTwo = [1,2,3,4,55,6,10];
const pTwo = perfectTwo.sort((n1, n2) => {
   return n1 - n2;
});
console.log(pTwo);


// perfectly sort array element and reverse it with chainging funciton.
const px = [2,3,4,5,33,55,10]
const resultPx = px.sort ((n1, n2) => {
   return n1 - n2;
}).reverse();
console.log(resultPx);



// check even number for an array with every method.
const even = [2,3,4,6,8];
const checkOne = even.every ((num) => {
   return num % 2 === 0
});
console.log(checkOne);


// check even number for an array with some method.
const some = [2,3,4,6,8];
const checkTwo = some.some((num) => {
   return num % 2 === 0;
});
console.log(checkTwo);


// add two array with concat method.
const cOne = [1,2,3,4,5];
const cTwo = ['ami', 'tumi', 'tui'];
const marge = cOne.concat(cTwo);
console.log(marge);


// slice an array.
const slice = [1,2,3,4,5];
const sliced = slice.slice(0,4);
console.log(sliced);


// clone an array with slice method.
const slicex = [1,2,3,4,5];
const ax = slicex.slice();
console.log(ax);


// clone an array with spread operator.
const arrFive = [1,2,3,5,6];
const newArry = [...arrFive];
console.log(newArry)


// concat an array with spread operator.
const arrSix = [1,2,3]
const arrSeven = [4,5,6]
const arrEight = [7,8,9]
const makeArr = [...arrSix, ...arrSeven, ...arrEight];
console.log(makeArr);


// convert a array with join method.
const jArry = [1,2,3,4,5,6,7];
const afterJoin = jArry.join ('-'); // defult perameter will be -;
console.log(afterJoin);


// split a string.
const message = 'I love my country';
const split = message.split(' ');
console.log(split); // this will print a array;
const arrTojoin = split.join('-');
console.log(arrTojoin);










