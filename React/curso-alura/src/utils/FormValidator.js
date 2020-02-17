import Validator from 'validator';

export default class FormValidator {

    constructor(validacao) {
        this.validacoes = validacao;
    }

    valida(state) {
        let validacao = this.valido();

        this.validacoes.forEach(regra => {
            const campo = state[regra.campo];
            const args = regra.args || [];
            const metodoValidacao = typeof regra.metodo === 'string' ? Validator[regra.metodo] : regra.metodo;
            const resultadoEsperado = regra.esperado;


            if (metodoValidacao(campo, args) !== resultadoEsperado) {
                validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }
                validacao.isValid = false;
            }
        });

        return validacao;

    }


    valido() {
        const validacao = {};

        this.validacoes.map(regra => {
            validacao[regra.campo] = { isInvalid: false, message: '' };
        });

        return { isValid: true, ...validacao };
    }
}