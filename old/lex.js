/*
   ===> Loop problem solving
   1. 1+2+3+4+5;
   2. 1*2*3*4*5;
*/

let plus =0;
for (let i = 1; i<=5; i++) {
   plus +=i;
}
console.log(plus);

let mul = 1;
for(let a = 1; a<=5; a++) {
   mul*=a;
}
console.log(mul);

/*
   ===> Loop problem solving
   1. 5^6 (5*5*5*5*5*5);
   2. 2^6 + 4 ^7;
   3. 2^6 * 4 ^7;
*/

let base = 5;
let exp =1;
for (let e = 1; e<=6; e++) {
   exp = base * exp;
}
console.log(exp);

//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function expMath (base1, expo1) {
   let str = 1;
   for(let b = 1; b <= expo1; b++) {
      str = str*base1;
   }
   return str;
}

let fin = expMath(2,6) + expMath(4,7);
console.log(fin);

// ========================================

function into (base2, exp2) {
   let intoMath = 1;
   for (let f = 1; f <= exp2; f ++) {
      intoMath = intoMath*base2;
   }
   return intoMath;
}

let intoResult = into (2,6) * into (4,7);
console.log(intoResult);

// ================================================

/*
   ===> facturial problem solving with loop
   5! ===> 1 * 2* 3 * 4* 5
   ## 1! + 2! + 3! + 4! + 5!
*/

function fact(base) {
   let fax = 1;
   for (let w = 1; w <= base; w ++) {
      fax = fax * w;
   }
   return fax;
}
console.log(fact(5));

let mainFax = 0;
for (let t = 1; t <= 5; t++) {
   mainFax = mainFax + fact (t);
}

console.log(mainFax)


/*
   ===> pyramid problem solving with loop
   *
   **
   ***
   ****
   *****
*/

function pyramid (base) {
   for (let p =1; p<= base; p ++) {
      let strp = "";
      for (let m = 1; m <= p; m ++) {
         strp = strp + "* "
      }
      console.log(strp);
   }
}
pyramid(10);