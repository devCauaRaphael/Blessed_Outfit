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


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const botaoVoltarAoTopo = document.createElement('button');
    const botaoIrParaBase = document.createElement('button');

    // Definir classes para estilização com Bootstrap
    botaoVoltarAoTopo.className = 'btn btn-primary position-fixed rounded-circle';
    botaoVoltarAoTopo.innerHTML = '<i class="bi bi-arrow-up"></i>';
    botaoVoltarAoTopo.style.backgroundColor = 'black';
    botaoVoltarAoTopo.style.color = 'white';
    botaoVoltarAoTopo.style.border = '2px solid #f9f9f9';
    botaoVoltarAoTopo.style.bottom = '80px';
    botaoVoltarAoTopo.style.right = '20px';
    botaoVoltarAoTopo.style.display = 'none'; // Escondido por padrão

    botaoIrParaBase.className = 'btn btn-primary position-fixed rounded-circle';
    botaoIrParaBase.innerHTML = '<i class="bi bi-arrow-down"></i>';
    botaoIrParaBase.style.backgroundColor = 'black';
    botaoIrParaBase.style.color = 'white';
    botaoIrParaBase.style.border = '2px solid #f9f9f9';
    botaoIrParaBase.style.bottom = '20px';
    botaoIrParaBase.style.right = '20px';

    document.body.appendChild(botaoVoltarAoTopo);
    document.body.appendChild(botaoIrParaBase);

    // Funcionalidade para voltar ao topo
    botaoVoltarAoTopo.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Funcionalidade para ir para a base da página
    botaoIrParaBase.addEventListener('click', function () {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Mostrar ou esconder o botão de voltar ao topo com base na posição de rolagem
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            botaoVoltarAoTopo.style.display = 'block';
        } else {
            botaoVoltarAoTopo.style.display = 'none';
        }
    });
});