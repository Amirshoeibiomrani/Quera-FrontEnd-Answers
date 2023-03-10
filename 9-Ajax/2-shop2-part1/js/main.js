/*
<div class="product col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
            <a href="#"
                ><img
                    class="card-img-top"
                    src="ادرس عکس محصول"
                    alt="عنوان محصول"
            /></a>
            <div class="card-body">
                <h4 class="card-title">
                    عنوان محصول
                </h4>
                <h5 class="product-price">قیمت محصول تومان</h5>
                <p class="card-text">
                    توضیحات محصول
                </p>
            </div>
            <div class="card-footer">
                <button class="btn btn-light add-to-cart" data-product-id="ایدی محصول">
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
</div>
*/

function renderer(products) {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product", "col-lg-4", "col-md-6", "mb-4");

        let card = document.createElement("div");
        card.classList.add("card", "h-100");

        let aTag = document.createElement("a");
        aTag.href = "#";

        let imgTag = document.createElement("img");
        imgTag.classList.add("card-img-top");
        imgTag.src = product.image;
        imgTag.alt = product.title;

        aTag.append(imgTag);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let h4Tag = document.createElement("h4");
        h4Tag.classList.add("card-title");
        h4Tag.innerText = product.title;

        let h5Tag = document.createElement("h5");
        h5Tag.classList.add("product-price");
        h5Tag.innerText = `${new Intl.NumberFormat().format(parseInt(product.price))} تومان`;

        let pTag = document.createElement("p");
        pTag.classList.add("card-text");
        pTag.innerText = product.description;

        cardBody.append(h4Tag, h5Tag, pTag);

        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        let button = document.createElement("button");
        button.classList.add("btn", "btn-light", "add-to-cart");
        button.setAttribute("data-product-id", product.id);

        cardFooter.append(button);


        card.append(aTag, cardBody, cardFooter);

        productDiv.append(card);

        productList.append(productDiv);
    });
}

fetch("http://localhost:3000/products", { method: "GET" })
    .then(response =>
        response.json()
    )
    .then(data => {
        products = data;
        renderer(data);
    })
    .catch(error => {
        console.log("Error!");
        console.log(error);
    });


// function renderer(products) {
//     let productList = document.getElementById("product-list");
//     productList.innerHTML = "";

//     products.forEach(product => {
//         let productDiv = `<div class="product col-lg-4 col-md-6 mb-4">
//                                     <div class="card h-100">
//                                         <a href="#"
//                                             ><img
//                                                 class="card-img-top"
//                                                 src="${product.image}"
//                                                 alt="${product.title}"
//                                         /></a>
//                                         <div class="card-body">
//                                             <h4 class="card-title">
//                                                 ${product.title}
//                                             </h4>
//                                             <h5 class="product-price">${new Intl.NumberFormat().format(parseInt(product.price))} تومان</h5>
//                                             <p class="card-text">
//                                                 ${product.description}
//                                             </p>
//                                         </div>
//                                         <div class="card-footer">
//                                             <button class="btn btn-light add-to-cart" data-product-id="${product.id}">
//                                                 افزودن به سبد خرید
//                                             </button>
//                                         </div>
//                                     </div>
//                             </div>`;

//         productList.innerHTML += productDiv;
//     });
// }

// fetch("http://localhost:3000/products", { method: "GET" })
//     .then(response =>
//         response.json()
//     )
//     .then(data => {
//         products = data;
//         renderer(data);
//     })
//     .catch(error => {
//         console.log("Error!");
//         console.log(error);
//     });
