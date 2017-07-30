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

    public isWithinRange(rangeInicial : Horas, rangeFinal : Horas, hora : Horas) : boolean {
        if (rangeFinal.getMinutos() > rangeInicial.getMinutos()){
            return (hora.getMinutos() >= rangeInicial.getMinutos() && hora.getMinutos() <= rangeFinal.getMinutos());
        } else {
            return (hora.getMinutos() <= rangeFinal.getMinutos() && hora.getMinutos() <= rangeInicial.getMinutos()
            || (hora.getMinutos() == rangeInicial.getMinutos() || hora.getMinutos() == rangeFinal.getMinutos()));
        }
    }

    public somarHoras(hora1 : Horas, hora2 : Horas) : number {
        return hora1.getMinutos() + hora2.getMinutos();
    }
}