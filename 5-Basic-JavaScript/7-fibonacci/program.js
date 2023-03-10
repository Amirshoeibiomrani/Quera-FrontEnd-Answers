class Solution {
    /**
     * @param {number} number
     */
    solve(number) {
        let fibonacci = this.calculateFibonacci(number);
        console.log(fibonacci.join(", "));
    }

    /**
     * @param {number} sequenceLength
     * @return {number[]}
     */
    calculateFibonacci(sequenceLength) {
        const sequence = [0, 1, 1];
        if(sequenceLength <= 3)
            return sequence.slice(0, sequenceLength);

        for (let newIndex = sequence.length; newIndex < sequenceLength; newIndex++)
            sequence.push(sequence[newIndex - 1] + sequence[newIndex - 2]);
        return sequence;
    }
}

let solution = new Solution();
if (typeof readline === 'function') {
    // This is for Quera judge
    solution.solve(+readline());
} else {
    //This is for manual test
    solution.solve(-5);
    solution.solve(0);
    solution.solve(1);
    solution.solve(3);
    solution.solve(4);
    solution.solve(15);
}
