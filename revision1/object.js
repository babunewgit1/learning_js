/*
   1.Create an object.
   2.Print object element with bracket and dot notation.
   3.add, remove, update element in object.
   4.what is the diffrent between bracket notation and dot notation.
   5.add dynamic property in object.
   6.Use this keyword in a object and declare a function in an object.
   7.travers key and value in object with for in loop.
   8.travers key and value in object with object method.
   9.after using keys and values method I will get a array of keys and values then travers them with for of loop;
   10.calculate total sellry of a object.
   11.console all the element of the object and use object distactring.
   12.copy an object by using 1.manually   2.for in loop  3.Object.assign   4.split operator
   13.PI, random, round, ceil, flore, max, min
   14.convert an object into a json
   15.convert an json into a object.
*/

// 1.Create an object.
const person = {
   name: 'Mahmudul',
   age: 24,
   student : true,
}
console.log(person);

//2.Print object element with bracket and dot notation.
console.log(person.name, person.age, person.student);
console.log(person['name'], person['age'], person['student']);


// 3.add, remove, update element in object.
// add...
person.phn = '0194848';
person['email'] = 'babuwx11@gmali.com';
console.log(person);

// remove
delete person.phn;
delete person['email'];
console.log(person);

// update 
person.name = 'babu';
person['age'] = 25;
console.log(person);


//4.what is the diffrent between bracket notation and dot notation.
   // solution: dot notation is only used for valid variable in js but for in valid variable you can use bracket notaion.


// 5.add dynamic property in object.
const gf = 'grilfriend';
person[gf] = 'nai';
console.log(person);


//6.Use this keyword in a object and declare a function in an object.
const doctor = {
   name : 'Rifat',
   age : '26',
   another : {
      name : 'babu',
      age: 34,
   },
   doing : function (){
      console.log(`${this.another.name} is doing operation. and he is ${this.another.age} years old`)
   },
}
doctor.doing();


// 7.travers key and value in object with for in loop.
for (let key in doctor) {
   console.log(key);
   console.log(doctor[key]);
}


// travers key form object with object method.
const trav = {
   name : 'x',
   age : 23,
   hobby : {
      one: 'reading',
      two : 'learing js'
   }
}

// travers main object keys.
const travKey = Object.keys(trav);
console.log(travKey);

// travers hobby object keys.
const hobbyKey = Object.keys(trav.hobby);
console.log(hobbyKey);

// concat main and sub object's keys.
const margKey = travKey.concat(hobbyKey);
console.log(margKey);

// get every element from margkey;
for (let x of margKey) {
   console.log(x);
}

// travers main object values.
const travValue = Object.values(trav);
console.log(travValue);

// travers hobby object's  values.
const hobbyValue = Object.values(trav.hobby);
console.log(hobbyValue);

// concat main and sub object's values.
const margvalue = travValue.concat(hobbyValue);
console.log(margvalue);

// remove some element form the array.
margvalue.splice(2,1);
console.log(margvalue);

// get every element from margkey;
for (let x of margvalue) {
   console.log(x)
}


// 10.calculate total sellry of a object.
const sellery = {
   pOne : 1000,
   pTwo : 2000,
   pThree : 3000,
   pFour : 4000,
   pFive : 5000,
}

// way one.
let selleryTotal = 0;
for (let key in sellery) {
   selleryTotal = selleryTotal + sellery[key];
}
console.log(selleryTotal);

// way two.
let calSell = 0;
const getValue = Object.values(sellery);
for (let key of getValue) {
   calSell += key;
}
console.log(calSell);


// 11.console all the element of the object and use object distactring.
const man = {
   name : 'babu',
   age : 24,
   student : true,
   friend : ['Mahmudul', 'Shipa', 'Rifat'],
   hobby : {
      frist : 'gaming',
      second : 'coding',
      third : 'travelling',
   },
   profession : function () {
      console.log(`total age = ${this.age} + ${this.jobAge}`)
      return `${man.name} is a teacher`;
   },
   jobAge: 25, 
}
console.log(man);


// access all the element with normal way
console.log(man.name)
console.log(man.age)
console.log(man.student)
console.log(man.friend);
for (let key of man.friend) {
   console.log(key)
};
console.log(man.hobby);
console.log(man.hobby.frist);
console.log(man.hobby.second);
console.log(man.hobby.third);
console.log(man.jobAge);
man.profession();
console.log(man.profession());


// access all the element with object discturing way.
const {name, age, student, friend, hobby, profession, jobAge} = man;
const {frist, second, third} = hobby;

console.log(name);
console.log(age);
console.log(student);
console.log(friend);
console.log(hobby);
console.log(profession);
console.log(jobAge);
console.log(frist);
console.log(second);
console.log(third);


// 13.PI, random, round, ceil, flore, max, min
console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(1.345));
console.log(Math.ceil(1.9));
console.log(Math.floor(1.1));
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

// 14.convert an object into a json
const json = {
   name: 'babu',
   age: 24
}

const objToJson = JSON.stringify(json);
console.log(objToJson);


// 15.convert an json into a object.
const jsObj = JSON.parse(objToJson);
console.log(jsObj);












