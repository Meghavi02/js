const { error } = require("console");

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //Db calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2.");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async task 2 resolve");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"meghavi", email:"meghavi@gmail.com"})
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"meghavi", password:"123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolve or reject");
})

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function () {
        let error = true
        if(!error){
            resolve({username:"meghavi", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const respose = await promiseFive;
        console.log(respose);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const respose = await fetch('https://randomuser.me/api/')
//         const data = respose.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
    
// }
// getAllUsers()

fetch('https://randomuser.me/api/')
.then((respose) => {
    return respose.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})