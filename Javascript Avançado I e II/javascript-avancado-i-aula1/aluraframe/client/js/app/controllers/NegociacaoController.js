class NegociacaoController {

    constructor() {
        // 'bind' method makes so that when 'querySelector' is assigned to the variable '$', its context remains the argument passed through the 'bind' function, i. e., in this case, 'this' operator refers to the 'document' not the variable '$' itself
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._ordemAtual = '';

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem'
        );

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );

    }

    add(event) {
        event.preventDefault();

        let negociacao = this._criaNegociacao();

        this._listaNegociacoes.adiciona(negociacao);
        // this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        // this._mensagemView.update(this._mensagem);
        this._clearForm();
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        // this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociações apagadas com sucesso!';
        // this._mensagemView.update(this._mensagem);
    }

    importa() {
        Promise.all([NegociacaoService.obtemNegociacoesServidor('semana'),
                NegociacaoService.obtemNegociacoesServidor('anterior'),
                NegociacaoService.obtemNegociacoesServidor('retrasada')
            ])
            .then(negociacoesTodasSemanas => {
                negociacoesTodasSemanas.map(negociacoes => negociacoes.map(negociacao => this._listaNegociacoes.adiciona(negociacao)))
            })
            .catch(error => this._mensagem.texto = error);
    }

    persiste() {

        let negociacao = {
            data: this._inputData.value,
            quantidade: this._inputQuantidade.value,
            valor: this._inputValor.value
        }

        NegociacaoService.persisteNegociacaoServidor(negociacao)
            .catch(error => console.log(error))
            .then(data => console.log(data));
    }

    ordena(coluna) {
        if (this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _clearForm() {
        this._inputQuantidade.value = 1;
        this._inputData.value = '';
        this._inputValor.value = 0.0;

        this._inputData.focus();

    }
}