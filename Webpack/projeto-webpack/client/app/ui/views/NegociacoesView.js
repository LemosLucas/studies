"use strict";

System.register(["./View.js", "../converters/DateConverter.js"], function (_export, _context) {
  "use strict";

  var View, DateConverter, NegociacoesView;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_ViewJs) {
      View = _ViewJs.View;
    }, function (_convertersDateConverterJs) {
      DateConverter = _convertersDateConverterJs.DateConverter;
    }],
    execute: function () {
      _export("NegociacoesView", NegociacoesView =
      /*#__PURE__*/
      function (_View) {
        _inherits(NegociacoesView, _View);

        function NegociacoesView() {
          _classCallCheck(this, NegociacoesView);

          return _possibleConstructorReturn(this, _getPrototypeOf(NegociacoesView).apply(this, arguments));
        }

        _createClass(NegociacoesView, [{
          key: "template",
          value: function template(model) {
            return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th>DATA</th>\n                    <th>QUANTIDADE</th>\n                    <th>VALOR</th>\n                    <th>VOLUME</th>\n                </tr>\n            </thead>\n            \n            <tbody>\n                ".concat(model.paraArray().map(function (negociacao) {
              return "\n                    <tr>\n                        <td>".concat(DateConverter.paraTexto(negociacao.data), "</td>\n                        <td>").concat(negociacao.quantidade, "</td>\n                        <td>").concat(negociacao.valor, "</td>\n                        <td>").concat(negociacao.volume, "</td>\n                    </tr>                        \n                ");
            }).join(''), "\n            </tbody>\n            \n            <tfoot>\n                <tr>\n                    <td colspan=\"3\"></td>\n                    <td>").concat(model.volumeTotal, "</td>            \n                </tr>\n            </tfoot>\n            \n        </table>               \n        ");
          }
        }]);

        return NegociacoesView;
      }(View));
    }
  };
});
//# sourceMappingURL=NegociacoesView.js.map