//let, var, const

const { userInfo } = require("os")

// var c = 300
let a = 700 //global scope

if (true) {
    let a = 10
    const b = 20
    // console.log("inner:" , a);  //local scope
}

// for(let i=0; i<arrayBuffer.length;i++){
//     const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

//nested scopes

function one(){
    const username = "meghavi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
// console.log(website);
two()
}
// one()

if(true){
    const username = "meghavi"
    if(username === "meghavi"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//*********interesting*********//

console.log(addone(5));
function addone(num){
    return num + 1
}

addTwo(3)
const addTwo = function(num){
    return num + 2
}


