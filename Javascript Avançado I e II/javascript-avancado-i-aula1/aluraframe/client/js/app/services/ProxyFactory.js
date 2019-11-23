class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
                    return function () {
                        console.log(`interceptando ${prop}`);
                        let returnValue = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return returnValue;
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                let returnValue = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) {
                    console.log(`interceptando ${prop}`);
                    acao(target);
                }
                return returnValue;
                
            }
        });
    }

    static _isFunction(func) {
        return typeof (func) == typeof (Function);
    }
}