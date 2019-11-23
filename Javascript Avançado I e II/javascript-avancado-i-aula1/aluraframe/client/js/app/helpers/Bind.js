class Bind {
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(
            model,
            props,
            model => view.update(model));
        // Calling view for the 1st time to update it
        view.update(model);
        // Returning a object different from its class!!!!!
        return proxy;
    }
}