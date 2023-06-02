/*
Oque precisamos fazer?- quando clicarmos no botão de troca de tema temos que alterar a cor do tema da pagina para as cores do tema claro ou do tema escuro

- Objetivo1c- quando clicar no botao de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados  e mudar a imagem pra lua 
-passo1 - pegar no Js o elemento HTML correspondente ao botao de troca de tema 
-passo2 - dar um jeito de pegar o JS o elemento HTML corresponde ao body 
-passo3 - dar um jeito de identificar o clique do usuario no botao de troca de tema 
-passo 4 - adicionar a classe modo-escuro no body
-passo5 - trocar a imagem do botao de alterar tema pra lua

-Objetivo2 - quando clicar no botao de troca de tema, caso o body ja tenha a classe  modo-escuro, remover a classe para mudar pro modo-claro e mudar a imagem pro sol
-passo6 - remover  a classe do modo-escuro do body
-passo7 - trocar a imagem do botao de alterar tema pra sol
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  //body.classList.toggle("modo-escuro") seve para add ou remover o modo-escuro
  if (modoEscuroEstaAtivo) {
    body.classList.remove("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
