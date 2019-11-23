"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Negociacao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
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

            _export("Negociacao", Negociacao = function () {
                function Negociacao(data, quantidade, valor) {
                    _classCallCheck(this, Negociacao);

                    // this._data = data;
                    // We will no longer store a reference to an user object. Instead, we create a copy of it to store locally in the class.
                    this._data = new Date(data.getTime());
                    this._quantidade = quantidade;
                    this._valor = valor;
                    // Makes this object immutable from this point onwards.
                    // PS: Only direct properties are freezed. If a property is an object, like '_data' in our case, it does not freezes its properties. This is called a shallow freeze.
                    Object.freeze(this);
                }

                _createClass(Negociacao, [{
                    key: "isEquals",
                    value: function isEquals(outraNegociacao) {
                        return JSON.stringify(this) == JSON.stringify(outraNegociacao);
                    }
                }, {
                    key: "data",
                    get: function get() {
                        // Since '_data' is an object, we will prevent the user from changing its value by returning a copy of the stored object with the same date.
                        return new Date(this._data.getTime());
                    }
                }, {
                    key: "quantidade",
                    get: function get() {
                        return this._quantidade;
                    }
                }, {
                    key: "valor",
                    get: function get() {
                        return this._valor;
                    }
                }, {
                    key: "volume",
                    get: function get() {
                        return this._quantidade * this._valor;
                    }
                }]);

                return Negociacao;
            }());

            _export("Negociacao", Negociacao);
        }
    };
});
//# sourceMappingURL=Negociacao.js.map