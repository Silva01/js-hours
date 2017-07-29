/**
 * Created by danielgs on 27/07/2017.
 */

///<reference path="../../typings/index.d.ts"/>
///<reference path="../../src/hora.ts"/>
///<reference path="../../src/constantes.ts"/>

describe('Diferença entre horas', () => {


    it('Deverá retornar a diferença entre 01:00 e 02:00 que é de 01:00 hora', () => {
        let hora = new Hora();
        expect(hora.diferenca(60, 120, FORMATO_HORA)).toBe("01:00");
    });

    it('Deverá retornar a diferenca em minutos', () => {
        let hora = new Hora();
        expect(hora.diferenca(60, 120, FORMATO_MINUTOS)).toBe("60");
    });

    it('Deverá retornar a diferenca em segundos', () => {
        let hora = new Hora();
        expect(hora.diferenca(60, 120, FORMATO_SEGUNDOS)).toBe("3600");
    });

    it('deverá retornar a diferença em milissegundos', () => {
        let hora = new Hora();
        expect(hora.diferenca(60, 120, FORMATO_MILISSEGUNDOS)).toBe("216000");
    });


});

describe('Teste de métodos auxiliares', () => {

    it('Deverá converter minutos em hora', () => {
        let hora = new Hora();
        expect(hora.converterMinutosParaHora(60)).toBe("01:00");
    });

});