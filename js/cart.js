
const basket = document.querySelector('.basket');

window.addEventListener('click', function(event) {

    if (event.target.hasAttribute('data-add')) {
        const card = event.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.img').getAttribute('src'),
            title: card.querySelector('.title').innerText,
            price: card.querySelector('.price').innerText,
        };

        const cardItemHtml = `
            <div class="w-[600px] h-[250px] m-[20px] flex gap-[50px] text-blue-500 border-2 border-solid border-blue-100 rounded-lg" data-id="${productInfo.id}">
                <div class="py-[20px] px-[20px]">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}" class="w-[200px] h-[200px]">
                </div>
                <div class="flex flex-col">
                    <h3 class="px-[20px] py-[20px]">${productInfo.title}<br>
                        <span class="font-bold hover:text-yellow-500">${productInfo.price}</span> uah
                    </h3>
                    <div class="flex justify-between text-center bg-blue-100 rounded-lg parent">
                        <div class="p-[20px] cursor-pointer hover:bg-slate-100" data-action="minus">-</div>
                        <div class="p-[20px] cursor-pointer" data-counter>1</div>
                        <div class="p-[20px] cursor-pointer hover:bg-slate-100" data-action="plus">+</div>
                    </div>
                </div>
            </div>`;
        // basket.insertAdjacentHTML('beforeend', productInfo);
        localStorage.setItem('savedCardItemHtml', cardItemHtml);

        let savedCardItemHtml = localStorage.getItem('savedCardItemHtml');

        document.addEventListener('DOMContentLoaded', function() {
            let targetElement = document.getElementById('targetElement');
            if (targetElement) {
              targetElement.innerHTML = savedCardItemHtml;
            }
          });

          calcPrice();
    }
});