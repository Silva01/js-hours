/**
 * Created by DanielSilva on 29/07/17.
 */

///<reference path="horas.ts"/>

class HorasCalc {

    constructor(){}

    public diferenca( horaInicial : Horas, horaFim : Horas ) : number {
        let result = horaInicial.getMinutos() - horaFim.getMinutos();
        return result < 0 ? result * (-1) : result;
    }
}