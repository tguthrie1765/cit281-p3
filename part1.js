function validDenomination(coin){
    return -1 !== [1, 5, 10, 25, 50, 100].indexOf(coin);
}

function valueFromCoinObject(obj){
    
let {denom = 0, count = 0} = obj;
return denom * count;
}

function valueFromArray(arr){
    const reducer = (accumulator, currentvalue) => accumulator + valueFromCoinObject(currentvalue);
    return arr.reduce(reducer,0);
}

function coinCount(...coinage){
    return valueFromArray(coinage);
}

module.exports = {
    coinCount
}

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
const fs = require('fs');
