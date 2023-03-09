const data = [
    'Teal',
    'SkyBlue',
    'DarkSeaGreen',
    'Purple',
    'LightPink',
    'Crimson'
];
const defaultColor = 'Silver';

let selectTag = document.getElementById("color-select");
let box = document.getElementById("box");

function selectTagEventHandler(event) {
    box.style.backgroundColor = event.currentTarget.value;
    setTimeout(() => {
        box.style.backgroundColor = defaultColor;
    }, 1000);
}

data.forEach(element => {
    let optionTag = document.createElement("option");
    optionTag.innerHTML = element;
    optionTag.value = element;

    selectTag.append(optionTag);
});

selectTag.addEventListener("change", selectTagEventHandler);