function getHighestPrice(stocks) {
    let highestPrice = stocks.sort((a, b)=> a.price - b.price).pop();
    return highestPrice ? highestPrice.name : null;
}

const stocks = [
];

console.log(getHighestPrice(stocks)); // "Iran Khodro"
