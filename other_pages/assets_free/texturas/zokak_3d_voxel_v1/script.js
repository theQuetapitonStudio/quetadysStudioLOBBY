const botao = document.getElementById("comprar");
const status = document.getElementById("status");


botao.onclick = async function () {

    status.innerHTML = "Criando pagamento...";


    try {

        const resposta = await fetch(
            "https://pllvmllynuygyuvldeab.supabase.co/functions/v1/criar-pagamento",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    jogo_id: 23
                })
            }
        );


        const dados = await resposta.json();


        console.log("Resposta do servidor:", dados);



        if (dados.pagamento) {


            status.innerHTML = `

            <h2>Pagamento criado!</h2>


            <p>
            Jogo:
            <b>
            ${dados.jogo.nome}
            </b>
            </p>


            <p>
            Valor:
            <b>
            ${dados.jogo.preco} ${dados.jogo.moeda}
            </b>
            </p>


            <p>
            Envie:
            <b>
            ${dados.pagamento.pay_amount}
            ${dados.pagamento.pay_currency}
            </b>
            </p>


            <p>
            Carteira:
            </p>


            <textarea readonly>
${dados.pagamento.pay_address}
            </textarea>

            `;


        } else {


            status.innerHTML = `
            Erro criando pagamento:
            <br>
            ${dados.erro || "Erro desconhecido"}
            `;


        }


    } catch (e) {


        console.error(e);


        status.innerHTML =
        "Erro de conexão";


    }

};
console.log("a")
