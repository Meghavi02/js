const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, current) {
//     console.log(`acc: ${acc} and current: ${current}`);
//     return acc + current
// }, 3)

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);