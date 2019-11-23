class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    // GOOOLD:
    //1.  String templates allows us to chain js code and strings that will further be inserted in a innerHTML property of an HTML element. In other to return properly only strings, the 'join('')' method is used.

    //2. Inserting chuncks of JS code is also possible via using IIFE (auto invoked function execution). To do so, we need to declare a function and auto execute it to return something. Inside the function, we can add whatever we want.
    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordena('data')">DATA</th>
                    <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                    <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.negociacoes.map(neg => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(neg.data)}</td>
                        <td>${neg.quantidade}</td>
                        <td>${neg.valor}</td>
                        <td>${neg.volume}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3">TOTAL</td>
                <td>${model.volumeTotal}</td>
            </tfoot>
        </table>
        `;
    }


}