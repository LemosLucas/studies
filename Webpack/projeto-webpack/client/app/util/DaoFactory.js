"use strict";

System.register(["./ConnectionFactory.js", "../domain/negociacao/NegociacaoDao.js"], function (_export, _context) {
  "use strict";

  var ConnectionFactory, NegociacaoDao;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function getNegociacaoDao() {
    return _getNegociacaoDao.apply(this, arguments);
  }

  function _getNegociacaoDao() {
    _getNegociacaoDao = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var conn;
      return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ConnectionFactory.getConnection();

            case 2:
              conn = _context2.sent;
              return _context2.abrupt("return", new NegociacaoDao(conn));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));
    return _getNegociacaoDao.apply(this, arguments);
  }

  _export("getNegociacaoDao", getNegociacaoDao);

  return {
    setters: [function (_ConnectionFactoryJs) {
      ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
    }, function (_domainNegociacaoNegociacaoDaoJs) {
      NegociacaoDao = _domainNegociacaoNegociacaoDaoJs.NegociacaoDao;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=DaoFactory.js.map