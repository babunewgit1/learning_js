// distcuring object in a function 
const user = {
   name : 'babu',
   age: 23,
   profession : 'teacher',
   address : {
      village : 'Longorpara',
      thana : 'Sribordi'
   }
}

// way one;
const userResult = ((user) => {
   const {name, age, profession, address : {village, thana}} = user;
   console.log(`${name} is ${age} years old. ${name} is a ${profession}. ${name} lives in ${thana} at ${village}`);
})
console.log(userResult(user));


// way two;
const userTwo = (({name, age, profession, address : {village, thana}}) => {
   console.log(`${name} is ${age} years old. ${name} is a ${profession}. ${name} lives in ${thana} at ${village}`);
})
console.log(userTwo(user));


// array distcuring;
let [a,b,c,d,e] = [1,2,3,4,5];
console.log(a,b,c,d,e);
console.log(d);