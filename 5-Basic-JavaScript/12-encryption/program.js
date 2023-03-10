const ascii = (c) => String(c).charCodeAt(0);
const chr = (c) => String.fromCharCode(c);

function encrypt(str, n) {
    let result = "";
    for (let c of str) {
        const isLowerCase = c === c.toLowerCase();
        const baseCode = ascii(isLowerCase ? 'a' : 'A');
        result += chr(((ascii(c) - baseCode + n) % 26) + baseCode);
    }
    return result;
}

function decrypt(str, n) {
    return encrypt(str, 26 - (n % 26));
}

export { encrypt, decrypt };
