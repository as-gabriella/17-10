// Seleciona o parágrafo e o botão usando getElementByID

const meuParagrafo = document.getElementById('texto'); // no documento html, pegue o elemento que tem o ID 'texto'

const meuuuBotaoo = document.getElementById('meuuBotaoo'); // no documento html, pegue o elemento que tem o ID 'Meubotao'

const Botao22 = document.getElementById('Botao22'); 

const Botaoaa = document.getElementById('Botaoaa'); 

const flor = document.getElementById('botao4')


// Defina a função que alterna o conterna o contéudo do parágrafo
function alterarTexto(){

    //textoContent altera o conteudo de texto de algum elemento html
    
    if(meuParagrafo.textContent === 'Clique no botão para mudar esse texto'){
      meuParagrafo.textContent = 'O texto foi alterado!'; 

    } else { 
     meuParagrafo.textContent = 'Clique no botão para mudar esse texto'   
    }


}


function abc(){
    meuParagrafo.style.color = 'hotpink' ;
}

function dfe(){
    
    Botaoaa.style.backgroundColor = 'deeppink' ;
}




// adiciona um event listener ao botão para escutar o clique

meuuuBotaoo.addEventListener('click',alterarTexto);

Botao22.addEventListener('click',abc);

Botaoaa.addEventListener('click', dfe);

function flor(){
  Botaoaa.style.backgroundColor = 'pink'
}

Botao22.addEventListener('click',flor);

function florzinha(){
if(foto.style.display === 'none'){
foto.style.display = 'block';
} else {
    foto.style.display = 'none';
}
}

botao4.addEventListener('click',florzinha);
