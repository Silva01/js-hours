/**
 * Created by DanielSilva on 29/07/17.
 */

import {HorasCalc} from "../../src/horasCalc";
import {Horas} from "../../src/horas";

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

describe("Testar o range de horas da classe HorasCalc", () => {
    it("Deverá retornar true para hora 02:00:00 que está entre 00:00:00 e 08:00:00", () => {
       let horasCalc = new HorasCalc();
       let range1 = new Horas();
       let range2 = new Horas();
       let hora = new Horas();

       range1.setHorasCompleta("00:00:00");
       range2.setHorasCompleta("08:00:00");
       hora.setHorasCompleta("02:00:00");

       expect( horasCalc ).toBeDefined();
       expect( range1 ).toBeDefined();
       expect( range2 ).toBeDefined();
       expect( hora ).toBeDefined();

       expect( horasCalc.isWithinRange(range1, range2, hora) ).toBe(true);

    });

    it("Deverá retornar true para hora 01:59:00 que está entre 17:00:00 e 02:00:00", () => {
        let horasCalc = new HorasCalc();
        let range1 = new Horas();
        let range2 = new Horas();
        let hora = new Horas();

        range1.setHorasCompleta("17:00:00");
        range2.setHorasCompleta("02:00:00");
        hora.setHorasCompleta("01:59:00");

        expect( horasCalc ).toBeDefined();
        expect( range1 ).toBeDefined();
        expect( range2 ).toBeDefined();
        expect( hora ).toBeDefined();

        expect( horasCalc.isWithinRange(range1, range2, hora) ).toBe(true);

    });

    it("Deverá retornar true para hora 02:00:00 que está entre 17:00:00 e 02:00:00", () => {
        let horasCalc = new HorasCalc();
        let range1 = new Horas();
        let range2 = new Horas();
        let hora = new Horas();

        range1.setHorasCompleta("17:00:00");
        range2.setHorasCompleta("02:00:00");
        hora.setHorasCompleta("02:00:00");

        expect( horasCalc ).toBeDefined();
        expect( range1 ).toBeDefined();
        expect( range2 ).toBeDefined();
        expect( hora ).toBeDefined();

        expect( horasCalc.isWithinRange(range1, range2, hora) ).toBe(true);

    });

    it("Deverá retornar true para hora 17:00:00 que está entre 17:00:00 e 02:00:00", () => {
        let horasCalc = new HorasCalc();
        let range1 = new Horas();
        let range2 = new Horas();
        let hora = new Horas();

        range1.setHorasCompleta("17:00:00");
        range2.setHorasCompleta("02:00:00");
        hora.setHorasCompleta("17:00:00");

        expect( horasCalc ).toBeDefined();
        expect( range1 ).toBeDefined();
        expect( range2 ).toBeDefined();
        expect( hora ).toBeDefined();

        expect( horasCalc.isWithinRange(range1, range2, hora) ).toBe(true);

    });

    it("Deverá retornar false para hora 16:59:00 que está entre 17:00:00 e 02:00:00", () => {
        let horasCalc = new HorasCalc();
        let range1 = new Horas();
        let range2 = new Horas();
        let hora = new Horas();

        range1.setHorasCompleta("17:00:00");
        range2.setHorasCompleta("02:00:00");
        hora.setHorasCompleta("16:59:00");

        expect( horasCalc ).toBeDefined();
        expect( range1 ).toBeDefined();
        expect( range2 ).toBeDefined();
        expect( hora ).toBeDefined();

        expect( horasCalc.isWithinRange(range1, range2, hora) ).toBe(false);

    });

    it("Deverá retornar false para hora 02:01:00 que está entre 17:00:00 e 02:00:00", () => {
        let horasCalc = new HorasCalc();
        let range1 = new Horas();
        let range2 = new Horas();
        let hora = new Horas();

        range1.setHorasCompleta("17:00:00");
        range2.setHorasCompleta("02:00:00");
        hora.setHorasCompleta("02:01:00");

        expect( horasCalc ).toBeDefined();
        expect( range1 ).toBeDefined();
        expect( range2 ).toBeDefined();
        expect( hora ).toBeDefined();

        expect( horasCalc.isWithinRange(range1, range2, hora) ).toBe(false);

    });

    it("Deverá retornar true para hora 00:00:00 que está entre 17:00:00 e 02:00:00", () => {
        let horasCalc = new HorasCalc();
        let range1 = new Horas();
        let range2 = new Horas();
        let hora = new Horas();

        range1.setHorasCompleta("17:00:00");
        range2.setHorasCompleta("02:00:00");
        hora.setHorasCompleta("00:00:00");

        expect( horasCalc ).toBeDefined();
        expect( range1 ).toBeDefined();
        expect( range2 ).toBeDefined();
        expect( hora ).toBeDefined();

        expect( horasCalc.isWithinRange(range1, range2, hora) ).toBe(true);

    });
});

describe("Teste unitário para funcionalidade de somar horas", () => {
   it("Deverá realizar os seguintes calculos 01:00:00 + 03:59:00 = 04:59:00", () => {
      let horasCalc = new HorasCalc();
      let hora1 = new Horas();
      let hora2 = new Horas();

      hora1.setHorasCompleta("01:00:00");
      hora2.setHorasCompleta("03:59:00");

      expect( horasCalc ).toBeDefined();
      expect( hora1 ).toBeDefined();
      expect( hora2 ).toBeDefined();

      expect( horasCalc.somarHoras(hora1, hora2) ).toBe(299);

   });

    it("Deverá realizar os seguintes calculos 12:00:00 + 16:30:00 = 28:30:00", () => {
        let horasCalc = new HorasCalc();
        let hora1 = new Horas();
        let hora2 = new Horas();

        hora1.setHorasCompleta("12:00:00");
        hora2.setHorasCompleta("16:30:00");

        expect( horasCalc ).toBeDefined();
        expect( hora1 ).toBeDefined();
        expect( hora2 ).toBeDefined();

        expect( horasCalc.somarHoras(hora1, hora2) ).toBe(1710);

    });
});