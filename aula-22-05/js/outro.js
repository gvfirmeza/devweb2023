
const elemento = document.createElement('p');
elemento.innerHTML = document.cookie;

document.getElementsByTagName("body")[0].appendChild(elemento);

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split('; ');
    const procurado = lista_de_cookies.find((e) => e.startsWith(chave)).split("=")[1];
    return procurado.split("=")[1];
}
