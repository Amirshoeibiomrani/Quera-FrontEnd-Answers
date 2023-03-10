const data = [
    'Teal',
    'SkyBlue',
    'DarkSeaGreen',
    'Purple',
    'LightPink',
    'Crimson'
];
const defaultColor = 'Silver';

const optionElement = document.getElementsByTagName("option")[0];
const optionElements = data.map(color => {
    const option = optionElement.cloneNode();
    option.value = color;
    option.innerText = color;
    return option;
});

const selectElement = document.querySelector("#color-select");
optionElements.forEach(option => selectElement.append(option));

selectElement.addEventListener("change", e => {
    const boxElement = document.querySelector("#box");
    const color = e.target.value === "" ? defaultColor : e.target.value;
    boxElement.style.backgroundColor = color;

    setTimeout(() => {
        boxElement.style.backgroundColor = defaultColor;
    }, 1000);
})

