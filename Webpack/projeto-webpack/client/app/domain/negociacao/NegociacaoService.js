"use strict";

System.register(["../../util/HttpService.js", "./Negociacao.js", "../../util/ApplicationException.js"], function (_export, _context) {
  "use strict";

  var HttpService, Negociacao, ApplicationException, NegociacaoService;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_utilHttpServiceJs) {
      HttpService = _utilHttpServiceJs.HttpService;
    }, function (_NegociacaoJs) {
      Negociacao = _NegociacaoJs.Negociacao;
    }, function (_utilApplicationExceptionJs) {
      ApplicationException = _utilApplicationExceptionJs.ApplicationException;
    }],
    execute: function () {
      _export("NegociacaoService", NegociacaoService =
      /*#__PURE__*/
      function () {
        function NegociacaoService() {
          _classCallCheck(this, NegociacaoService);

          this._http = new HttpService();
        }

        _createClass(NegociacaoService, [{
          key: "obtemNegociacoesDaSemana",
          value: function obtemNegociacoesDaSemana() {
            return this._http.get('negociacoes/semana').then(function (dados) {
              return dados.map(function (objeto) {
                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
              });
            }, function (err) {
              throw new ApplicationException('Não foi possível obter as negociações da semana');
            });
          }
        }, {
          key: "obtemNegociacoesDaSemanaAnterior",
          value: function obtemNegociacoesDaSemanaAnterior() {
            return this._http.get('negociacoes/anterior').then(function (dados) {
              return dados.map(function (objeto) {
                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
              });
            }, function (err) {
              throw new ApplicationException('Não foi possível obter as negociações da semana anterior');
            });
          }
        }, {
          key: "obtemNegociacoesDaSemanaRetrasada",
          value: function obtemNegociacoesDaSemanaRetrasada() {
            return this._http.get('negociacoes/retrasada').then(function (dados) {
              return dados.map(function (objeto) {
                return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
              });
            }, function (err) {
              throw new ApplicationException('Não foi possível obter as negociações da semana retrasada');
            });
          }
        }, {
          key: "obtemNegociacoesDoPeriodo",
          value: function () {
            var _obtemNegociacoesDoPeriodo = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var periodo;
              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return Promise.all([this.obtemNegociacoesDaSemana(), this.obtemNegociacoesDaSemanaAnterior(), this.obtemNegociacoesDaSemanaRetrasada()]);

                    case 3:
                      periodo = _context2.sent;
                      return _context2.abrupt("return", periodo.reduce(function (novoArray, item) {
                        return novoArray.concat(item);
                      }, []).sort(function (a, b) {
                        return b.data.getTime() - a.data.getTime();
                      }));

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2["catch"](0);
                      console.log(_context2.t0);
                      throw new ApplicationException('Não foi possível obter as negociações do período');

                    case 11:
                      ;

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee, this, [[0, 7]]);
            }));

            function obtemNegociacoesDoPeriodo() {
              return _obtemNegociacoesDoPeriodo.apply(this, arguments);
            }

            return obtemNegociacoesDoPeriodo;
          }()
        }]);

        return NegociacaoService;
      }());
    }
  };
});
//# sourceMappingURL=NegociacaoService.js.map