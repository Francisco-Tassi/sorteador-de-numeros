function sortear(){
    if(document.getElementById("btn-sortear").classList.contains("container__botao")) {
        let quantidade = parseInt(document.getElementById("quantidade").value);
        let de = parseInt(document.getElementById("de").value);
        let ate = parseInt(document.getElementById("ate").value);

        if(ate >= (de + quantidade - 1)){
            let sorteados = [];
            let numero;
    
            for(let i = 0; i < quantidade; i++) {
                numero = numeroAleatorio(de, ate);
                while(sorteados.includes(numero)){
                    numero = numeroAleatorio(de, ate);
                }
                sorteados.push(numero);
            }
    
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
            alterarBotao("btn-reiniciar");
            alterarBotao("btn-sortear");
        } else {
            alert("Verifique os valores inseridos");
        }
    }
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotao(id) {
    let botao = document.getElementById(id);
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    if(document.getElementById("btn-reiniciar").classList.contains("container__botao")) {
        document.getElementById("quantidade").value = "";
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";
        document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
        alterarBotao("btn-reiniciar");
        alterarBotao("btn-sortear");
    }
}
