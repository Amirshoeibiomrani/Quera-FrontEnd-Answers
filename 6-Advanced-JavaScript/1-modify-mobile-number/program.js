function formatPhoneNumber(phoneNumber) {
    return phoneNumber.startsWith("09")
        ? "+98" + phoneNumber.substring(1)
        : null;
}

console.log(formatPhoneNumber("09125689423"));
console.log(formatPhoneNumber("93564588881"));
console.log(formatPhoneNumber("08789654432"));
