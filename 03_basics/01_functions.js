//function 
// means it can convert whole code into one package

const { get } = require("http");


function sayMyName() {
    console.log("M");
    console.log("e");
    console.log("g");
    console.log("h");
    console.log("a");
    console.log("v");
    console.log("i");
}
// sayMyName()

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}


const result = addTwoNumber(2, 4);
// addTwoNumber(2, "4");
// console.log("Result:", result);

function loginUserMessage (username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("meghavi"));
// console.log(loginUserMessage("meghs"));

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200, 400, 600, 2000));

const user ={
    username: "meghavi",
    price: 166
}

function handleObject(anyobject){
    console.log(`Usernaem is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 777
})

const myNewArray = [200, 300, 400]
function returnSecondValuee(getArray){
    return getArray[1];
}

// console.log(returnSecondValuee(myNewArray));
// console.log(returnSecondValuee([200, 300, 400]));

