// Modo Noturno
const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

if (inputCheck && elemento) {
    inputCheck.addEventListener('click', () => {
        const modo = inputCheck.checked ? 'dark' : 'light';
        elemento.setAttribute("data-bs-theme", modo);
    });
}

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
const cards = document.querySelectorAll('.card0, .card1, .card2, .card3');

cards.forEach(card => {
    let defaultImg, hoverImgSrc, defaultImgSrc;

    if (card.classList.contains('card0')) {
        defaultImg = card.querySelector('.default-img');
        hoverImgSrc = './IMG/hover-img.gif';
        defaultImgSrc = './IMG/default-img.png';
    } else if (card.classList.contains('card1')) {
        defaultImg = card.querySelector('.jaquetaPreta');
        hoverImgSrc = './IMG/jaquetaPreta.gif';
        defaultImgSrc = './IMG/jaquetaPreta.jpg';
    } else if (card.classList.contains('card2')) {
        defaultImg = card.querySelector('.camisaPreta');
        hoverImgSrc = './IMG/camisaPreta.gif';
        defaultImgSrc = './IMG/camisaPreta.png';
    } else if (card.classList.contains('card3')) {
        defaultImg = card.querySelector('.camisa');
        hoverImgSrc = './IMG/camisa.gif';
        defaultImgSrc = './IMG/camisa.png';
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
