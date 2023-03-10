const solver = (text) => text.split(" ").filter((value, index) => value % 6 === 0 && (index + 1) % 6 === 0).sort((a, b) => a - b).join(" ")

console.log(solver(""))


