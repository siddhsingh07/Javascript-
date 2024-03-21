// Reduce

const myNums = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return (acc + currval)
// }, 0);

const myTotal = myNums.reduce( (acc,currval) => (acc + currval),0)

// console.log(myTotal);
// Expected output: 10

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalBill = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalBill);