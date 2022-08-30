/*
   1.print a cherector form a string.   
   2.print a cherector unicode form a string.
   3.print a keyword form a string.
   4.print a keyword form a string form begining.
   5.print a keyword form a string form ending.
   6.print 2 string with concat.
   7.print a cherector index number.
   8.print a keyword's index number after searching form string
   9.convert a string in an array with some of relational cherector
   10.cut some cherector from an string.
   11.cut some cherector from an string by using subStr method.
   12.cut some cherector from an string by using substring.
*/


// Soluition #1 : print a cherector form a string.
const str = 'Bangladesh'
console.log(str[2]);
console.log(str.charAt(1));


// Soluition #2 : print a cherector unicode form a string.
console.log(str.charCodeAt(0));

// Soluition #3 : print a keyword form a string.
console.log(str.includes('ang', 1));

// Soluition #4 : print a keyword form a string form begining.
console.log(str.startsWith('Bang', 0));

// Soluition #5 : print a keyword form a string form ending.
console.log(str.endsWith('desh', 15));

// Soluition #6 : print 2 string with concat.
const One = 'I ';
const Two = 'Love '
const three = One.concat(Two, str);
console.log(three);

// Soluition #7 : print a cherector index number.
console.log(Two.indexOf('v', 3));

// Soluition #8 : print a keyword's index number after searching form string.
console.log(Two.search('o'));

// Soluition #9 : convert a string in an array with some of relational cherector
console.log(three.split('', 4));

// Soluition #10 : cut some cherector from an string;
const day = 'My day was too bad';
console.log(day.slice(1, 6));
console.log(day.substr(0, 6));
console.log(day.substring(0, 6));

/*
   1.print a cherector form a string. ===> [0], chartAt();   
   2.print a cherector unicode form a string. ===> chartCodeAt(0);
   3.match a keyword form a string. ===> includes('keyword', index number koto porjonto search korbe oi ta);
   4.print a keyword form a string form begining. ===> startWtih ('keyword', index);
   5.print a keyword form a string form ending. ===> endsWtih ('keyword', index);
   6.print 2 string with concat. ===> concat (var1, var2);
   7.print a cherector index number. ===> indexof('cherector')
   8.print a keyword's index number after searching form string ===> search('keyword')
   9.convert a string in an array with some of relational cherector ===> split('');
   10.cut some cherector from an string. ===> slice('keyword);
   11.cut some cherector from an string by using subStr method.===> substr('keyword', length)
   12.cut some cherector from an string by using substring.===> subString ('keyword', index number);
*/

