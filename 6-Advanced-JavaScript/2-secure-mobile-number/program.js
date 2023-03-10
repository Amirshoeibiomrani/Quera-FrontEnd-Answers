function securePhoneNumbers(text) {
    for (let match of text.matchAll(/09[0-9]{9}/g)) {
        let number = match.toString();
        let securedNumber = number.substring(0, 4) + "***" + number.substring(7);
        text = text.replace(number, securedNumber);
    }
    return text;
}

const text = "This is a sample text. My phone number is 09216557777."
console.log(securePhoneNumbers(text));
