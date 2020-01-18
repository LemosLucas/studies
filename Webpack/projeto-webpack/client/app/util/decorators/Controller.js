"use strict";

System.register([], function (_export, _context) {
  "use strict";

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function controller() {
    for (var _len = arguments.length, seletores = new Array(_len), _key = 0; _key < _len; _key++) {
      seletores[_key] = arguments[_key];
    }

    var elements = seletores.map(function (seletor) {
      return document.querySelector(seletor);
    });
    return function (constructor) {
      var constructorOriginal = constructor;

      var constructorNovo = function constructorNovo() {
        var instance = _construct(constructorOriginal, _toConsumableArray(elements));

        Object.getOwnPropertyNames(constructorOriginal.prototype).forEach(function (property) {
          if (Reflect.hasMetadata('bindEvent', instance, property)) {
            associaEvento(instance, Reflect.getMetadata('bindEvent', instance, property));
          }
        });
      };

      constructorNovo.prototype = constructorOriginal.prototype;
      return constructorNovo;
    };
  }

  function associaEvento(instance, metadado) {
    document.querySelector(metadado.selector).addEventListener(metadado.event, function (event) {
      if (metadado.prevent) event.preventDefault();
      instance[metadado.propertyKey](event);
    });
  }

  _export("controller", controller);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Controller.js.map