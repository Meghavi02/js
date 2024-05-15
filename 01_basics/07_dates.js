//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 2);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2024-01-7");
let myCreatedDate = new Date("01-07-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);   //times in milisecond
// console.log(myCreatedDate.getTime());   //times in milisecond
console.log(Math.floor(Date.now()/1000));   //converting into second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})