//object singleton

const { log } = require("console")

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "sam@gmail.com",
    fullname: {
        username: {
            firstname: "Meghavi",
            lastname: "Lad"
        }
    }
}
// console.log(regularUser.fullname?.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "meghavi@gmail.com"
    },
    {
        id: 1,
        email: "meghavi@gmail.com"
    },

]

user[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "meghavi"
}

// course.courseInstructor
const {courseInstructor: instructor} = course;
console.log(instructor);

// {
//     "name": "meghhavi",
//     "coursename": " js in hindi",
//     "price": "free"
// }