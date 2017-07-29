/**
 * Created by DanielSilva on 29/07/17.
 */

///<reference path="../../typings/index.d.ts"/>
///<reference path="../../src/horas.ts"/>

describe("Testando Objeto de Horas", () => {

    it("Deverá criar uma instancia passando por parametro o valor 01:00:00", () => {
       let hora = new Horas("01:00:00");
       expect( hora ).toBeDefined();
    });

    it("Deverá criar uma estancia passando por valor 1, 60, 5, 10", () => {
       let hora = new Horas(1, 60, 5);
       expect( hora ).toBeDefined();
       expect( hora.getHoras() ).toBe("02:00:05")
    });

    it("Deverá retornar a hora no formato de hora comum", () => {
        let hora = new Horas(0, 120, 0);
        expect( hora ).toBeDefined();
        expect( hora.getHoras() ).toEqual("02:00:00");
    })

    it("Deverá retornar a hora informada no formato de minutos", () => {
       let hora = new Horas(1, 0, 0);
       expect( hora ).toBeDefined();
       expect( hora.getMinutos() ).toBe(60);
    });

    it("Deverá retornar a hora no formato de segundos", () => {
       let hora = new Horas(1, 0, 0);
       expect( hora ).toBeDefined();
       expect( hora.getSegundos() ).toBe(3600)
    });

    it("Deverá retornar o segundo no formato de Milissegundos", () => {
       let hora = new Horas(0, 0, 1);
       expect( hora ).toBeDefined();
       expect( hora.getMilissegundos() ).toBe(1000);
    });

    it("Deverá converter o segundo em microssegundos", () => {
       let hora = new Horas(0, 0, 1);

       expect( hora ).toBeDefined();
       expect( hora.getMicrossegundos() ).toBe(1000000);
    });

    it("Deverá converter o segundo em nanossegundos", () => {
        let hora = new Horas(0, 0, 1);

        expect( hora ).toBeDefined();
        expect( hora.getNanossegundos() ).toBe(1000000000);
    });

    it("Deverá converter 1 hora em milissegundos", () => {
        let hora = new Horas(1, 0, 0);

        expect( hora ).toBeDefined();
        expect( hora.getMilissegundos() ).toBe(3600000);
    });

    it("Deverá converter 1 hora em microssegundos", () => {
        let hora = new Horas(1, 0, 0);

        expect( hora ).toBeDefined();
        expect( hora.getMicrossegundos() ).toBe(3600000000);
    });

    it("Deverá converter 1 hora em nanossegundos", () => {
        let hora = new Horas(1, 0, 0);

        expect( hora ).toBeDefined();
        expect( hora.getMicrossegundos() ).toBe(3600000000000);
    });

    it("Deverá converter 480 minutos em hora", () => {
        let hora = new Horas(0, 480, 0);

        expect( hora ).toBeDefined();
        expect( hora.getHoras() ).toBe("08:00:00");
    });

    it("Deverá converter 480 minutos em Segundos", () => {
        let hora = new Horas(0, 480, 0);

        expect( hora ).toBeDefined();
        expect( hora.getSegundos() ).toBe(28800);
    });

    it("Deverá converter 480 minutos em Milissegundos", () => {
        let hora = new Horas(0, 480, 0);

        expect( hora ).toBeDefined();
        expect( hora.getMilissegundos() ).toBe(28800000);
    });

    it("Deverá converter 480 minutos em Microssegundos", () => {
        let hora = new Horas(0, 480, 0);

        expect( hora ).toBeDefined();
        expect( hora.getMicrossegundos() ).toBe(28800000000);
    });

    it("Deverá converter 480 minutos em Nanossegundos", () => {
        let hora = new Horas(0, 480, 0);

        expect( hora ).toBeDefined();
        expect( hora.getNanossegundos() ).toBe(28800000000000);
    });

});