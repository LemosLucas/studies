"use strict";

System.register(["../../util/ApplicationException.js"], function (_export, _context) {
  "use strict";

  var ApplicationException, DataInvalidaException;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_utilApplicationExceptionJs) {
      ApplicationException = _utilApplicationExceptionJs.ApplicationException;
    }],
    execute: function () {
      _export("DataInvalidaException", DataInvalidaException =
      /*#__PURE__*/
      function (_ApplicationException) {
        _inherits(DataInvalidaException, _ApplicationException);

        function DataInvalidaException() {
          _classCallCheck(this, DataInvalidaException);

          return _possibleConstructorReturn(this, _getPrototypeOf(DataInvalidaException).call(this, 'A data deve estar no formato dd/mm/aaaa'));
        }

        return DataInvalidaException;
      }(ApplicationException));
    }
  };
});
//# sourceMappingURL=DataInvalidaException.js.map