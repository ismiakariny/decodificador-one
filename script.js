var textoEnviado = document.querySelector('#entrada-do-texto');
var textoResultado = document.querySelector('#resultado');
var botaoCriptografar = document.querySelector('#bt-criptografar');
var botaoDescriptografar = document.querySelector('#bt-descriptografar');
var botaoCopiar = document.querySelector('#botao-copiar');
var areaDeSaida = document.querySelector('#mensagem')
var nenhumaMensagem = document.querySelector('#nenhuma-mensagem');

function atualizaAreaDeSaida() {

    if($('#nenhuma-mensagem').not('.invisivel').length) {
        nenhumaMensagem.classList.add('invisivel');        
    }

    if($('#resultado').hasClass('invisivel')) {
        textoResultado.classList.remove('invisivel');
    }

    if($('#botao-copiar').hasClass('invisivel'))
        botaoCopiar.classList.remove('invisivel');    
};

function criptografa(stringParaCriptografar) {
    atualizaAreaDeSaida();

    var matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringParaCriptografar = stringParaCriptografar.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++) {
        if(stringParaCriptografar.includes(matrizCodigo[i][0])){
            stringParaCriptografar = stringParaCriptografar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        };
    };

    return stringParaCriptografar;
};

function btCriptografar() {
    var textoCriptografado = criptografa(textoEnviado.value);
    textoResultado.textContent = textoCriptografado;
};

function descriptografa(stringCriptografada) {
    atualizaAreaDeSaida();

    var matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        };
    };

    return stringCriptografada;
}

function btDescriptografar() {
        var textoDescriptografado = descriptografa(textoEnviado.value);
        textoResultado.textContent = textoDescriptografado;
}

botaoCopiar.addEventListener('click', function(event) {
  textoResultado.select();
  document.execCommand('copy');  
});