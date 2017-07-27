/**
 * Created by danielgs on 27/07/2017.
 */

///<reference path="../../typings/index.d.ts"/>
///<reference path="../../src/soma.ts"/>

describe('Teste de soma entre 2 números', () => {
    it('Retornar 3', () => {
        expect(somar(1, 2)).toBe(3);
    });
});