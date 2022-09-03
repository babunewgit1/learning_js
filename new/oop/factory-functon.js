// declare a object in factory function
function user (name, age) {
   const obj = {
      name,
      age,
      doing: function () {
         console.log('I love to write js code')
      }
   }
   return obj;
}

// create object with new function call
const obj2 = user('shipa', 24);
const obj3 = user('sinan', 24);

console.log(obj2, obj3);


