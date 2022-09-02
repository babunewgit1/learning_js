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


// 1. Write an array.
const arr = [1,2,3,4, 'babu', 'shipa', 'sinan', false];
console.log(arr);

// 2.Print an element of array.
console.log(arr[2]);

// 3.Print the lenght of a array.
console.log(arr.length);

// 4.Add some element of a array form 1st.
const addFrist = arr.unshift('first');
console.log(arr);

// 5.Add some element of a array form last.
const addLast = arr.push('last');
console.log(arr);

// 6.Add some element of a array form middle.
const addMiddle = arr.splice(2, 0, 'one', 'two');
console.log(arr);

// 7. remove some element of a array form 1st.
const removeFirst = arr.shift();
console.log(arr);

// 8.remove some element of a array form last.
const removeLast = arr.pop();
console.log(arr);

// 9.remove some element of a array form middle.
const removeMiddle = arr.splice(0, 2, 0);
console.log(arr);

// 10. Find a element from an array (ans will be true or false).
const find = arr.includes(false);
console.log(find);

// 11.Find a element from an array and print it's index number from first.
const index = arr.indexOf(false);
console.log(index);

// 12. Find a element from an array and print it's index number from last.
const addRepeteElement = arr.splice(1, 0, 'babu', 'babu');
const lastIndex = arr.lastIndexOf('babu');
console.log(lastIndex);

// 13. Write an object in an array.
const objArray = [
   {name : 'babu', age: 24},
   {name : 'Mahmudul', age: 23},
]
console.log(objArray);

// 14. find information form the object of array
const findInfo = objArray.find((person) => {
   return person.name === 'babu';
})
console.log(findInfo);

// 15.find index number of information for the object of array
const fidof = objArray.findIndex((person) => {
   return person.name === 'Mahmudul';
})
console.log(fidof);

// 16. travers all element of array and it's index with for each method
const simple = [1,2,3,4,5,6,7,8,9];
const simtrav = simple.forEach((number) => {
   console.log(number);
   // return false;
})
console.log(simtrav)

const doctor = [
   {name: 'babu', age: 24},
   {name: 'shipa', age: 14},
   {name: 'sinan', age: 74},
   {name: 'sadika', age: 1},
]
const trav = doctor.forEach((person) => {
   return person;
})
console.log(doctor);


// 17. sort array element and reverse the array.
const sort = doctor.sort((num1, num2) => {
   return num1.age - num2.age;
}).reverse()
console.log(sort);

// 18.  check even number for an array with every method.
const even = [1,2,3,4,5,6];
const checkeven = even.every((num) => {
   return num % 2 === 0;
})
console.log(checkeven);


// 19.  check even number for an array with sove method.
const some = even.some((num) => {
   return num % 2 === 0;
})
console.log(some);

// 20. add two array with concat method.
const a = [1,2,3,4,5,6,7,8];
const b = ['a', 'b','c'];
const c = [1,2,3,4,5,6,7,8];
const d = a.concat(b,c);
console.log(d);

// again 
const ax = [
   {name : 'babu', age: '22'},
   {name : 'shipa', age: '12'},
   {name : 'rifat', age: '22'},
];

const bx = [
   {name : 'babu1', age: '22'},
   {name : 'shipa1', age: '12'},
   {name : 'rifat1', age: '22'},
]
console.log(ax.concat(bx,d));

// 21. cut an array
const cut = [1,2,3,4,5];
console.log(cut.slice(1,4));

// 22. clone an object 
const cutClone = cut.slice();
console.log(cutClone);

// 23. clone an array with spread operator.
const spread = [...cut];
console.log(spread);

// 24. concat an array with spread operator.
const at = [1,2,3,4,5];
const bt = [1,2,3,4,5];
const ct = [1,2,3,4,5];
const spdmarg = [...at, ...bt, ...ct];
console.log(spdmarg);

// 25.convert a array with join method.
console.log(at.join('t'));

//26. Return an array with multiply by two.
const multi = [1,2,3,4,5];
const mul = multi.map((num) => {
   return num * 2;
})
console.log(mul);


//27. print all doctor's name for object of array.
const doctors = [
   {name : 'babu', age: '22'},
   {name : 'shipa', age: '12'},
   {name : 'rifat', age: '22'},
]
const nameOfDoctor = doctors.forEach((name) => {
   console.log(name.name)
})

//28. print odd number with filter method.
const ay = [1,2,3,4,5,'babu'];
const odd = ay.filter((number) => {
   return number % 2 === 0
})
console.log(odd);

// 29. sum all element of the array
const sumOne = ay.reduce((sum,number) => {
   return sum = sum + number;
});
console.log(sumOne);

// 30. print the fighter name;
const fighter = [
   {name: 'babu', skill : 70},
   {name: 'shipa', skill : 80},
   {name: 'rifat', skill : 90},
]
const nameOfFighter = fighter.map((person) => {
   return person.name;
})
console.log(nameOfFighter);

// 31.print the fighter who's skill is >= 80.
const filterFighter = fighter.filter((skill) => {
   return skill.skill >= 80
});
console.log(filterFighter)

// 32. print the sum of fighter's skill.
const sumOfSkill = filterFighter.reduce ((sum, number) => {
   return sum.skill += number.skill
})
console.log(sumOfSkill);

// # problem 1: odd sum;
const os = [1,2,3,4,5,6,7,8,9];
const makeOdd = os.filter((number) => {
   return number % 2 === 1;
})

const sumss = makeOdd.reduce((sum, number) => {
   return sum +=number;
},0)
console.log(sumss);

// # problem 2: even and maxvalue;
const ev = [1,2,3,4,5,6,7,8,9];
let int = -1;
const result = ev.map((number) => {
   if (number % 2 === 0) {
      if (number > int) {
         int = number
      }
   }
})
console.log(int);

// way two
const two = ev.filter((num) => {
   return num % 2 === 0;
})
console.log(Math.max(...two));

// solve 3;
const book = [
   {name: 'book1', price: 450, rating: 4.2},
   {name: 'book2', price: 470, rating: 4.1},
   {name: 'book3', price: 350, rating: 3.2},
   {name: 'book4', price: 600, rating: 4.5},
]

// take all books with price less than 500 and rating gratter than 4
const price = book.filter((items) => {
   return items.price < 500 && items.rating > 4
});
console.log(price);

// sort them by their rating in desending order 
const bookSort = price.sort((num1, num2) => {
   return num1.rating - num2.rating;
})
console.log(bookSort);
// reverse
console.log(bookSort.reverse());

// print sorted book name
const nameOfBook = bookSort.map((name) => {
   return name.name;
})
console.log(nameOfBook[0], nameOfBook[1]);

// another way
for (let name of nameOfBook) {
   console.log(name);
}













