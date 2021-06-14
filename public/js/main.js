$(".frase");
function atualizaTamanhoFrase() {
var frase = $(".frase").text();
var numPalavras = frase.split(" ") .length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);
}
var campo = $(".campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();
$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
   });
   
function inicializaContadores() {
campo.on("input", function() {

var conteudo = campo.val();

var qtdPalavras = conteudo.split(/\S+/).length - 1;
$("#contador-palavras").text(qtdPalavras) .text(qtdCaracteres);
var conteudoSemEspaco = conteudo.replace(/\s+/g,'');

var qtdCaracteres = conteudoSemEspaco.length;
 $('#contador-caracteres').text(qtdCaracteres);
});
}

function inicializaCronometro() {
 var tempoRestante = $("#tempo-digitacao").text();
 campo.one("focus", function() {
    var cronometroID = setInterval(function() {
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID);
            }

        }, 1000);
   });
}

   
$("#botao-reiniciar").click(reiniciaJogo);
$("#botao-reiniciar").click(function(){
});
 function reiniciaJogo(){

 campo.attr("disabled", false);
 campo.val("");
 $("#contador-palavras").text("0");
 $("#contador-caracteres").text("0");
 $("#tempo-digitacao").text(tempoInicial); 
 inicializaCronometro(); 
 }