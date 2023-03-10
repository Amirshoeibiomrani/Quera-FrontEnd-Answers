/*
<div class="list-group-item d-flex justify-content-between align-items-center cart-item">
  <span>عنوان محصول</span>
  <div>
    <button class="btn inc-quantity" data-product-id="ایدی محصول">+</button>
    <span>تعداد محصول برای خرید</span>
    <button class="btn dec-quantity" data-product-id="ایدی محصول">-</button>
  </div>
</div>
*/

function renderProducts(products) {
  const productList = document.getElementById('product-list');

  const productsHTML = products
    .map(
      product =>
        `<div class="product col-lg-4 col-md-6 mb-4">
		<div class="card h-100">
			<a href="#"
				><img
					class="card-img-top"
					src="${product.image}"
					alt="${product.title}"
			/></a>
			<div class="card-body">
				<h4 class="card-title">
				    ${product.title}
				</h4>
				<h5 class="product-price">${formatMoney(product.price)} تومان</h5>
				<p class="card-text">
				    ${product.description}
				</p>
			</div>
			<div class="card-footer">
				<button class="btn btn-light add-to-cart" data-product-id="${product.id}">
					افزودن به سبد خرید
				</button>
			</div>
		</div>
	</div>`
    )
    .join('');

  productList.innerHTML = productsHTML;
}

function formatMoney(amount, decimalCount = 0, decimal = '.', thousands = ',') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
}

let products = [];
window
  .fetch('http://localhost:3000/products')
  .then(res => res.json())
  .then(result => {
    products = result;
    renderProducts(products);
  });

