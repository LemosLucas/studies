"use strict";

System.register(["./controllers/NegociacaoController.js", "./domain/index.js"], function (_export, _context) {
  "use strict";

  var NegociacaoController, Negociacao, controller, negociacao, headers, body, method, config;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
    }, function (_domainIndexJs) {
      Negociacao = _domainIndexJs.Negociacao;
    }],
    execute: function () {
      controller = new NegociacaoController();
      negociacao = new Negociacao(new Date(), 1, 200);
      headers = new Headers();
      headers.set('Content-Type', 'application/json');
      body = JSON.stringify(negociacao);
      method = 'POST';
      config = {
        method: method,
        headers: headers,
        body: body
      };
      fetch('/negociacoes', config).then(function () {
        return console.log('Dado enviado com sucesso');
      });
    }
  };
});
//# sourceMappingURL=app.js.map