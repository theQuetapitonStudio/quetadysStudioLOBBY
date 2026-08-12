let renda = 50
let KCoins = 50
let plebeus_executaveis = 20

let html_config = {
    textos: {
        renda: document.getElementById("rendaTXT"),

        kayrosk_coin: document.getElementById("KCtxt"),

        alerta: document.getElementById("alerta")
    },

    botoes: {
        executar: document.getElementById("executar"),

        vantagens: document.getElementById("upgrades"),

        vantagens_div: {
            botoes: {
                c30plebeus: document.getElementById("30plebeusBTN"),
                a10kc: document.getElementById("10KCbtn"),
                TMbtn: document.getElementById("triploMoneyBTN")
            }
        }
    },

    divs: {
        vantagens: document.getElementById("vantagensDiv"),
        pagamento: {
            triploMoney: document.getElementById("pagamento-triploMoney")
        }
    }
}

let sounds = {
    execucao: new Audio("sounds/execucao.wav")
}

// gui PARTE 1

html_config.botoes.vantagens.addEventListener("click", () => {
    if (html_config.divs.vantagens.style.display=="block") {
        html_config.divs.vantagens.style.display = "none"
    } else {
        html_config.divs.vantagens.style.display = "block"
    }
})

html_config.botoes.executar.addEventListener("click", () => {
    if (plebeus_executaveis > 0) {

        renda += (Math.round(plebeus_executaveis/2.5))

        plebeus_executaveis -= (Math.round(plebeus_executaveis/2.5))
        sounds.execucao.playbackRate = 2.5
        sounds.execucao.play()
    } else {
        html_config.textos.alerta.innerText = "Você precisa de plebeus para executar!"
        setTimeout(() => {
            html_config.textos.alerta.innerText = ""
        }, 2000)
    }
})

// gui PARTE 2

html_config.botoes.vantagens_div.botoes.c30plebeus.addEventListener("click", () => {
    if (KCoins >= 50) {
        plebeus_executaveis+=30
        KCoins-=50
    }
})

html_config.botoes.vantagens_div.botoes.a10kc.addEventListener("click", () => {
    if (renda >= 70) {
        KCoins+=10
    }
})

// pagamento system

html_config.botoes.vantagens_div.botoes.TMbtn.addEventListener("click", () => {
    if (html_config.divs.pagamento.triploMoney.style.display == "none") {
        html_config.divs.pagamento.triploMoney.style.display = "block"
    }
})

document.getElementsByClassName("closeBTN")[0].addEventListener("click", () => {
    html_config.divs.pagamento.triploMoney.style.display = "none"
})

function update() {

    // textos update
    html_config.textos.renda.innerText = `Renda: ${renda} USD`
    html_config.textos.kayrosk_coin.innerText = `Kayrosk Coins: ${KCoins} KC`

    // botoes update

    html_config.botoes.executar.innerText = `Execução de plebeus [${plebeus_executaveis}]`

    // botoes pt2

    html_config.botoes.vantagens_div.botoes.c30plebeus.innerText = `30 plebeus [50 Kayrosk Coins]`
    html_config.botoes.vantagens_div.botoes.a10kc.innerText = `10 Kayrosk Coins [60 RENDA]`

    requestAnimationFrame(update)
}

update()