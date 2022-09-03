// export single funciton to imp.js
function sum (n1, n2) {
   console.log(n1 + n2);
}

export default sum;


// export multipul funciton to imp.js
export function mult (n1, n2) {
   console.log(`mul is ${n1*n2}`);
}

export function bieog (n1, n2) {
   console.log(`min is ${n2 - n1}`);
}