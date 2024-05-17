//for of => array , object loop

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World"

for (const str of greeting) {
    // console.log(str);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game1: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }