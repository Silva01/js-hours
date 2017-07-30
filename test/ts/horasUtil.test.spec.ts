
/**
 * Created by DanielSilva on 29/07/17.
 */

import {HorasUtil} from "../../src/horasUtil";

describe("Classe para utilidades de horas", () => {
    it('Deverá adicionar zeros a esquerda, maximo de 2 digitos', () => {
       let util = new HorasUtil()
       expect(util.adicionarZerosAEsquerda(1)).toBe("01");
        expect(util.adicionarZerosAEsquerda(5)).toBe("05");
        expect(util.adicionarZerosAEsquerda(9)).toBe("09");
    });

    it('Deverá retornar o valor em forma de string sem adicionar o 0 antes', () => {
        let util = new HorasUtil()
        expect(util.adicionarZerosAEsquerda(14)).toBe("14");
        expect(util.adicionarZerosAEsquerda(58)).toBe("58");
        expect(util.adicionarZerosAEsquerda(96)).toBe("96");
    });
});