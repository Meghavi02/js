// Primitive


// 7 types : String, Number, Boolean, null, undefine, Symbol, Bigingt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);
// const bigNumber = 84215414884548478n


// Referance (Non primitive)

//Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];    //array

let myObj = {
    name: "Meghavi",
    age: 20,
}           //object

const myFunction = function(){
    console.log("Hello World!")
}           //function

console.log(typeof heroes);