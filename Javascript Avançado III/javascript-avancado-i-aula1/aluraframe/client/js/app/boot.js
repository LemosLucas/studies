'use strict';

System.register(['./controllers/NegociacaoController.js'], function (_export, _context) {
    "use strict";

    var currentInstance, negociacaoController;
    return {
        setters: [function (_controllersNegociacaoControllerJs) {
            currentInstance = _controllersNegociacaoControllerJs.currentInstance;
        }],
        execute: function () {
            negociacaoController = currentInstance();


            document.querySelector('form').onsubmit = negociacaoController.add.bind(negociacaoController);
            document.querySelector('.btn-apaga').onclick = negociacaoController.apaga.bind(negociacaoController);
            document.querySelector('.btn-persiste').onclick = negociacaoController.persiste.bind(negociacaoController);
        }
    };
});
//# sourceMappingURL=boot.js.map