import {ListaNegociacoes} from '../models/ListaNegociacoes.js';
import {Mensagem} from '../models/Mensagem.js';
import {NegociacoesView} from '../views/NegociacoesView.js';
import {MensagemView} from '../views/MensagemView.js';
import {NegociacaoService} from '../services/NegociacaoService.js';
import {DateHelper} from '../helpers/DateHelper.js';
import {Bind} from '../helpers/Bind.js';
import {Negociacao} from '../models/Negociacao.js';

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

        // Initializes other objects not related to this class properties
        this._init();
    }

    _init() {
        // Loading data on indexDB when the constructor is called, i. e., everytime the page reloads
        NegociacaoService
            .lista()
            .then(negociacoes =>
                negociacoes.map(negociacao =>
                    this._listaNegociacoes.adiciona(negociacao)))
            .catch(error => console.error(error))

        // Loading negociacoes from server database periodically (5s)
        setInterval(() => {
            this.importa();
        }, 5000);
    }

    add(event) {
        event.preventDefault();
        let negociacao = this._criaNegociacao();

        NegociacaoService
            .cadastra(negociacao)
            .then(mensagem => {
                // Only adding to the server if it was able to add to the database
                // 'adiciona' from NegociacaoDao returns a Promisse
                this._listaNegociacoes.adiciona(negociacao);
                // this._negociacoesView.update(this._listaNegociacoes);
                this._mensagem.texto = mensagem;
                // this._mensagemView.update(this._mensagem);
                this._clearForm();
            })
            .catch(error => this._mensagem.texto = error);
    }

    apaga() {

        NegociacaoService
            .apaga()
            .then(() => {
                this._listaNegociacoes.esvazia();
                // this._negociacoesView.update(this._listaNegociacoes);

                this._mensagem.texto = 'Negociações apagadas com sucesso!';
                // this._mensagemView.update(this._mensagem);
            })
            .catch(error => this._mensagem.texto = error);
    }

    importa() {
        NegociacaoService
            .importa(this._listaNegociacoes.negociacoes)
            .then(negociacoes => {
                negociacoes.map(negociacao => {
                    this._listaNegociacoes.adiciona(negociacao);
                    this._mensagem.texto = 'Negociações importadas com sucesso.';
                })
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
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    _clearForm() {
        this._inputQuantidade.value = 1;
        this._inputData.value = '';
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}

//Making this class a singleton
let negociacaoController = new NegociacaoController();

export function currentInstance() {
    return negociacaoController;
}