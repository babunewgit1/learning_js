/*
   ===> all object method in one object

   ## TASK ##

      ===> 1. creating an object.
      ===> 2. print the object.
      ===> 3.add email and phn number property in this object with bracket and dot notation. 
      ===> 4.update name and age number property in this object with bracket and dot notation.
      ===> 5.delete name and age property form the object.
      ===> 6.delete name and age property form the object.
      ===> 7.add dynamic property with barcket notation.
      ===> 8.Object method and this keyword.
      ===> 9.Use this keyword and use a functon as a method and print the function.
      ===> 10.travers key and value in object with for of loop.
      ===> 11.travers key and value in object with object.keys and object.values method.
      ===> 12.after using keys and values method I will get a array of keys and values then     travers them with for of loop.
      ===> 13.calculate total sellry of a object.
      ===> 14.calculate total sellry of a object with loop and object method.
      ===> 15.console all the element of the object and use object distactring.
*/


// solution 1: creating an object.
const user = {
   name: 'babu',
   age : 10,
   hobby : 'coding',
}
console.log(user);

// solution 3: add email and phn number property in this object with bracket and dot notation. 
user.phnNumber = '01243o3uo4iu';
user['email'] = 'babuwx@gmail.com'
console.log(user);


// solution 4: update name and age number property in this object with bracket and dot notation.
user.name = "shepa";
user['age'] = 17;
console.log(user);


// solution 5: delete name and age property form the object.
delete user.name;
delete user['age'];
console.log(user);

// solution 6: add dynamic property with barcket notation.
const nameOne = 'Frist name';
const nameTwo = 'Last name';
user [nameOne] = 'babu';
user [nameTwo] = 'Mia';
console.log(user);


// solution 7: Object method and this keyword.
const objOne = {
   name : 'Sonia',
   age : 17,
   biker : true,
   shep : {
      age :19,
   },
   word : function () {
      console.log(`ami amon e. I am ${this.shep.age} years old`);
   }
}
console.log(objOne);
objOne.word();


// solution 8: travers key and value in object with for of loop.
const sellry = {
   empOne: 100,
   empTwo: 200,
   empThree: 300,
   empFour: 400,
   empFive: 500,
}

let ami = 0;

for (keya in sellry) {
   console.log(keya);
   console.log(sellry[keya]);
   ami += sellry[keya];
}
console.log(ami)

// solution 9: travers key and value in object with object.keys and object.values method.

const keys = Object.keys(sellry);
console.log(keys);

const val = Object.values(sellry);
console.log(val);

// print all keys for getting the array of Object method
for (sepOne of keys) {
   console.log(sepOne);
}

let sumval = 0;

for (sepTwo of val) {
   console.log(sepTwo);
   sumval += sepTwo;
}

console.log(`the sum is ${sumval}`);

// solution 10: print all element of an object with normal method and with object destructiring method  



const doctor = {
   name : "babu",
   dagi : 'heart specilist',
   clinic : {
      name : 'happy care clinic',
      address : {
         long: 784.099,
         lat : 345.09,
      },
      operation: function () {
         console.log(`${this.name} is doing heart operation`)
      },
   },
   friends : ['ami', 'tumi', 'tara']
}


console.log(doctor);
console.log(doctor.name);
console.log(doctor.digi);
console.log(doctor.clinic);
console.log(doctor.clinic.name);
console.log(doctor.clinic.address);
console.log(doctor.clinic.address.long);
console.log(doctor.clinic.address.lat);
console.log(doctor.friends);
doctor.clinic.operation();

const doctorFrnd = doctor.friends;
for (ax of doctorFrnd) {
   console.log(ax);
}


// object distcaring
const {name, dagi, clinic, friends} = doctor;
const {name : clinicName, address, operation} = clinic;
const {long, lat} = address;

console.log(name);
console.log(dagi);
console.log(clinic);
console.log(friends);
console.log(clinicName);
console.log(address);
console.log(long);
console.log(lat);
operation();


/*
   ===> make a clone of an object

   ## TASK ##

      ===> 1. use manuall method.
      ===> 2. use for of loop.
      ===> 3. use object.assign method.
      ===> 4. use split method
*/

const users = {
   name : 'shipa',
   age : 16,
}

// useing manuall method.
const userOne = {};
userOne.name = users.name;
userOne.age = users.age;
console.log(userOne);


// useing for of loop method.
const userTwo = {};
for (let left in users) {
   userTwo[left] = users[left];
}
console.log(userTwo);

// useing object.assign method
const userThree = Object.assign({}, userTwo);
console.log(userThree);

// useing split operator
const userFour = {...users};
console.log(userFour)



