document.addEventListener('DOMContentLoaded', function () {
    const caixaMensagens = document.getElementById('caixa-mensagens');
    const entradaUsuario = document.getElementById('entrada-usuario');
    const botaoEnviar = document.getElementById('botao-enviar');
    const containerChat = document.getElementById('container-chat');

    const respostas = {
        1: "Resposta para a opção 1",
        2: "Resposta para a opção 2",
        3: "Resposta para a opção 3",
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

   // Mostrar mensagem automática ao abrir o chat
    adicionarMensagem("Olá! O que deseja falar sobre? \n 1. Devolução e Cancelamento \n 2. Revenda suas roupas e dê a elas um novo ciclo de vida \n 3. Fale com o SAC ou com um atendente.", 'bot');

    
    // Abrir o chat ao carregar a página
    alternarChat();
});

function alternarChat() {
    const containerChat = document.getElementById('container-chat');
    containerChat.style.display = containerChat.style.display === 'none' ? 'flex' : 'none';
}