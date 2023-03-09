let str = readline();
let res = "";

function isPrime(elem) {
    for (let i = 2; i < elem; i++) {
        if (elem % i == 0) {
            return false;
        }
    }
    return true;
}

let arr = str.split(" ");
arr = arr.map(elem => parseInt(elem));
arr = arr.filter(isPrime);

res = arr.join(" ");

console.log(res);