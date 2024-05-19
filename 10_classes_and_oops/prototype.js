// let myName = "meghavi     "
// let myChannel = "Tea      "
// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.meghavi = function(){
    console.log(`meghavi is present in all objet`);
}
Array.prototype.heyMeghavi = function(){
    console.log(`Meghavi says hello`);
}

// heroPower.meghavi()
// myHeros.meghavi()
// myHeros.heyMeghavi()
// heroPower.heyMeghavi()

// inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo: true 
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher:__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) 
let anotherUsername = "chaiaurcode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength()
"meghavi".trueLength()
"iceTea".trueLength()