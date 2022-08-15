// creating an object
const person = {
   name : 'babu',
   age : 24,
   hobby : 'coding'
}
console.log(person);

// bracket notation and dot notation
console.log(person.name);
console.log(person.age);
console.log(person.hobby);

console.log(person['name']);
console.log(person['age']);
console.log(person[`hobby`]);
console.log(typeof person['age']);


/*
   ===> Add, remove and update in a object.
   ===> what is the diffrent between Dot notation and Bracket notation
*/

const user = {
   name : "babu",
   age : 35,
   isMaride : false
}

// add email and phn number property in this object with bracket and dot notation
user.email = 'john@gmail.com';
console.log(user);

user['phnNumber'] = '0184538958';
console.log(user);

// update name and age number property in this object with bracket and dot notation
user.name = 'Mahmudul';
user['age'] = 25;
console.log(user);

// delete name and age property form the object
delete user.name;
delete user['age'];
console.log(user);

// add dynamic property with barcket notation
const form = 'First Name';
user[form] = 'Mahmudul hasan babu';
console.log(user);
console.log(user[form]);


/*
   ===> Object method and this keyword.
   ===> Use this keyword and use a functon as a method and print the function
*/

const userOne = {
   name: 'Mahmudul hasan babu',
   age : 24,
   student : true,
   friends : ['babu', 'shipa', 'sinan', 'sarika'],
   color : null,
   word : function () {
      console.log(`I am ${this.age} years old.`)
   }
}

console.log(userOne);
userOne.word();

console.log(userOne.friends[0]);

/*
   ===> travers key and value in object with for of loop;
   ===> travers key and value in object with object.keys and object.values method;
   ===> after using keys and values method I will get a array of keys and values then travers them with for of loop;
*/

const userTwo = {
   name : 'Mahmudul hasan',
   age : 24,
   student : true,
   word : function () {
      console.log(`I am ${this.age} years old`)
   },
   hobby : 'learing javascript'
}

//travers key and value in object with for in loop;
for (let key in userTwo) {
   console.log(key);
   console.log(userTwo[key]);
}

// travers key and value in object with object.keys and object.values method;
let objKey = Object.keys (userTwo);
let objValue = Object.values (userTwo);
console.log(objKey);
console.log(objValue);

// after using keys and values method I will get a array of keys and values then travers them with for of loop;
for (let arrKey of objKey) {
   console.log(arrKey);
}

for (let arrKey of objKey) {
   console.log(objValue);
}


/*
   ===> calculate total sellry of a object
*/

const sellry = {
   pOne : 100,
   pTwo : 200,
   pThree : 300,
   pFour : 400,
   pFive : 500
}

// way 1
let sumOne = 0;
for (let number in sellry) {
   sumOne += sellry[number];
}
console.log(sumOne);

// way 2
let sumResult = 0;
let sumValues = Object.values(sellry);
for (let sumx of sumValues) {
   sumResult += sumx;
}
console.log(sumResult);



