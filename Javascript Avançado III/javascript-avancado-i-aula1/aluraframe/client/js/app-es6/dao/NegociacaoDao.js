import {Negociacao} from '../models/Negociacao.js';

export class NegociacaoDao {
    constructor(connection) {
        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);


            request.onsuccess = e => {
                console.log('Negociação adicionada com sucesso!');
                resolve();
            }

            request.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possivel incluir a negociacao');
            }
        })
    }

    listaTodos() {
        return new Promise((resolve, reject) => {
            let negociacoes = [];
            const cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();


            cursor.onsuccess = e => {
                const current = e.target.result;

                if (current) {
                    const data = current.value;

                    negociacoes.push(new Negociacao(data._data, data._quantidade, data._valor));

                    current.continue();
                } else {
                    // return array after its filled with negociacoes
                    resolve(negociacoes);
                }
            }

            cursor.onerror = e => {
                reject(e.target.error.name);
            }
        })
    }

    apagaTodos() {
        return new Promise((resolve, reject) => {
            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            request.onsuccess = e => {
                resolve('Negociações foram apagadas do indexDB');
            }

            request.onerror = e => {
                console.log(e.target.error);
                reject('Erro ao apagar negociações do indexDB');
            }
        })
    }
}