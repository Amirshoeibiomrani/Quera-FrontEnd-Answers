const successElement = document.getElementById("successMessage");
const errorElement = document.getElementById("errorMessage");

document.getElementById("contact-us-form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    postContact(formData)
        .then(data => {
            if (data.success)
                showElement(successElement);
            else
                showErrorElement(data.error);
        }).catch(error => {
        showErrorElement(error)
    });
});

/**
 * @param {Object} data
 * @return {Promise<any>}
 */
function postContact(data) {
    return fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(data),
    }).then((response) => response.json());
}

function hideAllMessages() {
    successElement.style.display = "none";
    errorElement.style.display = "none";
}

/**
 * @param {HTMLElement} element
 */
function showElement(element) {
    hideAllMessages();
    element.style.display = "block";
}

/**
 * @param {string} message
 */
function showErrorElement(message) {
    errorElement.innerText = message;
    showElement(errorElement);
}
