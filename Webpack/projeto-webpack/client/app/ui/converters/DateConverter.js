"use strict";

System.register(["./DataInvalidaException.js"], function (_export, _context) {
  "use strict";

  var DataInvalidaException, DateConverter;

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_DataInvalidaExceptionJs) {
      DataInvalidaException = _DataInvalidaExceptionJs.DataInvalidaException;
    }],
    execute: function () {
      _export("DateConverter", DateConverter =
      /*#__PURE__*/
      function () {
        function DateConverter() {
          _classCallCheck(this, DateConverter);

          throw new Error('Esta classe não pode ser instanciada');
        }

        _createClass(DateConverter, null, [{
          key: "paraTexto",
          value: function paraTexto(data) {
            return "".concat(data.getDate(), "/").concat(data.getMonth() + 1, "/").concat(data.getFullYear());
          }
        }, {
          key: "paraData",
          value: function paraData(texto) {
            if (!/\d{2}\/\d{2}\/\d{4}/.test(texto)) throw new DataInvalidaException();
            return _construct(Date, _toConsumableArray(texto.split('/').reverse().map(function (item, indice) {
              return item - indice % 2;
            })));
          }
        }]);

        return DateConverter;
      }());
    }
  };
});
//# sourceMappingURL=DateConverter.js.map