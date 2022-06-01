//coleta texto enviado pelo usuário
var textoEnviado = document.getElementById('entrada-do-texto');
var textoColetado = document.getElementById('resultado');

function coletaTexto() {
    textoColetado.textContent = textoEnviado.value;
};

//valida texto antes de processar
var textovalidado = false;

function validaTexto(texto){
    if (texto.length < 0){
    console.log("Você deve inserir um texto");
    } else {
    console.log("Seu texto está validado");
    textoValidado = true;
}

var botaoCriptografar = document.querySelector('#bt-criptografar');
var botaoDescriptografar = document.querySelector('#bt-descriptografar');

botaoCriptografar.addEventListener('click', validaTexto(textoColetado));


botaoDescriptografar.addEventListener('click', function(){
    console.log("Fui clicado para descriptografar");
});