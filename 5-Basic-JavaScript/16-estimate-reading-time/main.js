function estimateReadingTime(text) {
    const numOfWords = [...text.matchAll(/[a-zA-Z0-9]+/g)].length;
    return Math.ceil(numOfWords / 200);
}

let text = randomText(250);
console.log(estimateReadingTime(text))

function randomText(wordsCount) {
    return Array(wordsCount).fill("").map(randomWord).join(" ");
}

function getRandom(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function randomWord() {
    const vowels = ["a", "e", "i", "o", "u"];
    const consonants = [
        "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
        "n", "p", "r", "s", "t", "v", "w", "x", "y", "z"
    ];

    return Array(Math.floor(Math.random() * 4 + 4))
        .fill("")
        .map(() => getRandom(consonants) + getRandom(vowels))
        .join("");
}
