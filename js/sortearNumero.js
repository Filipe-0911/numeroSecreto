const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor);

const elementoMenorValor = document.getElementById(`menor-valor`);
const elementoMaiorValor = document.getElementById(`maior-valor`);

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

console.log(`O número secreto é ${numeroSecreto}`);

