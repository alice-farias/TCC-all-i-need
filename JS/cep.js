const cep = document.querySelector("#cep")
const endereco = document.querySelector("#endereco")
const bairro = document.querySelector("#bairro")
const cidade = document.querySelector("#cidade")
const mensagem = document.querySelector("#mensagem")

cep.addEventListener('focusout', async () => {
    try {
        const apenasNumeros = /^[0-9]+$/;
        const validacaoCep = /^[0-9]{8}$/;

        if (!apenasNumeros.test(cep.value) || !validacaoCep.test(cep.value)) {
            throw { cep_error: 'Cep inválido' };
        }

        const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

        if (!response.ok) {
            throw await response.json()
        }

        const responseCep = await response.json();

        endereco.value = responseCep.logradouro;
        bairro.value = responseCep.bairro;
        cidade.value = responseCep.localidade;

    } catch (error) {
        if (error?.cep_error) {
            mensagem.textContent = error.cep_error;
            setTimeout(() => {
                mensagem.textContent = "";
            }, 4000);
        }
    }
})
