//referencias

const div_lista_imagens = document.getElementById("lista-imagens")
const div_imagem = document.getElementById("imagem")

//modificando array pra incluir o caminho das imagens

minhas_imagens.forEach(
    (ele) => {
        ele.caminho = 'imagens/numero_' + ele.valor + '.png';
    }

)

const cartao = ( clicada ) => {
    const container = document.createElement("div");
    const imagem = document.createElement("img");
    const legenda = document.createElement("h5")

    imagem.src = clicada.src;
    imagem.width = 200;

    legenda.innerHTML = clicada.alt;

    container.appendChild(imagem);
    container.appendChild(legenda);

    div_imagem.appendChild(container);
} 

// manipulando evento

const manipula_evento = ( evento ) => {
    const imagem_clicada = evento.target;
    div_imagem.innerHTML = "";
    cartao(imagem_clicada);
}

const criar_imagens = (entrada) => {
    entrada.forEach(
        ( ele ) => {
            const imagem_numero = document.createElement("img")
            imagem_numero.src = ele.caminho;
            imagem_numero.width = 100;
            imagem_numero.className = "imagem_da_lista";
            imagem_numero.alt = ele.descrição
            imagem_numero.onclick = manipula_evento;

            div_lista_imagens.appendChild(imagem_numero);
        }
    )
}

criar_imagens(minhas_imagens);