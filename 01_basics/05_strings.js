const name = "muskankamaal"
const repocount = 23

// console.log(name + repocount + " is the value");
// --> this is not a great way to print any value, can have btter methos

// we start by string interpolation

console.log(`Hello, my name is ${name} and my repocount is ${repocount}`);

const gamename = new String('muskan-tiwari-google')
console.log(gamename);

// console.log(gamename[0]);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());

// console.log(gamename.charAt(3));
// console.log(gamename.indexOf('s'));

const newstring = gamename.substring(0,4);
// console.log(newstring);

const anotherstring = gamename.slice(2,3)
// console.log(anotherstring);

const newstringone = "     muskaan   kamaal    "
// console.log(newstringone);
// console.log(newstringone.trim());

const url = "//https//muskan//tiwari//%20google.com"
console.log(url.replace('%20', '-'))
console.log(url.includes('muskan'));

console.log(gamename.split('-'))
console.log(gamename);









