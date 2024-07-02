document.addEventListener('DOMContentLoaded', function () {
    const caixaMensagens = document.getElementById('caixa-mensagens');
    const entradaUsuario = document.getElementById('entrada-usuario');
    const botaoEnviar = document.getElementById('botao-enviar');
    const containerChat = document.getElementById('container-chat');

    const respostas = {
        1: "Para informações sobre devoluções e cancelamentos, estamos aqui para ajudar! Geralmente, aceitamos devoluções dentro de 7 dias a partir da data de compra. Para cancelamentos de pedidos, recomendamos entrar em contato o mais breve possível, tentaremos atender sua solicitação antes do envio. Se precisar de assistência personalizada ou tiver dúvidas específicas, não hesite em nos contatar diretamente. Estamos comprometidos em garantir sua satisfação com nossa política de devolução e cancelamento.",

        2: "Em nosso brechó, oferecemos uma seleção única de roupas de qualidade pré-amadas a preços acessíveis. Nossos itens passam por uma cuidadosa seleção para garantir que estejam em ótimo estado. Se você está interessado em vender roupas conosco, aceitamos peças bem conservadas que estejam na moda e em boas condições. Para mais informações sobre o processo de venda ou para marcar uma avaliação de suas peças, entre em contato conosco no número (11) 97070-7070. Estamos sempre buscando novas adições para nosso estoque e ficaremos felizes em discutir como podemos trabalhar juntos.",

        3: "Para qualquer questão relacionada a saques ou se precisar de atendimento humano, estamos à disposição para ajudar! Você pode entrar em contato conosco pelo número (11) 97070-7070, onde nossa equipe terá prazer em auxiliar com suas necessidades específicas. Estamos comprometidos em fornecer suporte personalizado e resolver qualquer dúvida ou problema que você possa ter. Aguardamos seu contato!",
    };

    function adicionarMensagem(conteudo, classe) {
        const mensagem = document.createElement('div');
        mensagem.textContent = conteudo;
        mensagem.className = `mensagem ${classe}`;
        caixaMensagens.appendChild(mensagem);
        caixaMensagens.scrollTop = caixaMensagens.scrollHeight;
    }

    function obterRespostaBot(pergunta) {
        const numero = parseInt(pergunta);
        if (!isNaN(numero) && respostas[numero]) {
            return respostas[numero];
        } else {
            return "Não entendi a opção. Escolha 1, 2 ou 3.";
        }
    }

    botaoEnviar.addEventListener('click', function () {
        const textoUsuario = entradaUsuario.value;
        if (textoUsuario) {
            adicionarMensagem(textoUsuario, 'usuario');
            const respostaBot = obterRespostaBot(textoUsuario);
            adicionarMensagem(respostaBot, 'bot');
            entradaUsuario.value = '';
        }
    });

    entradaUsuario.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            botaoEnviar.click();
        }
    });


    function adicionarMensagem(mensagem, tipo) {

        const chat = document.getElementById('caixa-mensagens');
        const mensagemElemento = document.createElement('div');
        mensagemElemento.className = `mensagem ${tipo}`;
        mensagemElemento.textContent = mensagem; // Utiliza textContent para adicionar texto
        chat.appendChild(mensagemElemento);
    }


    adicionarMensagem(`Olá! O que deseja falar sobre? \n

1. Devolução e cancelamento. \n

2. Revenda suas roupas e dê a elas um novo ciclo de vida. \n

3. Fale com o SAC ou com um atendente.`, 'bot');

    
    alternarChat();
});

function alternarChat() {
    const containerChat = document.getElementById('container-chat');
    containerChat.style.display = containerChat.style.display === 'none' ? 'flex' : 'none';
}

// story
