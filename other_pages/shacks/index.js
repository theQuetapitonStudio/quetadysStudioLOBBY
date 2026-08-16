let imgs = document.getElementsByTagName("img");

let angulo = 20;
let inicio = performance.now();
let duracao = 200;

function update(tempo) {
    let t = (tempo - inicio) % (duracao * 2);
    let rotacao = t < duracao ? angulo : -angulo;

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.transform = `rotate(${rotacao}deg)`;
    }

    requestAnimationFrame(update);
}

requestAnimationFrame(update);

let cookie_clickerDiv = document.getElementById("cookie_clicker_div")

cookie_clickerDiv.addEventListener("click", ()=> {
    window.location.href = "cookie_clicker/"
})