"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ProxyFactory;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      _export("ProxyFactory", ProxyFactory =
      /*#__PURE__*/
      function () {
        function ProxyFactory() {
          _classCallCheck(this, ProxyFactory);
        }

        _createClass(ProxyFactory, null, [{
          key: "create",
          value: function create(objeto, props, armadilha) {
            return new Proxy(objeto, {
              get: function get(target, prop, receiver) {
                if (ProxyFactory._ehFuncao(target[prop]) && props.includes(prop)) {
                  return function () {
                    console.log("\"".concat(prop, "\" disparou a armadilha"));
                    target[prop].apply(target, arguments);
                    armadilha(target);
                  };
                } else {
                  return target[prop];
                }
              },
              set: function set(target, prop, value, receiver) {
                var updated = Reflect.set(target, prop, value);
                if (props.includes(prop)) armadilha(target);
                return updated;
              }
            });
          }
        }, {
          key: "_ehFuncao",
          value: function _ehFuncao(fn) {
            return _typeof(fn) == (typeof Function === "undefined" ? "undefined" : _typeof(Function));
          }
        }]);

        return ProxyFactory;
      }());
    }
  };
});
//# sourceMappingURL=ProxyFactory.js.map