"use strict";

System.register(["../../util/index.js"], function (_export, _context) {
  "use strict";

  var obrigatorio;

  function bindEvent() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : obrigatorio('event');
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obrigatorio('selector');
    var prevent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return function (target, propertyKey, descriptor) {
      Reflect.defineMetadata('bindEvent', {
        event: event,
        selector: selector,
        prevent: prevent,
        propertyKey: propertyKey
      }, Object.getPrototypeOf(target), propertyKey);
      return descriptor;
    };
  }

  _export("bindEvent", bindEvent);

  return {
    setters: [function (_utilIndexJs) {
      obrigatorio = _utilIndexJs.obrigatorio;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=BindEvent.js.map