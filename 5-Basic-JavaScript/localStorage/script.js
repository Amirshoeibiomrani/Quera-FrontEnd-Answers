const localStorageKey = 'greeting';
const localStorageValue = 'سلام دنیا!';

let addButton = document.querySelector("#btn");
let removeButton = document.querySelector("#remove");
let resultParagraph = document.querySelector("#result");

function addButtonEventHandler() {
    localStorage.setItem(localStorageKey, localStorageValue);
}

function removeButtonEventHandler() {
    localStorage.removeItem(localStorageKey);
}

addButton.addEventListener("click", addButtonEventHandler);
removeButton.addEventListener("click", removeButtonEventHandler);

setInterval(() => {
    let item = localStorage.getItem(localStorageKey);

    let result = "";

    if (item != null) {
        result = localStorageValue;
    }

    resultParagraph.innerHTML = result;
}, 1000);