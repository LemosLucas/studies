class NegociacaoService {

    static async obtemNegociacoesServidor(periodo) {
        return new Promise((resolve, reject) => {
            fetch(`negociacoes/${periodo}`)
                .then(data => {
                    return data.json();
                })
                .catch(() => {
                    reject(`Erro ao importar as negociações de ${periodo}`);
                })
                .then(data => {
                    resolve(data.map(object => new Negociacao(
                        new Date(object.data),
                        object.quantidade,
                        object.valor)));
                });
        })
    }

    static async persisteNegociacaoServidor(negociacao) {
        return new Promise((resolve, reject) => {
            fetch('negociacoes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(negociacao)
                })
                .catch(() => {
                    reject(`Erro ao salvar negociação no servidor.`);
                })
                .then(response => {
                    resolve(response.json());
                })
        })
    }
}