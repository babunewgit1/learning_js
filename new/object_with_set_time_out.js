// how to apply one array function in another array
const obj = {
   name : 'babu',
   age : 23,
   doing : function () {
      console.log(`${this.name} is learing js`);
   }
}
obj.doing();

const objtwo = {
   name : 'shipa',
   age : 23,
}

// create an inharetence form obj to objtwo
let result = obj.doing.bind(objtwo);
result();


// how to bind an object for perfectly using this keyword in settimeout function.
const person = {
   name : 'Mahmdul',
   last : 'hasan',
   hobby : ['gaming', 'reading', 'coding'],
   doing : function () {
      console.log(`${this.name} 's hobby is ${this.hobby}`);
      this.hobby.forEach((e) => {
         console.log(`${this.last} hobby is ${e}`);
      })
   }
}

let x = person.doing.bind(person)

setTimeout(x, 2000);


// another way to declare multipul object
function mobject (name, age, profession, student) {
   this.Name = name;
   this.Age = age;
   this.Profession = profession;
   this.Student = student;
}

const one = new mobject ('babu', 24, 'teacher', true);
const two = new mobject ('shipa', 15, 'student', false);
const three = new mobject ('sinan', 24, 'new student', true);
const four = new mobject ('sadika', 24, 'bby', true);

console.log(one, two, three, four);


// build an object with function
function aObject (name, age, hobby) {
   let person = {};

   person.Name = name;
   person.Age = age;
   person.Hobby = hobby;
   return person;
}


console.log(person);


