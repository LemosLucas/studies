'use strict';

System.register(['../models/Negociacao.js'], function (_export, _context) {
    "use strict";

    var Negociacao, _createClass, NegociacaoDao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsNegociacaoJs) {
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

            _export('NegociacaoDao', NegociacaoDao = function () {
                function NegociacaoDao(connection) {
                    _classCallCheck(this, NegociacaoDao);

                    this._connection = connection;
                    this._store = 'negociacoes';
                }

                _createClass(NegociacaoDao, [{
                    key: 'adiciona',
                    value: function adiciona(negociacao) {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this._connection.transaction([_this._store], 'readwrite').objectStore(_this._store).add(negociacao);

                            request.onsuccess = function (e) {
                                console.log('Negociação adicionada com sucesso!');
                                resolve();
                            };

                            request.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Não foi possivel incluir a negociacao');
                            };
                        });
                    }
                }, {
                    key: 'listaTodos',
                    value: function listaTodos() {
                        var _this2 = this;

                        return new Promise(function (resolve, reject) {
                            var negociacoes = [];
                            var cursor = _this2._connection.transaction([_this2._store], 'readwrite').objectStore(_this2._store).openCursor();

                            cursor.onsuccess = function (e) {
                                var current = e.target.result;

                                if (current) {
                                    var data = current.value;

                                    negociacoes.push(new Negociacao(data._data, data._quantidade, data._valor));

                                    current.continue();
                                } else {
                                    // return array after its filled with negociacoes
                                    resolve(negociacoes);
                                }
                            };

                            cursor.onerror = function (e) {
                                reject(e.target.error.name);
                            };
                        });
                    }
                }, {
                    key: 'apagaTodos',
                    value: function apagaTodos() {
                        var _this3 = this;

                        return new Promise(function (resolve, reject) {
                            var request = _this3._connection.transaction([_this3._store], 'readwrite').objectStore(_this3._store).clear();

                            request.onsuccess = function (e) {
                                resolve('Negociações foram apagadas do indexDB');
                            };

                            request.onerror = function (e) {
                                console.log(e.target.error);
                                reject('Erro ao apagar negociações do indexDB');
                            };
                        });
                    }
                }]);

                return NegociacaoDao;
            }());

            _export('NegociacaoDao', NegociacaoDao);
        }
    };
});
//# sourceMappingURL=NegociacaoDao.js.map