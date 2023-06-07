function calcPrice() {
    const basketItems = document.querySelectorAll('.basket-item');
    const total = document.querySelector('[data-total]');

    let totalPrice = 0;
    basketItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('[data-price]');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    });

    total.innerText = totalPrice;

    console.log(totalPrice);
};

