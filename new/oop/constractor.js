// write an object with consttractor function.
function Person (name, age, sellery) {
   this.Name = name,
   this.Age = age,
   this.Sellery = sellery,
   this.doing = function () {
      console.log('i am writting code')
   }
}

const obj = new Person ('babu', 24, 5000);
console.log(obj);

// create another object with the Person constractor funciton;
const obj2 = new Person ('shipa', 14, 2000);
console.log(obj2);



// create object with factory funciton and with constractor function

// create object with factory function
function factory (name, age, sellery) {
   const user = {
      name: name,
      age: age,
      sellery: sellery,
   }

   return user;
}

const fuserOne = factory('babu', 25, '10K');
const fusertwo = factory('shipa', 15, '2K');
console.log(fuserOne);
console.log(fusertwo);


// create object with constractor function
function Cost (name, age, sellery) {
   this.Name = name,
   this.Age = age,
   this.Sellery = sellery
}

const objOne = new Cost ('sonia', '16', '90K');
const objTwo = new Cost ('mukta', '20', '10K');
console.log(objOne);
console.log(objTwo);
