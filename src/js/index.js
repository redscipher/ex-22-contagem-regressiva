//variaveis
let flgJQuery = false, flgBoot = false;
let dtaNasc;

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
                // exibicao
                alert(dtaNasc);
                // redireciona para a página especificada
                setInterval(()=>{
                    window.location.href = './html/contador.html';
                }, 1000)
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

// == eventos validadcao
// DOM
document.addEventListener('DOMContentLoaded', inicializaBootstrap);
// JQuery
$j(document).ready(inicializaJQuery);
// eventos
$j('#id-form').on('submit', validaFormulario);



