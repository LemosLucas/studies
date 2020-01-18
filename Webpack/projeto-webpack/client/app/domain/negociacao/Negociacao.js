"use strict";

System.register(["../../util/index.js"], function (_export, _context) {
  "use strict";

  var obrigatorio, Negociacao;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_utilIndexJs) {
      obrigatorio = _utilIndexJs.obrigatorio;
    }],
    execute: function () {
      _export("Negociacao", Negociacao =
      /*#__PURE__*/
      function () {
        function Negociacao() {
          var _data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : obrigatorio('data');

          var _quantidade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obrigatorio('quantidade');

          var _valor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : obrigatorio('valor');

          _classCallCheck(this, Negociacao);

          Object.assign(this, {
            _quantidade: _quantidade,
            _valor: _valor
          });
          this._data = new Date(_data.getTime());
          Object.freeze(this);
        }

        _createClass(Negociacao, [{
          key: "equals",
          value: function equals(negociacao) {
            return JSON.stringify(this) == JSON.stringify(negociacao);
          }
        }, {
          key: "volume",
          get: function get() {
            return this._quantidade * this._valor;
          }
        }, {
          key: "data",
          get: function get() {
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
        }]);

        return Negociacao;
      }());
    }
  };
});
//# sourceMappingURL=Negociacao.js.map