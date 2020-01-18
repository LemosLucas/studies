"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Negociacoes;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("Negociacoes", Negociacoes =
      /*#__PURE__*/
      function () {
        function Negociacoes() {
          _classCallCheck(this, Negociacoes);

          this._negociacoes = [];
          Object.freeze(this);
        }

        _createClass(Negociacoes, [{
          key: "adiciona",
          value: function adiciona(negociacao) {
            this._negociacoes.push(negociacao);
          }
        }, {
          key: "paraArray",
          value: function paraArray() {
            return [].concat(this._negociacoes);
          }
        }, {
          key: "esvazia",
          value: function esvazia() {
            this._negociacoes.length = 0;
          }
        }, {
          key: "volumeTotal",
          get: function get() {
            return this._negociacoes.reduce(function (total, negociacao) {
              return total + negociacao.volume;
            }, 0);
          }
        }]);

        return Negociacoes;
      }());
    }
  };
});
//# sourceMappingURL=Negociacoes.js.map