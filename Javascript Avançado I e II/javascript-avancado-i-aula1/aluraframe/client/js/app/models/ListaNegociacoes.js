class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
        // Object.freeze(this);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    esvazia() {
        this._negociacoes = [];
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }

    get negociacoes() {
        // Defensive programming to stop outer user to change it directly from the getter
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

}