const name = "Meghavi"
const repoCount = 70

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Meghavi-ml-com');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "     Meghavi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://meghavi.com/meghavi%20lad"
console.log(url.replace('%20', '-'));

console.log(url.includes('meghavii'));

console.log(gameName.split('-'));