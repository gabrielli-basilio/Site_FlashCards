function criar_cartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")
    let cartao = document.createElement("article")
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="conteudo">
            <h3>${categoria}</h3>
            <div class="pergunta">
                ${pergunta}
            </div>
            <div class="resposta">
                ${resposta}
            </div>
        </div>
    `

    container.appendChild(cartao)
}

function adicionarCartao() {
    const categoria = prompt("Qual é a categoria?")
    const pergunta = prompt("Digite sua pergunta?")
    const resposta = prompt("Digite qual a resposta?")

    criar_cartao(categoria, pergunta, resposta)
}