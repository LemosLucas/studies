'use strict';

System.register(['./View.js', '../helpers/DateHelper.js', '../controllers/NegociacaoController.js'], function (_export, _context) {
    "use strict";

    var View, DateHelper, currentInstance, _createClass, NegociacoesView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_ViewJs) {
            View = _ViewJs.View;
        }, function (_helpersDateHelperJs) {
            DateHelper = _helpersDateHelperJs.DateHelper;
        }, function (_controllersNegociacaoControllerJs) {
            currentInstance = _controllersNegociacaoControllerJs.currentInstance;
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

            _export('NegociacoesView', NegociacoesView = function (_View) {
                _inherits(NegociacoesView, _View);

                function NegociacoesView(elemento) {
                    _classCallCheck(this, NegociacoesView);

                    var _this = _possibleConstructorReturn(this, (NegociacoesView.__proto__ || Object.getPrototypeOf(NegociacoesView)).call(this, elemento));

                    // Handling the sort events on the TH in the "negociacoesView" DIV due to event bubbling
                    elemento.addEventListener('click', function (event) {
                        if (event.target.nodeName == 'TH') currentInstance().ordena(event.target.textContent.toLowerCase());
                    });
                    return _this;
                }

                // GOOOLD:
                //1.  String templates allows us to chain js code and strings that will further be inserted in a innerHTML property of an HTML element. In other to return properly only strings, the 'join('')' method is used.

                //2. Inserting chuncks of JS code is also possible via using IIFE (auto invoked function execution). To do so, we need to declare a function and auto execute it to return something. Inside the function, we can add whatever we want.


                _createClass(NegociacoesView, [{
                    key: '_template',
                    value: function _template(model) {
                        return '\n        <table class="table table-hover table-bordered">\n            <thead>\n                <tr>\n                    <th>DATA</th>\n                    <th>QUANTIDADE</th>\n                    <th>VALOR</th>\n                    <th>VOLUME</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                ' + model.negociacoes.map(function (neg) {
                            return '\n                    <tr>\n                        <td>' + DateHelper.dataParaTexto(neg.data) + '</td>\n                        <td>' + neg.quantidade + '</td>\n                        <td>' + neg.valor + '</td>\n                        <td>' + neg.volume + '</td>\n                    </tr>\n                ';
                        }).join('') + '\n            </tbody>\n\n            <tfoot>\n                <td colspan="3">TOTAL</td>\n                <td>' + model.volumeTotal + '</td>\n            </tfoot>\n        </table>\n        ';
                    }
                }]);

                return NegociacoesView;
            }(View));

            _export('NegociacoesView', NegociacoesView);
        }
    };
});
//# sourceMappingURL=NegociacoesView.js.map