// PRIMITIVE DATATYPES --> THESE ALL ARE CALL BY VALUES
// string, number, boolen, undefined,null
// Symbol --> ye kisi bhi value ko unique bnane me use hota h
// Bigint --> for large values


const isloggedin = false;
let outsidetemp = null
let email;
const num = 2;

const bignumber = 263483274824687678565n

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);


// REFERENCE OR NON PRIMITIVE DATATYPES
// Array, Objects, Functions

// non primitive ka datatype functions aata h
// sirf function ka datatype 'object function' hota h

const heroes =["shaktimaan","spiderman"]
// objects are stored inside curly braces

let myobject = {
    name: "muskan tiwari",
    age: 22
}

const myfunction = function(){
    console.log("hello world");
    
}

console.log(typeof myfunction);
console.log(typeof myobject);
console.log(typeof bignumber);
console.log(typeof id);

