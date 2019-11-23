'use strict';

System.register(['../models/ListaNegociacoes.js', '../models/Mensagem.js', '../views/NegociacoesView.js', '../views/MensagemView.js', '../services/NegociacaoService.js', '../helpers/DateHelper.js', '../helpers/Bind.js', '../models/Negociacao.js'], function (_export, _context) {
    "use strict";

    var ListaNegociacoes, Mensagem, NegociacoesView, MensagemView, NegociacaoService, DateHelper, Bind, Negociacao, _createClass, NegociacaoController, negociacaoController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function currentInstance() {
        return negociacaoController;
    }

    _export('currentInstance', currentInstance);

    return {
        setters: [function (_modelsListaNegociacoesJs) {
            ListaNegociacoes = _modelsListaNegociacoesJs.ListaNegociacoes;
        }, function (_modelsMensagemJs) {
            Mensagem = _modelsMensagemJs.Mensagem;
        }, function (_viewsNegociacoesViewJs) {
            NegociacoesView = _viewsNegociacoesViewJs.NegociacoesView;
        }, function (_viewsMensagemViewJs) {
            MensagemView = _viewsMensagemViewJs.MensagemView;
        }, function (_servicesNegociacaoServiceJs) {
            NegociacaoService = _servicesNegociacaoServiceJs.NegociacaoService;
        }, function (_helpersDateHelperJs) {
            DateHelper = _helpersDateHelperJs.DateHelper;
        }, function (_helpersBindJs) {
            Bind = _helpersBindJs.Bind;
        }, function (_modelsNegociacaoJs) {
            Negociacao = _modelsNegociacaoJs.Negociacao;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            NegociacaoController = function () {
                function NegociacaoController() {
                    _classCallCheck(this, NegociacaoController);

                    // 'bind' method makes so that when 'querySelector' is assigned to the variable '$', its context remains the argument passed through the 'bind' function, i. e., in this case, 'this' operator refers to the 'document' not the variable '$' itself
                    var $ = document.querySelector.bind(document);
                    this._inputQuantidade = $('#quantidade');
                    this._inputData = $('#data');
                    this._inputValor = $('#valor');
                    this._ordemAtual = '';

                    this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia', 'ordena', 'inverteOrdem');

                    this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');

                    // Initializes other objects not related to this class properties
                    this._init();
                }

                _createClass(NegociacaoController, [{
                    key: '_init',
                    value: function _init() {
                        var _this = this;

                        // Loading data on indexDB when the constructor is called, i. e., everytime the page reloads
                        NegociacaoService.lista().then(function (negociacoes) {
                            return negociacoes.map(function (negociacao) {
                                return _this._listaNegociacoes.adiciona(negociacao);
                            });
                        }).catch(function (error) {
                            return console.error(error);
                        });

                        // Loading negociacoes from server database periodically (5s)
                        setInterval(function () {
                            _this.importa();
                        }, 5000);
                    }
                }, {
                    key: 'add',
                    value: function add(event) {
                        var _this2 = this;

                        event.preventDefault();
                        var negociacao = this._criaNegociacao();

                        NegociacaoService.cadastra(negociacao).then(function (mensagem) {
                            // Only adding to the server if it was able to add to the database
                            // 'adiciona' from NegociacaoDao returns a Promisse
                            _this2._listaNegociacoes.adiciona(negociacao);
                            // this._negociacoesView.update(this._listaNegociacoes);
                            _this2._mensagem.texto = mensagem;
                            // this._mensagemView.update(this._mensagem);
                            _this2._clearForm();
                        }).catch(function (error) {
                            return _this2._mensagem.texto = error;
                        });
                    }
                }, {
                    key: 'apaga',
                    value: function apaga() {
                        var _this3 = this;

                        NegociacaoService.apaga().then(function () {
                            _this3._listaNegociacoes.esvazia();
                            // this._negociacoesView.update(this._listaNegociacoes);

                            _this3._mensagem.texto = 'Negociações apagadas com sucesso!';
                            // this._mensagemView.update(this._mensagem);
                        }).catch(function (error) {
                            return _this3._mensagem.texto = error;
                        });
                    }
                }, {
                    key: 'importa',
                    value: function importa() {
                        var _this4 = this;

                        NegociacaoService.importa(this._listaNegociacoes.negociacoes).then(function (negociacoes) {
                            negociacoes.map(function (negociacao) {
                                _this4._listaNegociacoes.adiciona(negociacao);
                                _this4._mensagem.texto = 'Negociações importadas com sucesso.';
                            });
                        }).catch(function (error) {
                            return _this4._mensagem.texto = error;
                        });
                    }
                }, {
                    key: 'persiste',
                    value: function persiste() {

                        var negociacao = {
                            data: this._inputData.value,
                            quantidade: this._inputQuantidade.value,
                            valor: this._inputValor.value
                        };

                        NegociacaoService.persisteNegociacaoServidor(negociacao).catch(function (error) {
                            return console.log(error);
                        }).then(function (data) {
                            return console.log(data);
                        });
                    }
                }, {
                    key: 'ordena',
                    value: function ordena(coluna) {
                        if (this._ordemAtual == coluna) {
                            this._listaNegociacoes.inverteOrdem();
                        } else {
                            this._listaNegociacoes.ordena(function (a, b) {
                                return a[coluna] - b[coluna];
                            });
                        }
                        this._ordemAtual = coluna;
                    }
                }, {
                    key: '_criaNegociacao',
                    value: function _criaNegociacao() {

                        return new Negociacao(DateHelper.textoParaData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                    }
                }, {
                    key: '_clearForm',
                    value: function _clearForm() {
                        this._inputQuantidade.value = 1;
                        this._inputData.value = '';
                        this._inputValor.value = 0.0;

                        this._inputData.focus();
                    }
                }]);

                return NegociacaoController;
            }();

            negociacaoController = new NegociacaoController();
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map