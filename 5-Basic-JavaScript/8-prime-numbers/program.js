class Solution {
    /**
     * @param {number[]} numbers
     * @return void
     */
    printPrimeNumbers(numbers) {
        let result = numbers.filter(this.isPrime).join(" ");
        console.log(result);
    }

    /**
     * @param {number} number
     * @return {boolean}
     */
    isPrime(number) {
        if (number <= 3) return true;
        for (let i = 2; i < Math.sqrt(number) + 1; i++) {
            if (number % i === 0)
                return false;
        }
        return true;
    }
}

let solution = new Solution();
if (typeof readline === 'function') {
    // This is for Quera judge
    solution.printPrimeNumbers(readline().split(" ").map(n => +n));
} else {
    //This is for manual test
    solution.printPrimeNumbers([13, 6, 2, 11, 23, 33]);
    solution.printPrimeNumbers([30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
}
