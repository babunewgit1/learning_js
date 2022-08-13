// exersize 1 : find odd and even number

const one = 12;

if (one % 2 === 0) {
   console.log(`even`)
} else {
   console.log(`odd`)
}

// with switch case
const ones = 11;
switch (ones) {
   case one % 2 === 0:
      console.log(`even`);
      break;
   default:
      console.log(`odd`);
}

/* 
   ===> Ex:2
   ===> Finding positive, negative and zero
*/

const two = 1;
if (two < 0) {
   console.log(`negative`)
} else if (two > 0) {
   console.log(`positive`)
} else {
   console.log(`zero`);
}

// with switch case
const twos = 0;
switch (true) {
   case twos < 0:
      console.log(`negative`);
      break;

   case twos > 0:
      console.log(`positive`);
      break;

   default:
      console.log(`zero`)
}


/* 
   ===> Ex:3
   ===> Finding big number
*/

const three = 20;
const four = 30;

if (three > four) {
   console.log(`${three} is bigger then four`)
} else {
   console.log(`${four} is bigger than ${three}`)
}

/* 
   ===> Ex:4
   ===> Finding small number
*/

const five = 9;
const six = 11;
const seven = 34; 

if (five < six && five < seven) {
   console.log(five);
} else if (six < five && six < seven) {
   console.log(six);
} else {
   console.log(seven);
}

/* 
   ===> Ex:5
   ===> Finding Fizz and Buzz
*/

const eight = 34;
if (eight % 3 === 0 && eight % 5 === 0) {
   console.log(`Fizz and Buzz`);
} else if (eight % 3 === 0) {
   console.log(`Fizz`);
} else if (eight % 5 === 0) {
   console.log(`Buzz`);
} else {
   console.log(`Noting`)
}