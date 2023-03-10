let div = document.getElementById("price");

fetch("http://localhost:3000/random", { method: "GET" })
    .then(response =>
        response.json()
    )
    .then(data => {
        div.innerHTML = data.price;
    })
    .catch(error => {
        console.log("Error!");
        console.error(error);
    });


let id = setInterval(() => {

    fetch("http://localhost:3000/random", { method: "GET" })
        .then(response =>
            response.json()
        )
        .then(data => {
            div.innerHTML = data.price;
        })
        .catch(error => {
            console.log("Error!");
            console.log(error);
        });

}, 1000);
