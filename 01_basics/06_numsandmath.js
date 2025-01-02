const score = 100
// console.log(score);

const balance = new Number(900)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(4)); // gives the precision upto 4 digits
const othernumber = 23.8790
// console.log(othernumber.toPrecision(5));

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));


//////////////////////////// MATH IS JS ///////////////////////////

// console.log(Math);
// console.log(Math.abs(-1));
// console.log(Math.round(4.3));

// console.log(Math.min(5,6,20));
// console.log(Math.max(100,5,800))
console.log(Math.random()); // always gives value between 0 and 1

// console.log((Math.random() * 10) + 1);
// yha pe humne multiply to krdiya 10 se, lekin number 0.002 bhi ho skta h toh answer uska 0 aajega, tbhi +1 kiya

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);













