// ativa modo sem conflitos JQuery
let $j = jQuery.noConflict();

// carregamento jquery
$j(document).ready(()=>{
    //variaveis
    let flgInicia = false;
    let dtaNasc, dtaEvento, dtaEventoTms, dtaEvAniTms, dtaTemp;
    let tempoAtual;

    // funcionamentos
    let validaFormulario = function(e){
        try {
            // para evento
            e.preventDefault();
            // validacao
            if (e.target.checkValidity()) {
                // adiciona classes
                e.target.classList.add('was-validated');
                // pega o campo input
                const campo = $j('#id-data');
                dtaNasc = campo.val();
                // dia atual
                const dtaHoje = new Date();
                // inicia variaveis
                dtaEvento = new Date(dtaNasc);
                dtaEventoTms = dtaEvento.getTime();
                dtaTemp = dtaEventoTms
                // data do proximo aniversario
                let anos = dtaHoje.getFullYear() - dtaEvento.getFullYear()
                dtaEvento.setFullYear(dtaEvento.getFullYear() + anos);
                // tratamento
                if (dtaHoje.getTime() > dtaEvento.getTime()) {
                    dtaEvento.setFullYear(dtaEvento.getFullYear() + 1);
                }
                dtaEvAniTms = dtaEvento.getTime();
                dtaEventoTms = dtaTemp;
                // inicia cronometro
                flgInicia = true;
            }
            else{
                // para execucao
                e.stopPropagation();
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // comportamentos
    let contaTempo = function(){
        try {
            // calculo da idade
            contaIdade();
            // calcula data ate aniversario
            contaAniversario();
        } catch (error) {
            console.log(error.message);
        }
    }

    let contaIdade = function(){
        try {
            // data atual
            const agora = new Date();
            const dtaAtualTms = agora.getTime();
            // tempo ate o evento principal
            const tempoAteEvento = dtaAtualTms - dtaEventoTms;
            // conversao tempo
            const minutoEmMs = 1000 * 60;
            const horaEmMs = minutoEmMs * 60;
            const diaEmMs = horaEmMs * 24;
            const mesEmMs = diaEmMs * 30;
            const anoEmMs = diaEmMs * 365;
            // calculo
            const tempoAnos = Math.floor(tempoAteEvento / anoEmMs);
            const tempoMeses = Math.floor((tempoAteEvento % anoEmMs) / mesEmMs);
            const tempoDias = Math.floor((tempoAteEvento % mesEmMs) / diaEmMs);
            const tempoHoras = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
            const tempoMinutos = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs);
            const tempoSegundos = Math.floor((tempoAteEvento % minutoEmMs) / 1000);
            // exibicao
            let mensagem = (tempoAnos + 'a ' + tempoMeses + 'M '+ tempoDias + 'd ' + tempoHoras + 'h ' + tempoMinutos + 'm ' + tempoSegundos + 's');
            $j('#id-idade').text(mensagem);
        } catch (error) {
            console.log(error.message);
        }
    }

    let contaAniversario = function(){
        try {
            // data atual
            const agora = new Date();
            const dtaAtualTms = agora.getTime();
            // tempo ate o evento principal
            const tempoAteEvento = dtaEvAniTms - dtaAtualTms;
            // conversao tempo
            const minutoEmMs = 1000 * 60;
            const horaEmMs = minutoEmMs * 60;
            const diaEmMs = horaEmMs * 24;
            const mesEmMs = diaEmMs * 30;
            const anoEmMs = diaEmMs * 365;
            // calculo
            const tempoAnos = Math.floor(tempoAteEvento / anoEmMs);
            const tempoMeses = Math.floor((tempoAteEvento % anoEmMs) / mesEmMs);
            const tempoDias = Math.floor((tempoAteEvento % mesEmMs) / diaEmMs);
            const tempoHoras = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
            const tempoMinutos = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs);
            const tempoSegundos = Math.floor((tempoAteEvento % minutoEmMs) / 1000);
            // exibicao
            let mensagem = (tempoAnos + 'a ' + tempoMeses + 'M '+ tempoDias + 'd ' + tempoHoras + 'h ' + tempoMinutos + 'm ' + tempoSegundos + 's');
            $j('#id-tmp-aniversario').text(mensagem);
            // validacao p/ encerrar
            if (tempoAteEvento <= 0) {
                clearInterval(tempoAtual);
                // reseta
                $j('#id-tmp-aniversario').text("Feliz aniversário!");
                $j('#id-idade').text("Feliz aniversário!");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // acoes
    tempoAtual = setInterval(contaTempo, 1000);

    // eventos
    $j('#id-form').on('submit', validaFormulario);
});