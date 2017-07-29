/**
 * Created by DanielSilva on 28/07/17.
 */

///<reference path="constantes.ts"/>

class Hora {
    constructor(){}

    public diferenca(horaInicial : number, horaFinal : number, tipo : string) : string {
        if (tipo == FORMATO_HORA){
            let diferenca = horaFinal - horaInicial;
            return this.converterMinutosParaHora(diferenca);
        } else if (tipo == FORMATO_MINUTOS){
            return String((horaFinal - horaInicial));
        } else if (tipo == FORMATO_SEGUNDOS){
            let diferenca = horaFinal - horaInicial;
            return String((diferenca * 60));
        } else if (tipo == FORMATO_MILISSEGUNDOS){
            let diferenca = (horaFinal - horaInicial) * 60;
            return String((diferenca * 60));
        }
    }

    public converterMinutosParaHora(minutos : number) : string {
        let hora = 0;
        let minutosTmp = minutos;

        while (minutosTmp > 59){
            hora++;
            minutosTmp = minutosTmp - 60;
        }

        return this.adicionarZerosAEsquerda(hora) + ":" + this.adicionarZerosAEsquerda(minutosTmp);

    }

    private adicionarZerosAEsquerda(valor : number) : string {
        let tamanho = String(valor).length;
        return String(tamanho).length == 1 ? "0" + String(valor) : String(valor);
    }
}