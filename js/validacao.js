const divVerificacao = document.createElement(`div`);

function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        if(chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += `<div>Valor inválido. Você deve falar um número</div>`
        }
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML = `Fale um número entre ${menorValor} e ${maiorValor}.`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Você acertou! Parabens!</h2>
                                 <h3>O número secreto era ${numeroSecreto}.</h3>
                                 <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`
        recognition.onspeechend();

    } else if (numero > numeroSecreto) {

        elementoChute.innerHTML += `<div>O número secreto é menor 
        <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior 
        <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

recognition.addEventListener(`end`, () => recognition.start());

document.body.addEventListener(`click`, e => {
    if (e.target.id == `jogar-novamente`) {
        window.location.reload();
    }
})

recognition.onspeechend = () => {
    recognition.stop();
  };
  