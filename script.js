//Seleciona o parágrafo e o botão usando getElementById
const meuParagrafo = document.getElementById('texto'); //no documento html, pegue o elemento que tem o id 'texto'.

const MeuBotao = document.getElementById('meuBotao'); //no documeno hmtl, pegue o elemento que tem o id 'MeuBotao'

//Define a função que alterna o conteúdo do pararáfo
function alternarTexto() {
    //textContend altera o conteúdo e texto de algum elemento html
    meuParagrafo.textContent = 'O texto foi alterado!';

}

//Adicione um event listener ao botão para escutar o clique 
MeuBotao.addEventListener('dblclick', alternarTexto)   

/*
click: Ocorre quando o elemento é clicado.
dblclick: Ocorre quando o elemeno é clicado duas vezes.
mousedown: Ocorre quando o botão do mouse é pressionado.
mouseup: Ocorre quando o botão do mouse é solto.
mouseover: Ocorre quando o cursor do mouse passa sobre o elemento.
mouseout: Ocorre quando o cursor do mouse sai de cima do elemento.
mousemove: Ocorre quando o mouse é movido dentro do elemento.
*/

//Execício 1: adicione outro botão que mude a cor do paragráfo. DICA: use meuParágrafo.style.color = 'red' para poder alterar a cor de um elemento.

//Exercício 2: adicione outro botão que muda a cor de fundo dele mesmo quando clicado duas vezes.

//Exercício 3: Altere a função 'alternarTexto' para que, toda vez que clicar, o texto alterna entre 'Clique Aqui' e 'O texto foi alterado!'. DICA: você vai ter que usar if e else para isso. 

const botaoo = document.getElementById('textoo')
const palavras = document.getElementById('textoo')

function alterarCor(){
palavras.style.color = 'deeppink';
} 

function adicionarBotao(){
botaoo.style.backgroundcolor = 'hotpink';
}
