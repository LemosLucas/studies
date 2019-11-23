class MensagemView extends View {
    // Code below is not necessary. By default, JS passes to the parent class the arguments passed to the child class if they happen to be in the same number. However, if somehow 'MensagemView' should also have its own properties, then, 'super' has to be called as a first argument.
    // constructor(elemento) {
    //     super(elemento);
    // }

    _template(model) {
        return model.texto ? `<p class="alert alert-info"> ${model.texto} </p>` : `<p></p>`;
    }
}