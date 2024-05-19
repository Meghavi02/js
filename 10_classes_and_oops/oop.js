const user = {
    username: "meghavi",
    loginCount: 8,
    signIn:true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}
const userOne = new User("meghavi", 12, true)
const userTwo = new User("chaiaurcode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

///new = keyword  
//create a empty object (instances)
// it is work as constructor(it can call constructino function)
//throw the this keyword all context can injected 