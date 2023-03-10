function camelCase(text) {
    let str = text.trim()
        .split(" ")
        .map(word=> word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join("");
    return str[0].toLowerCase() + str.substring(1);
}

export default camelCase;
