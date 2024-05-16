//Arrow Functions
//this keyword => give current context

const user = {
    username: "meghavi",
    price: 777,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "meghavi"
//     console.log(this);
// }
// chai()

// const chai = function(){
//     let username = "meghavi"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "meghavi"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }explicit return 

// const addTwo = (num1, num2) => num1 + num2  //implicit return 

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "meghavi"})
console.log(addTwo(3,4));

// const myArray = [2, 4, 6, 8, 7, 9]
// myArray.forEach()
