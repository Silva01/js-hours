/**
 * Created by DanielSilva on 29/07/17.
 */

///<reference path="horasUtil.ts"/>

class Horas {

    private hora : number;
    private minutos : number;
    private segundos : number;

    constructor(){
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
    }

    public setHorasCompleta(pHora : string) : void {
        let pHoraTmp = pHora.split(":");
        this.hora = parseInt(pHoraTmp[0]);
        this.minutos = parseInt(pHoraTmp[1]);
        this.segundos = parseInt(pHoraTmp[2]);
    }

    public setHora(pHora : number) : void {
        this.hora = pHora * 60;
    }

    public setMinutos(pMinutos : number) : void {
        this.minutos = pMinutos;
    }

    public setSegundos(pSegundos : number) : void {
        if (pSegundos > 59) {
            this.minutos = this.minutos + parseInt(pSegundos / 60);
            this.segundos = pSegundos - (parseInt(pSegundos / 60) * 60);
        } else {
            this.segundos = pSegundos;
        }
    }

    public getHoras() : string {
        let util = new HorasUtil();
        let somaMin = this.hora + this.minutos;
        let hora = 0;

        while (somaMin > 59){
            hora++;
            somaMin -= 60;
        }

        return util.adicionarZerosAEsquerda(hora) + ":"
            + util.adicionarZerosAEsquerda(somaMin) + ":"
            + util.adicionarZerosAEsquerda(this.segundos);
    }

    public getMinutos() : number {
        return this.hora + this.minutos;
    }

    public getSegundos() : number {
        return ((this.hora + this.minutos) * 60) + this.segundos;
    }

    public getMilissegundos() : number {
        return this.getSegundos() * 1000;
    }

    public getMicrossegundos() : number {
        return this.getMilissegundos() * 1000;
    }

    public getNanossegundos() : number {
        return this.getMicrossegundos() * 1000;
    }


}