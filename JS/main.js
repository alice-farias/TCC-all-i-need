// Inicialização do Owl Carousel

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: false, // Desativa o loop para evitar a duplicação de itens
        margin: 10, // Adiciona margem entre os itens
        nav: true,
        responsive: {
            0: {
                items: 1 // Exibe apenas 1 item em telas pequenas
            },
            600: {
                items: 3 // Exibe 3 itens em telas médias
            },
            1000: {
                items: 5 // Exibe 5 itens em telas grandes
            }
        }
    });
});

// Adicionar Event Listeners para todos os cards
const cards = document.querySelectorAll('.card0, .card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8, .card9, .card10, .card11, .card12, .card13, .card14, .card15');

cards.forEach(card => {
    let defaultImg, hoverImgSrc, defaultImgSrc;

    if (card.classList.contains('card0')) {
        defaultImg = card.querySelector('.default-img');
        hoverImgSrc = './IMG/hover-img.gif';
        defaultImgSrc = './IMG/default-img.png';
    } else if (card.classList.contains('card1')) {
        defaultImg = card.querySelector('.jaquetaPreta');
        hoverImgSrc = './IMG/jaquetaPreta.gif';
        defaultImgSrc = './IMG/jaquetaPreta.png';
    } else if (card.classList.contains('card2')) {
        defaultImg = card.querySelector('.camisaPreta');
        hoverImgSrc = './IMG/camisaPreta.gif';
        defaultImgSrc = './IMG/camisaPreta.png';
    } else if (card.classList.contains('card3')) {
        defaultImg = card.querySelector('.camisa');
        hoverImgSrc = './IMG/camisa.gif';
        defaultImgSrc = './IMG/camisa.png';
    }
    else if (card.classList.contains('card4')) {
        defaultImg = card.querySelector('.camisaBranca');
        hoverImgSrc = './IMG/camisaBranca.gif';
        defaultImgSrc = './IMG/camisaBranca.png';
    }
    else if (card.classList.contains('card5')) {
        defaultImg = card.querySelector('.blazer');
        hoverImgSrc = './IMG/blazer.gif';
        defaultImgSrc = './IMG/blazer.png';
    }
    else if (card.classList.contains('card6')) {
        defaultImg = card.querySelector('.moletomPreto');
        hoverImgSrc = './IMG/moletomPreto.gif';
        defaultImgSrc = './IMG/moletomPreto.png';
    }
    else if (card.classList.contains('card7')) {
        defaultImg = card.querySelector('.jaquetaLaranja');
        hoverImgSrc = './IMG/jaquetaLaranja.gif';
        defaultImgSrc = './IMG/jaquetaLaranja.png';
    }
    else if (card.classList.contains('card8')) {
        defaultImg = card.querySelector('.moletomBranco');
        hoverImgSrc = './IMG/moletomBranco.gif';
        defaultImgSrc = './IMG/moletomBranco.png';
    }
    else if (card.classList.contains('card9')) {
        defaultImg = card.querySelector('.sueterVermelho');
        hoverImgSrc = './IMG/sueterVermelho.gif';
        defaultImgSrc = './IMG/sueterVermelho.png';
    }
    else if (card.classList.contains('card10')) {
        defaultImg = card.querySelector('.plumaVermelha');
        hoverImgSrc = './IMG/plumaVermelha.gif';
        defaultImgSrc = './IMG/plumaVermelha.png';
    }
    else if (card.classList.contains('card11')) {
        defaultImg = card.querySelector('.jeans1');
        hoverImgSrc = './IMG/jeans1.gif';
        defaultImgSrc = './IMG/jeans1.png';
    }
    else if (card.classList.contains('card12')) {
        defaultImg = card.querySelector('.jeans2');
        hoverImgSrc = './IMG/jeans2.gif';
        defaultImgSrc = './IMG/jeans2.png';
    }
    else if (card.classList.contains('card13')) {
        defaultImg = card.querySelector('.jeans3');
        hoverImgSrc = './IMG/jeans3.gif';
        defaultImgSrc = './IMG/jeans3.png';
    }
    else if (card.classList.contains('card14')) {
        defaultImg = card.querySelector('.jeans4');
        hoverImgSrc = './IMG/jeans4.gif';
        defaultImgSrc = './IMG/jeans4.png';
    }
    else if (card.classList.contains('card15')) {
        defaultImg = card.querySelector('.jeans5');
        hoverImgSrc = './IMG/jeans5.gif';
        defaultImgSrc = './IMG/jeans5.png';
    }


    if (defaultImg) {
        console.log(`Adicionando event listeners para ${card.className}`);
        card.addEventListener('mouseover', () => {
            console.log(`Hover sobre ${card.className}: trocando para ${hoverImgSrc}`);
            defaultImg.src = hoverImgSrc;
        });

        card.addEventListener('mouseout', () => {
            console.log(`Mouse out de ${card.className}: trocando para ${defaultImgSrc}`);
            defaultImg.src = defaultImgSrc;
        });
    } else {
        console.error(`Elemento de imagem não encontrado em ${card.className}`);
    }
});


// Variável global para armazenar os itens no carrinho
// Array para armazenar os itens do carrinho
let cartItems = [];

// Função para abrir o carrinho
function openCart() {
    document.querySelector('.cart-sidebar').style.width = '250px';
}

// Função para fechar o carrinho
function closeCart() {
    document.querySelector('.cart-sidebar').style.width = '0';
}

// Função para adicionar item ao carrinho
function addItemToCart(item, event) {
    // Adiciona o item ao array de itens do carrinho
    cartItems.push(item);

    // Atualiza a exibição do carrinho
    updateCartUI();

    // Abre o carrinho automaticamente após adicionar um item
    openCart();

    // Atualiza a contagem de itens no navbar
    updateNavbarCartCount();

    // Impede a propagação do evento para evitar recarregar a página
    event.stopPropagation();
}

// Função para remover item do carrinho
function removeItemFromCart(index) {
    // Remove o item do array de itens do carrinho pelo índice
    cartItems.splice(index, 1);

    // Atualiza a exibição do carrinho
    updateCartUI();

    // Atualiza a contagem de itens no navbar
    updateNavbarCartCount();
}

// Função para cancelar e esvaziar o carrinho
function cancelAndClearCart() {
    cartItems = []; // Esvazia o array de itens do carrinho

    // Atualiza a exibição do carrinho
    updateCartUI();

    // Fecha o carrinho
    closeCart();

    // Atualiza a contagem de itens no navbar
    updateNavbarCartCount();
}

// Função para atualizar a exibição do carrinho
function updateCartUI() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Limpa o conteúdo atual do carrinho
    cartItemsContainer.innerHTML = '';

    // Atualiza a lista de itens do carrinho
    cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <div class="item-details">
                <div class="item-image">
                    <img src="${item.image}" width="50px" alt="${item.name}">
                </div>
                <span class="item-name">${item.name}</span>
                <span class="item-price">R$ ${item.price.toFixed(2)}</span>
            </div>
            <button class="delete-item-btn" onclick="removeItemFromCart(${index})"><img src="./IMG/lixeira.png" width="20px"></button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Calcula e exibe o total do carrinho
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para continuar comprando (ir para outra página HTML)
function continueShopping() {
    window.location.href = 'outra_pagina.html';
}

// Função para cancelar e fechar o carrinho
function cancelAndCloseCart() {
    cancelAndClearCart(); // Chama a função para cancelar e esvaziar o carrinho
}

// Função para atualizar a contagem de itens no navbar
function updateNavbarCartCount() {
    document.getElementById('cart-item-count').textContent = cartItems.length;
}

// Função para mudar a imagem e atualizar o comportamento do clique
function changeImage(imagePath, cartImage) {
    // Altera a imagem principal do card
    document.getElementById('cardImage').src = imagePath;
    
    // Atualiza o comportamento do clique para adicionar o item correto ao carrinho
    document.getElementById('cardImage').setAttribute('onclick', `addItemToCart({ image: '${cartImage}', name: 'Óculos', price: 49.99 }, event)`);
}

// Exemplo de uso para selecionar uma imagem específica
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do botão
        const imageSrc = this.dataset.image; // Obtém o caminho da imagem do atributo 'data-image'
        const cartImageSrc = this.dataset.cartImage; // Obtém o caminho da imagem para o carrinho do atributo 'data-cart-image'
        changeImage(imageSrc, cartImageSrc); // Chama a função para alterar a imagem
    });
});

// Função para mudar a imagem no card e atualizar o item para adicionar ao carrinho
function changeImage(imagePath, cartImage) {
    // Altera a imagem principal do card
    document.getElementById('cardImage').src = imagePath;

    // Atualiza o comportamento do clique para adicionar o item correto ao carrinho
    document.getElementById('cardImage').setAttribute('onclick', `addItemToCart({ image: '${cartImage}', name: 'Óculos', price: 49.99 }, event)`);
}

// Event listeners para os botões de mudança de imagem
document.querySelector('.btn-primary').addEventListener('click', function() {
    changeImage('./IMG/bannerOculosLaranja.png', './IMG/oculosLaranja.png');
});

document.querySelector('.btn-danger').addEventListener('click', function() {
    changeImage('./IMG/bannerOculosAzul.png', './IMG/oculosAzul.png'); // Corrigido o caminho da imagem
});

document.querySelector('.btn-success').addEventListener('click', function() {
    changeImage('./IMG/bannerOculosMarrom.png', './IMG/oculosMarrom.png');
});

document.querySelector('.btn-warning').addEventListener('click', function() {
    changeImage('./IMG/bannerOculosPreto.png', './IMG/oculosPreto.png');
});









