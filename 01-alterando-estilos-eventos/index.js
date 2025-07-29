/* 
    Objetivo do exercício: ao clicar no botão o fundo do quadrado azul deve trocar para a cor amarela

        Passo 1 - Pegar o elemento do botão aqui no JS
    
        Passo 2 - Pegar o elemento do quadrado azul aqui no JS

        Passo 3 - Quando o usuário clicar no botão precisamos disparar a ação de mudar a cor do fundo do quadrado azul

        Passo 4 - Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem
*/

// Passo 1 - Pegar o elemento do botão aqui no JS
const btnTrocarCor = document.getElementById("btn-trocar-cor");
// Passo 2 - Pegar o elemento do quadrado azul aqui no JS
const quadradoAzul = document.querySelector(".azul");
// Passo 3 - Quando o usuário clicar no botão precisamos disparar a ação de mudar a cor do fundo do quadrado azul
btnTrocarCor.addEventListener("click", trocarCor);
// Passo 4 - Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem
function trocarCor() {
    quadradoAzul.classList.remove("azul");
    quadradoAzul.classList.add("amarelo");
    //
}