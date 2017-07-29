/**
 * Created by DanielSilva on 29/07/17.
 */

class HorasUtil {

    constructor(){}

    public adicionarZerosAEsquerda(aParams : number) : string {
        let tamanho = String(aParams).length;
        return tamanho == 1 ? "0" + String(aParams) : String(aParams);
    }
}
