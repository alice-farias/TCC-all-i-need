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
    window.location.href = './HTML/checkout.html';
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