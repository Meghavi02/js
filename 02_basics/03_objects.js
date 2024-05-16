//object declaration have 2 types 
//  1.litral
//  2.construct
// singleton =>object made throw constructor called singleton
//object.craete

//object literals

const mySym = Symbol("key1")

const Jsuser =  {
    name: "Meghavi",
    "full-name": "Meghavi Lad",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "meghavi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full-name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "Meghavi@gmail.com";
// console.log(Jsuser["email"]);
// Object.freeze(Jsuser);
Jsuser.email = "Meghavilad@gmail.com";
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
