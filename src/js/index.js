//variaveis
let flgJQuery = false, flgBoot = false, flgInicia = false;
let dtaNasc, dtaEvento, dtaEventoTms;
let tempoAtual;

// ativa modo sem conflitos JQuery
let $j = jQuery.noConflict();

//funcoes inicializacao
let inicializaJQuery = function(){
    try {
        //exibe mensagem
        console.log('JQuery: pronto.');
        /////////////////
        flgJQuery = true;
    } catch (error) {
        flgJQuery = false;
        console.log(error.message);
    }
}

let inicializaBootstrap = function(){
    try {
        //exibe mensagem
        console.log('Bootstrap: pronto.');
        ///////////////
        flgBoot = true;
    } catch (error) {
        flgBoot = false;
        console.log(error.message);
    }
}

// funcionamentos
let validaFormulario = function(e){
    try {
        // validacao
        if (flgJQuery && flgBoot) {
            // para evento
            e.preventDefault();
            // validacao
            if (e.target.checkValidity()) {
                // adiciona classes
                e.target.classList.add('was-validated');
                // pega o campo input
                const campo = $j('#id-data');
                dtaNasc = campo.val();
                // inicia cronometro
                flgInicia = true;
            }
            else{
                // para execucao
                e.stopPropagation();
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

// comportamentos
let contaTempo = function(){
    try {
        // validacao
        if (flgBoot && flgJQuery && flgInicia) {
            // data atual
            const agora = new Date();
            const dtaAtualTms = agora.getTime();
            // tempo ate o evento principal
            const tempoAteEvento = dtaEventoTms - dtaAtualTms;
            // conversao dos tempos
            const segundoEmMs = 1000;
            const minutoEmMs = segundoEmMs * 60;
            const horaEmMs = minutoEmMs * 60;
            const diaEmMs = horaEmMs * 24;
            const mesEmMs = diaEmMs * 30;
            const anoEmMs = mesEmMs * 12;
            // calculo
            const tempoSegundos = Math.floor(tempoAteEvento / 1000);
            console.log('segundos: ' + tempoSegundos);
            // exibicao
            // const mensagem = (tempoDias + 'd ' + tempoHoras + 'h ' + tempoMinutos + 'm ' + tempoSegundos + 's');
            // $j('#id-contador').innerHTML = mensagem;
        }
    } catch (error) {
        console.log(error.message);
    }
}

// acoes
tempoAtual = setInterval(contaTempo, 1000);

// == eventos validadcao
// DOM
document.addEventListener('DOMContentLoaded', inicializaBootstrap);
// JQuery
$j(document).ready(inicializaJQuery);
// eventos
$j('#id-form').on('submit', validaFormulario);



