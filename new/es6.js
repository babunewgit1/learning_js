/*
   ===> let vs var
   ===> object discturing with funciton
   ===> array discuring 
   ===> declare set
   ===> add element in set
   ===> delete element in set
   ===> size element in set
   ===> clear element in set
   ===> travers element in set
   ===> declare a map
   ===> delete an element form a map
   ===> getting all values form a map
   ===> getting all keys form a map
   ===> getting all element form a map
   ===> clear a map
   ===> convert a string in 2 lenght with 0 from first
   ===> convert a string in 2 lenght with 1 from last
   ===> remove empty string from an string
   ===> remove empty string from an string from first
   ===> remove empty string from an string from last
*/


// let vs var
function check () {
   var a = "fuction scope"
   for (let i = 0; i < 3; i ++) {
      let text = true;
      if (text === true) {
         console.log('hello world');
      }
   }
}
console.log
check ();

// #### explanation: var hocche function scope. function er vitor e declare kora kono var function er baire kaj korbe nah. but function er baire thaka var function er vitor e kaj korbe.

// #### explanation: let hocce block scope. let je block e declare kora hobe shudu matro sai block ei kaj korbe. oi block er baire kaj korbe nah.


// object discturing with funciton
// way -one;
const user = {
   name : 'babu',
   age: 23,
   profession : 'teacher',
   address : {
      village : 'Longorpara',
      thana : 'Sribordi'
   }
}

console.log(user)

const print = (user) => {
   const {name, age, profession, address :{village, thana}} = user;
   console.log(`${name} is ${age} years old. He is a ${profession}. He lives in ${thana}, ${village} `)
}
print(user);

// way two;
const way = {
   name : 'Mahmdul',
   age: 23,
   profession : 'teacher',
   address : {
      village : 'Longorpara',
      thana : 'Sribordi'
   }
}

const printTwo = ({name, age, profession, address : {village, thana}}) => {
   console.log(`${name} is ${age} years old. He is a ${profession}. He lives in ${thana}, ${village} `)
}

printTwo(way);

// array discuring 
const [one, two, three, four, five] = [1,2,3,4,5];
console.log(five);

// declare set
let set = new Set ([1,2,3,4,56]);
console.log(`the first is ${set[0]}`);

// add element in set
set.add('last');
console.log(set);

// delete element in set
set.delete(56);
console.log(set);

// size of the set
console.log(`the size of the set is ${set.size}`);

// travers the set
for (let key of set) {
   console.log(key);
}

// clear the set
set.clear();
console.log(set);


// declare a map
const food = new Map ([
   ['mango','yes'],
   ['banana','no'],
   ['apple','yes'],
])
console.log(food);

// add an element in the map;
food.set('orange', 200);
console.log (food);

// delete an element form a map
food.delete('orange');
console.log(food);

// getting all values form a map
for (let value of food.values()) {
   console.log(value);
}

// getting all keys form a map

for (let key of food.keys() ){
   console.log(key);
}

// getting all element form a map
for (let i of food.entries()) {
   console.log(i[0])
}

// clear a map
food.clear();
console.log(food)


// convert a string in 2 lenght with 0 from first
const min = '4';
const hou = '2';
console.log(min.padStart(2,'0'));

// convert a string in 2 lenght with 1 from last
console.log(hou.padEnd(2,'0'));

// remove empty string from an string
const str = '   babu   ';
console.log(str.trim());

// remove empty string from an string from first
console.log(str.trimStart());

// remove empty string from an string from last
console.log(str.trimEnd());
