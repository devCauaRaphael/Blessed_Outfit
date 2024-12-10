// script.js

// Atualiza o número de itens no carrinho
const cartButtonList = document.querySelectorAll('.btn-outline-dark.mt-auto');
const cartBadge = document.querySelector('.badge.bg-dark.text-white');

let cartCount = 0;

// Adiciona um evento para cada botão de "Add to cart"
cartButtonList.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        cartCount++;
        cartBadge.textContent = cartCount;
       
    });
});

