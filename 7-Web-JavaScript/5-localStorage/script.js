const localStorageKey = 'greeting';
const localStorageValue = 'سلام دنیا!';

document.querySelector("#btn").addEventListener("click", () => {
    localStorage.setItem(localStorageKey, localStorageValue);
});

document.querySelector("#remove").addEventListener("click", () => {
    localStorage.removeItem(localStorageKey);
});

const resultElement = document.querySelector("#result");
setInterval(() => {
    resultElement.innerText = localStorage.getItem(localStorageKey);
}, 1000);
