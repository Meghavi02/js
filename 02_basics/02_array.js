const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

//spead operator example of spread operator is when we break  than it can spread all peices

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

//another array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//for data scraping 

console.log(Array.isArray("Meghavi"));
console.log(Array.from("Meghavi"));
console.log(Array.from({name: "Meghavi"})); //interesting because we must provide name value which we want to print otherwise it gives empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));