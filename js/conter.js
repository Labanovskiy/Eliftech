
window.addEventListener('click', function(event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterParent = event.target.closest('.parent');
        counter = counterParent.querySelector('[data-counter]');
    }

    if(event.target.dataset.action === 'plus') {
        
        counter.innerText = ++counter.innerText;
    }

    if(event.target.dataset.action === 'minus') {
        
        if ( parseInt(counter.innerHTML) > 1) {
            counter.innerHTML = --counter.innerHTML;
        }
    }

    calcPrice();
});
