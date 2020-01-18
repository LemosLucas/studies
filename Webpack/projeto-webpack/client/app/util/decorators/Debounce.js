"use strict";

System.register([], function (_export, _context) {
  "use strict";

  function debounce() {
    var milissegundos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
    return function (target, key, descriptor) {
      var metodoOriginal = descriptor.value;
      var timer = 0;

      descriptor.value = function () {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (event) event.preventDefault();
        clearInterval(timer);
        timer = setTimeout(function () {
          return metodoOriginal.apply(_this, args);
        }, milissegundos);
      };

      return descriptor;
    };
  }

  _export("debounce", debounce);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Debounce.js.map