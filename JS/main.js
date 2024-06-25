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




// footer

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        document.getElementById('message').textContent = "Agradecemos a inscrição!";
        document.getElementById('message').style.color = "#0f0";
        document.getElementById('email').value = "";
    } else {
        document.getElementById('message').textContent = "Esse e-mail não é válido. Tente novamente!";
        document.getElementById('message').style.color = "#f00";
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


// sesssão sustentável

// JavaScript para qualquer animação adicional
document.addEventListener('DOMContentLoaded', function() {
    // Animação ao rolar a página
    const cards = document.querySelectorAll('.card');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkScroll() {
        cards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('in-view');
            } else {
                card.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});


// loopa

document.addEventListener("DOMContentLoaded", function () {
    var productImage = document.getElementById('product-image');
    var zoomLens = document.getElementById('zoom-lens');
  
    productImage.addEventListener('mousemove', function (e) {
      var boundingRect = productImage.getBoundingClientRect();
      var offsetX = e.clientX - boundingRect.left;
      var offsetY = e.clientY - boundingRect.top;
  
      var lensSize = 200; // Tamanho da lente
      var imageWidth = productImage.offsetWidth;
      var imageHeight = productImage.offsetHeight;
      var ratioX = productImage.naturalWidth / imageWidth;
      var ratioY = productImage.naturalHeight / imageHeight;
  
      var lensX = offsetX - lensSize / 2;
      var lensY = offsetY - lensSize / 2;
  
      if (lensX < 0) lensX = 0;
      if (lensY < 0) lensY = 0;
      if (lensX > imageWidth - lensSize) lensX = imageWidth - lensSize;
      if (lensY > imageHeight - lensSize) lensY = imageHeight - lensSize;
  
      zoomLens.style.backgroundImage = 'url(' + productImage.src + ')';
      zoomLens.style.backgroundSize = (productImage.width * ratioX) + 'px ' + (productImage.height * ratioY) + 'px';
      zoomLens.style.backgroundPosition = (-lensX * ratioX) + 'px ' + (-lensY * ratioY) + 'px';
      zoomLens.style.left = (offsetX - lensSize / 2) + 'px';
      zoomLens.style.top = (offsetY - lensSize / 2) + 'px';
      zoomLens.style.display = 'block';
    });
  
    productImage.addEventListener('mouseleave', function () {
      zoomLens.style.display = 'none';
    });
  });
  















