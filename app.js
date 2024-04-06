// // Metodo antigo, usado raramente hoje em dia, ocupa linha de codigo
// let titulo = document.querySelector('h1'); // a variavel titulo vai receber um registro de um objeto direto do documento HTML.
// titulo.innerHTML= 'Jogo do numero Secreto'; // O objeto registrado no titulo receberá essa String escrita

// // let paragrafo = document.querySelector('P');
// // paragrafo.innerHTML = 'Escolha um numero de 1 à 10';

// Função com parametros//

function ExibirNaTela(tag, texto) { // Os parametros nos parenteses ajuda a reutilizar funções, ou seja, faz reaproveitamento para não dar muita linha de codigo, o h1 é substituido por tag e a frase por texto, onde aplica os metodos dentro das funções.
    let campo =document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate:1.2});
}
//função com parametros//

ExibirNaTela('h1', 'Jogo do numero Secreto'); // H1 subtituido por "tag" e a frase por "texto"
ExibirNaTela('p', 'Escolha um numero de 0 à 10.') // Mesma coisa do que de cima 

let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativa = 0;
let palavratentativa = tentativa > 1 ? 'tentativa' : 'tentativas' ; // se a variavel tentativa vai receber tentativas se não for, vai receber tentativa, no plural.


//Funções sem parametros//
function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativa++;
    if (chute == numeroSecreto) {
        ExibirNaTela('h1', `Parabens, você acertou o numero Secreto.`);
        ExibirNaTela('p', `Você acertou o numero secreto com ${tentativa} ${palavratentativa}  `);
        document.getElementById('reiniciar').removeAttribute('disabled'); // se o chute foi igual ao numero secreto, a atribuição será removida do reinicar, tendo a opção de desabilitar novamente.
        
    } else {
        if (chute < numeroSecreto) {
            ExibirNaTela('p' , `Seu numero secreto é maior que o ${chute}`);
        } else {
            if (chute > numeroSecreto) {
            ExibirNaTela('p' , `Seu numero secreto é menor que o ${chute}`);
            } 
        }
    }
    limparDados()
}
//Função sem parametros//

function limparDados() {
    chute = document.querySelector('input');
    chute.value = "";
}
function Reiniciar() {
    numeroSecreto = GerarNumeroAleatorio();
    MensagemInicial();
    tentativa = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true); // o botão reiniciar vai se desabilitar.
}
function MensagemInicial() {
    ExibirNaTela('h1', 'Jogo do numero Secreto');
    ExibirNaTela('p', 'Escolha um numero de 1 à 10.');
}
    
//Função com return//

function GerarNumeroAleatorio() {  // Gerar um numero aleatorio usando expressões numericas
     let numeroEscolhido = parseInt(Math.random() * numeroLimite );
     let contadorDeLista = listadeNumerosSorteados.length;
     if (contadorDeLista == numeroLimite) {
        listadeNumerosSorteados = [];
     }
     if (listadeNumerosSorteados.includes(numeroEscolhido)) {
        return GerarNumeroAleatorio;
     } else {
        listadeNumerosSorteados.push(numeroEscolhido);
        console.log(listadeNumerosSorteados)
        return numeroEscolhido;
     }
}
// função com return //