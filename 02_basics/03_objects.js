
// literal and constructor --> 2 ways to declare an object
// singleton 

// literals se jo banta h toh, singleton nhi banta h
// constructor se jo bnega, vo singleton bnega

// Object.create --> ye h constructor way ke through

// OBJECT LITERALS

const mysym = Symbol("key1")



const JSuser = {
    name : "hitesh",
    "full name": "muskan tiwari",
    age: 23,
   [mysym]: "mykey 1",
    location: "jaipur",
    email: "muskan@google.com",
    isloggedin: false,
    lastlogindays: ["monday","saturday"]
}

// console.log(JSuser.email);
// console.log(JSuser.location);
// console.log(JSuser.isloggedin);
// console.log(JSuser.lastlogindays);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mysym]);

// console.log(typeof JSuser[mysym]);

JSuser.email = "muskan@chatgpt.com"
// Object.freeze(JSuser)
JSuser.email = "muskan@apple.com"
// console.log(JSuser);

JSuser.greeting = function()
{
    console.log("Hello js user, welcome!");
    
}
console.log(JSuser.greeting);
console.log(JSuser.greeting());

JSuser.greeting2 = function()
{
    console.log(`Hello, js user, ${this["full name"]}, we welcome you!`);
    
}
console.log(JSuser.greeting2());





