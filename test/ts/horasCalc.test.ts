/**
 * Created by DanielSilva on 29/07/17.
 */

///<reference path="../../typings/index.d.ts"/>
///<reference path="../../src/horasCalc.ts"/>
///<reference path="../../src/horas.ts"/>

describe("Testes Unitários da classe HorasCalc", () => {

   it("Deverá criar uma instancia de HorasCalc", () => {
      let horasCalc = new HorasCalc();
      expect( horasCalc ).toBeDefined();
   });

   it("Deverá calcular a diferença entre 01:00:00 e 13:00:00", () => {
      let horasCalc = new HorasCalc();
      let hora1 = new Horas();
      let hora2 = new Horas();

      hora1.setHorasCompleta("01:00:00");
      hora2.setHorasCompleta("13:00:00");

      expect( horasCalc ).toBeDefined();
      expect( horasCalc.diferenca(hora1, hora2) ).toBe(720);
   });

   it("Deverá calcular a diferenca entre 08:00:00 e 20:00:00", () => {
       let horasCalc = new HorasCalc();
       let hora1 = new Horas();
       let hora2 = new Horas();

       hora1.setHorasCompleta("20:00:00");
       hora2.setHorasCompleta("08:00:00");

       expect( horasCalc ).toBeDefined();
       expect( horasCalc.diferenca(hora1, hora2) ).toBe(720);
   });

    it("Deverá calcular a diferenca entre 00:00:00 e 24:00:00", () => {
        let horasCalc = new HorasCalc();
        let hora1 = new Horas();
        let hora2 = new Horas();

        hora1.setHorasCompleta("00:00:00");
        hora2.setHorasCompleta("24:00:00");

        expect( horasCalc ).toBeDefined();
        expect( horasCalc.diferenca(hora1, hora2) ).toBe(1440);
    });
});