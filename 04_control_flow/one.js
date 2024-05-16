//if 

const isUserloggedIn = true
const temperature = 41
// if(temperature < 50){
//     console.log("less than 50");
// } 
// else{
//     console.log("temperature is greater than 50 ");
// }
// console.log("Executed");

// const score = 200
// if(score > 100){
//     const power ="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");    don't do

const userLoggedIn = true 
const debitCard = true
const loggedInFromgoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromgoogle || loggedInFromEmail){
    console.log("User logged in");
}
