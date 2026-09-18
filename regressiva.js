const regressiva = document.querySelector('h1')

let contador = 10 

const regressivaContador = setInterval(() => {

    regressiva.innerText = contador

    contador--

    if (contador < 0) {
        clearInterval(regressivaContador)

        regressiva.innerText = "BOOOOOOOOOOOOOOOOOOOOMMMMMMMMMMMM"
    }

}, 1000);