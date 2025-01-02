
const myarr = [0,2,1,2,6,8, true, "muskan"]

// console.log(myarr[0]);

const myarr2 = new Array(1,2,3,4)
// console.log(myarr2);

// myarr.push(6)
// console.log(myarr);
// myarr.pop();
// console.log(myarr);

// myarr.unshift(9)
// console.log(myarr);

// myarr.shift()  // aage se ek element uda deta h, 0th index wala element
// console.log(myarr)

// console.log(myarr.includes(2));
// console.log(myarr.indexOf(2));

// const newarr = myarr.join()
// console.log(typeof newarr);
// console.log(newarr);

console.log("A ", myarr);
const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1,3) // it manipulates our array, udao the element in the splice funcion
console.log("C ",myarr);
console.log(myn2);











