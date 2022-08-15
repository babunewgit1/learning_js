const str = "hello world";
console.log(str[2]);
console.log(str.charAt(1));
console.log(str.charCodeAt(4));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("hel", 3));
console.log(str.startsWith("world", 6));
console.log(str.endsWith("ld", 13));

const secondStr = "hello world, I love this world";
console.log(secondStr.search("world"));
console.log(secondStr.indexOf("world", 2));
console.log(secondStr.lastIndexOf("I", 8));

// to string
const toStr = [123];
console.log(toStr.toString());

// concat
const m1 = "hi";
const m2 = " hello";
const m3 = " bye";
console.log(m1.concat(m2, m3));

// split method
const spMethod = "I love javascript too much";
console.log(spMethod.split(" "));
console.log(spMethod.split(" ", 4));

// play with split method
const splMethod = "I love my country very much";
const afterSplit = splMethod.split("");
for (let i = 0; i < afterSplit.length; i++) {
  console.log(afterSplit[i]);
}

// slice
const sliceStr = "I love my bangladesh too much";
console.log(sliceStr.slice(0, 6));
console.log(sliceStr.slice(-6, -1));

// substring
console.log(sliceStr.substring(0, 5));

// sub str
console.log(sliceStr.substr(1, 7));

/*
   ===> write this like as a string

   ===> He said that, "It's a sunny day".
        I like this sunny day

   ===> print a tab gap.

   ===> print a new line.
   
*/

const newStr = 'He said that, "It\'s a sunny day." \n I like this sunny day';
console.log(newStr);

// print a tab gap
const tabGap = 'He said that, "It\'s a sunny day."\n \t I like this sunny day';
console.log(tabGap)
