"use strict";

System.register(["./Negociacao.js"], function (_export, _context) {
  "use strict";

  var Negociacao, NegociacaoDao;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_NegociacaoJs) {
      Negociacao = _NegociacaoJs.Negociacao;
    }],
    execute: function () {
      _export("NegociacaoDao", NegociacaoDao =
      /*#__PURE__*/
      function () {
        function NegociacaoDao(connection) {
          _classCallCheck(this, NegociacaoDao);

          this._connection = connection;
          this._store = 'negociacoes';
        }

        _createClass(NegociacaoDao, [{
          key: "adiciona",
          value: function adiciona(negociacao) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              var request = _this._connection.transaction([_this._store], 'readwrite').objectStore(_this._store).add(negociacao);

              request.onsuccess = function (e) {
                return resolve();
              };

              request.onerror = function (e) {
                console.log(e.target.error);
                reject('Não foi possível salvar a negociação');
              };
            });
          }
        }, {
          key: "listaTodos",
          value: function listaTodos() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              var negociacoes = [];

              var cursor = _this2._connection.transaction([_this2._store], 'readwrite').objectStore(_this2._store).openCursor();

              cursor.onsuccess = function (e) {
                var atual = e.target.result;

                if (atual) {
                  var negociacao = new Negociacao(atual.value._data, atual.value._quantidade, atual.value._valor);
                  negociacoes.push(negociacao);
                  atual["continue"]();
                } else {
                  resolve(negociacoes);
                }
              };

              cursor.onerror = function (e) {
                console.log(e.target.error);
                reject('Não foi possível listar nas negociações');
              };
            });
          }
        }, {
          key: "apagaTodos",
          value: function apagaTodos() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              var request = _this3._connection.transaction([_this3._store], 'readwrite').objectStore(_this3._store).clear();

              request.onsuccess = function (e) {
                return resolve();
              };

              request.onerror = function (e) {
                console.log(e.target.error);
                reject('Não foi possível apagar as negociações');
              };
            });
          }
        }]);

        return NegociacaoDao;
      }());
    }
  };
});
//# sourceMappingURL=NegociacaoDao.js.map