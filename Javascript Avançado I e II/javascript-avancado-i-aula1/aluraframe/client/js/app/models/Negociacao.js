class Negociacao {
    constructor(data, quantidade, valor) {
        // this._data = data;
        // We will no longer store a reference to an user object. Instead, we create a copy of it to store locally in the class.
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        // Makes this object immutable from this point onwards.
        // PS: Only direct properties are freezed. If a property is an object, like '_data' in our case, it does not freezes its properties. This is called a shallow freeze.
        Object.freeze(this);
    }

    get data() {
        // Since '_data' is an object, we will prevent the user from changing its value by returning a copy of the stored object with the same date.
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}