//Immediately Invoked Function expression (IIFE)


(function chat(){
    //named iife
    console.log(`DB CONNECTED`);
})();    //for immediate invoke to solve global scopes pollution problem we use iife 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('meghavi')


