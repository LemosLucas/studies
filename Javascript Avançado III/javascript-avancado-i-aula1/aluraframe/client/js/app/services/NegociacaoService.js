'use strict';

System.register(['./ConnectionFactory.js', '../dao/NegociacaoDao.js', '../models/Negociacao.js'], function (_export, _context) {
    "use strict";

    var ConnectionFactory, NegociacaoDao, Negociacao, _createClass, NegociacaoService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }, function (_daoNegociacaoDaoJs) {
            NegociacaoDao = _daoNegociacaoDaoJs.NegociacaoDao;
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

            _export('NegociacaoService', NegociacaoService = function () {
                function NegociacaoService() {
                    _classCallCheck(this, NegociacaoService);
                }

                _createClass(NegociacaoService, null, [{
                    key: 'obtemNegociacoesServidor',
                    value: async function obtemNegociacoesServidor(periodo) {
                        return new Promise(function (resolve, reject) {
                            fetch('negociacoes/' + periodo).then(function (data) {
                                return data.json();
                            }).catch(function () {
                                reject('Erro ao importar as negocia\xE7\xF5es de ' + periodo);
                            }).then(function (data) {
                                resolve(data.map(function (object) {
                                    return new Negociacao(new Date(object.data), object.quantidade, object.valor);
                                }));
                            });
                        });
                    }
                }, {
                    key: 'obtemNegociacoes',
                    value: async function obtemNegociacoes() {
                        return Promise.all([this.obtemNegociacoesServidor('semana'), this.obtemNegociacoesServidor('anterior'), this.obtemNegociacoesServidor('retrasada')]).then(function (periodos) {

                            var negociacoes = periodos.reduce(function (dados, periodo) {
                                return dados.concat(periodo);
                            }, []).map(function (dado) {
                                return new Negociacao(new Date(dado.data), dado.quantidade, dado.valor);
                            });

                            return negociacoes;
                        }).catch(function (error) {
                            throw new Error(error);
                        });
                    }
                }, {
                    key: 'persisteNegociacaoServidor',
                    value: async function persisteNegociacaoServidor(negociacao) {
                        return new Promise(function (resolve, reject) {
                            fetch('negociacoes', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(negociacao)
                            }).catch(function () {
                                reject('Erro ao salvar negocia\xE7\xE3o no servidor.');
                            }).then(function (response) {
                                resolve(response.json());
                            });
                        });
                    }
                }, {
                    key: 'cadastra',
                    value: function cadastra(negociacao) {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.adiciona(negociacao);
                        }).then(function () {
                            return 'Negociação cadastrada com sucesso!';
                        }).catch(function (error) {
                            console.log(error);
                            throw new Error('Não foi possível adicionar negociação');
                        });
                    }
                }, {
                    key: 'lista',
                    value: function lista() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.listaTodos();
                        }).catch(function (error) {
                            console.log(error);
                            throw new Error('Não foi listar as negociações');
                        });
                    }
                }, {
                    key: 'apaga',
                    value: function apaga() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (daoNegociacao) {
                            return daoNegociacao.apagaTodos();
                        }).catch(function (error) {
                            console.log(error);
                            throw new Error('Não foi possível apagar as negociações');
                        });
                    }
                }, {
                    key: 'importa',
                    value: function importa(listaAtual) {
                        return this.obtemNegociacoes().then(function (negociacoes) {
                            return negociacoes.filter(function (negociacao) {
                                return !listaAtual.some(function (negociacaoExistente) {
                                    return negociacao.isEquals(negociacaoExistente);
                                });
                            });
                        }).catch(function (error) {
                            console.log(error);
                            throw new Error('Não foi possível importar as negociações');
                        });
                    }
                }]);

                return NegociacaoService;
            }());

            _export('NegociacaoService', NegociacaoService);
        }
    };
});
//# sourceMappingURL=NegociacaoService.js.map