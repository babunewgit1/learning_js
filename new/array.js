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
   ===> Return an array with multiply by two.
   ===> print all doctor's name for object of array.
   ===> print odd number with filter method.
   ===> print sum of arry with reduct method.
   ===> print the fighter name;
   ===> print the fighter who's skill is >= 80.
   ===> print the sum of fighter's skill.
   ===> # problem 1: odd sum;
   ===> # problem 2: even and maxvalue;
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


// Return an array with multiply by two.
const marr = [2,4,6];
const nmarr = [];

const mresult = marr.map(num => {
   return nmarr.push(num * 2);
});
console.log(nmarr)


// print all doctor's name for object of array.
const nobj = [
   {
      name : 'Mahmudul',
      age : 22,
   },

   {
      name : 'babu',
      age : 15,
   },
]

const nresult = nobj.map(num => {
   return num.name;
});
console.log(nresult);


// print odd number with filter method.
const fil = [1,2,3,4,5,6,7,8,9,0]
const filOpera = fil.filter(num => {
   return num % 2 === 1;
});
console.log(filOpera);

// print sum of arry with reduct method.
const rearr = [1,2,3,4,5,6,7,8,9];

const result = rearr.reduce((sum, num) => {
   return sum += num;
}, 0);
console.log(result);


// print the fighter name;
const fighter = [
   {name: 'babu', skill : 70},
   {name: 'shipa', skill : 80},
   {name: 'rifat', skill : 90},
]

const fighterName = fighter.map((num) => {
   return num.name;
});

console.log(fighterName);

// print the fighter who's skill is >= 80.
const skillPower = fighter.filter((number) => {
   return number.skill >= 80;
});

console.log(skillPower);

// print the sum of fighter's skill.
const sumSkill = fighter.reduce((jog, num) => {
   return jog = jog + num.skill;
}, 0);
console.log(sumSkill);


// # solution 1: odd sum;
const oddArray = [1,2,3,4,5,6,7,8,9] 



const oddResult = oddArray.filter((num) => {
   return num % 2 === 1;
});

const arrRed = oddArray.reduce((sum, num) => {
   return sum += num;
}, 0);
console.log(arrRed);


// # problem 2: even and maxvalue;
const mValue = [1,2,3,4,5,6,7,8,9]

// way one
let int = -1;
for (let key of mValue) {
   if (key % 2 === 0) {
      if (key > int) {
         int = key
      }
   }
}
console.log(int);

// way two
const evn = mValue.filter ((num) => {
   return num % 2 === 0
});
console.log(Math.max(...evn));



// solve 3;
const book = [
   {name: 'book1', price: 450, rating: 4.2},
   {name: 'book2', price: 470, rating: 4.1},
   {name: 'book3', price: 350, rating: 3.2},
   {name: 'book4', price: 600, rating: 4.5},
]

// take all books with price less than 500 and rating gratter than 4
const one = book.filter ((num) => {
   return num.price < 500 && num.rating > 4
});
console.log(one);

// sort them by their rating in desending order
const two = one.sort((x, y) => {
   return x.rating - y.rating;
})
console.log(two);

// print their name.
const three = one.sort((x, y) => {
   return x.rating - y.rating;
}).reverse();
console.log(three);











