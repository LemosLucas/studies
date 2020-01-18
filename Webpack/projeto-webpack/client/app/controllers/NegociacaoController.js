"use strict";

System.register(["../domain/index.js", "../ui/index.js", "../util/index.js"], function (_export, _context) {
  "use strict";

  var Negociacoes, NegociacaoService, Negociacao, NegociacoesView, MensagemView, Mensagem, DateConverter, getNegociacaoDao, Bind, getExceptionMessage, debounce, controller, bindEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, NegociacaoController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _class: void 0,
    _class2: void 0
  });

  return {
    setters: [function (_domainIndexJs) {
      Negociacoes = _domainIndexJs.Negociacoes;
      NegociacaoService = _domainIndexJs.NegociacaoService;
      Negociacao = _domainIndexJs.Negociacao;
    }, function (_uiIndexJs) {
      NegociacoesView = _uiIndexJs.NegociacoesView;
      MensagemView = _uiIndexJs.MensagemView;
      Mensagem = _uiIndexJs.Mensagem;
      DateConverter = _uiIndexJs.DateConverter;
    }, function (_utilIndexJs) {
      getNegociacaoDao = _utilIndexJs.getNegociacaoDao;
      Bind = _utilIndexJs.Bind;
      getExceptionMessage = _utilIndexJs.getExceptionMessage;
      debounce = _utilIndexJs.debounce;
      controller = _utilIndexJs.controller;
      bindEvent = _utilIndexJs.bindEvent;
    }],
    execute: function () {
      _export("NegociacaoController", NegociacaoController = (_dec = controller('#data', '#quantidade', '#valor'), _dec2 = bindEvent('submit', '.form'), _dec3 = debounce(), _dec4 = bindEvent('click', '#botao-importa'), _dec5 = debounce(), _dec6 = bindEvent('click', '#botao-apaga'), _dec(_class = (_class2 =
      /*#__PURE__*/
      function () {
        function NegociacaoController(_inputData, _inputQuantidade, _inputValor) {
          _classCallCheck(this, NegociacaoController);

          Object.assign(this, {
            _inputData: _inputData,
            _inputQuantidade: _inputQuantidade,
            _inputValor: _inputValor
          });
          this._negociacoes = new Bind(new Negociacoes(), new NegociacoesView('#negociacoes'), 'adiciona', 'esvazia');
          this._mensagem = new Bind(new Mensagem(), new MensagemView('#mensagemView'), 'texto');
          this._service = new NegociacaoService();

          this._init();
        }

        _createClass(NegociacaoController, [{
          key: "_init",
          value: function () {
            var _init2 = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var dao, negociacoes;
              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return getNegociacaoDao();

                    case 3:
                      dao = _context2.sent;
                      _context2.next = 6;
                      return dao.listaTodos();

                    case 6:
                      negociacoes = _context2.sent;
                      negociacoes.forEach(function (negociacao) {
                        return _this._negociacoes.adiciona(negociacao);
                      });
                      _context2.next = 13;
                      break;

                    case 10:
                      _context2.prev = 10;
                      _context2.t0 = _context2["catch"](0);
                      this._mensagem.texto = getExceptionMessage(_context2.t0);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee, this, [[0, 10]]);
            }));

            function _init() {
              return _init2.apply(this, arguments);
            }

            return _init;
          }()
        }, {
          key: "adiciona",
          value: function () {
            var _adiciona = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2(event) {
              var negociacao, dao;
              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      negociacao = this._criaNegociacao();
                      _context3.next = 4;
                      return getNegociacaoDao();

                    case 4:
                      dao = _context3.sent;
                      _context3.next = 7;
                      return dao.adiciona(negociacao);

                    case 7:
                      this._negociacoes.adiciona(negociacao);

                      this._mensagem.texto = 'Negociação adicionada com sucesso';

                      this._limpaFormulario();

                      _context3.next = 15;
                      break;

                    case 12:
                      _context3.prev = 12;
                      _context3.t0 = _context3["catch"](0);
                      this._mensagem.texto = getExceptionMessage(_context3.t0);

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee2, this, [[0, 12]]);
            }));

            function adiciona(_x) {
              return _adiciona.apply(this, arguments);
            }

            return adiciona;
          }()
        }, {
          key: "_limpaFormulario",
          value: function _limpaFormulario() {
            this._inputData.value = '';
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;

            this._inputData.focus();
          }
        }, {
          key: "_criaNegociacao",
          value: function _criaNegociacao() {
            return new Negociacao(DateConverter.paraData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
          }
        }, {
          key: "importaNegociacoes",
          value: function () {
            var _importaNegociacoes = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var negociacoes;
              return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return this._service.obtemNegociacoesDoPeriodo();

                    case 3:
                      negociacoes = _context4.sent;
                      console.log(negociacoes);
                      negociacoes.filter(function (novaNegociacao) {
                        return !_this2._negociacoes.paraArray().some(function (negociacaoExistente) {
                          return novaNegociacao.equals(negociacaoExistente);
                        });
                      }).forEach(function (negociacao) {
                        return _this2._negociacoes.adiciona(negociacao);
                      });
                      this._mensagem.texto = 'Negociações do período importadas com sucesso';
                      _context4.next = 12;
                      break;

                    case 9:
                      _context4.prev = 9;
                      _context4.t0 = _context4["catch"](0);
                      this._mensagem.texto = getExceptionMessage(_context4.t0);

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee3, this, [[0, 9]]);
            }));

            function importaNegociacoes() {
              return _importaNegociacoes.apply(this, arguments);
            }

            return importaNegociacoes;
          }()
        }, {
          key: "apaga",
          value: function () {
            var _apaga = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee4() {
              var dao;
              return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return getNegociacaoDao();

                    case 3:
                      dao = _context5.sent;
                      _context5.next = 6;
                      return dao.apagaTodos();

                    case 6:
                      this._negociacoes.esvazia();

                      this._mensagem.texto = 'Negociações apagadas com sucesso';
                      _context5.next = 13;
                      break;

                    case 10:
                      _context5.prev = 10;
                      _context5.t0 = _context5["catch"](0);
                      this._mensagem.texto = getExceptionMessage(_context5.t0);

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee4, this, [[0, 10]]);
            }));

            function apaga() {
              return _apaga.apply(this, arguments);
            }

            return apaga;
          }()
        }]);

        return NegociacaoController;
      }(), (_applyDecoratedDescriptor(_class2.prototype, "adiciona", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "adiciona"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "importaNegociacoes", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "importaNegociacoes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "apaga", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "apaga"), _class2.prototype)), _class2)) || _class));
    }
  };
});
//# sourceMappingURL=NegociacaoController.js.map