const sliderImages = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
    "./images/image4.jpg",
];
const sliderDom = document.getElementById("slider");

let currentImage = 0;

document.querySelector("#nextButton").addEventListener("click", () => {
    currentImage = (currentImage + 1) % sliderImages.length;
    showImage(currentImage);
});

document.querySelector("#prevButton").addEventListener("click", () => {
    currentImage -= 1;
    if (currentImage < 0)
        currentImage = sliderImages.length - 1;

    showImage(currentImage);
});

function renderImages() {
    sliderImages.forEach((image) => {
        sliderDom.innerHTML += "<img src='" + image + "' />";
    });
}

function clearImages() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
}

function showImage(imageIndex) {
    clearImages();
    document.getElementsByTagName("img")[imageIndex].style.opacity = 1;
}

function init() {
    renderImages();
    showImage(currentImage);
}

init();
