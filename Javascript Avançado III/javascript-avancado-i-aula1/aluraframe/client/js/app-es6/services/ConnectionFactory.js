const stores = ['negociacoes'];
const version = 5;
const dbName = 'aluraframe';

let connection = null;
let close = null;

export class ConnectionFactory {

    constructor() {
        throw new Error('Não é possível criar instâncias de ConnectionFactory');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {
                ConnectionFactory._createStores(e.target.result);
            }

            openRequest.onsuccess = e => {
                if (!connection) {
                    connection = e.target.result;
                    close = connection.close.bind(connection);
                    // Monkey patch: sobreescrevendo método da classe e guardando o original para que este seja chamado apenas pelo método estático desta classe
                    connection.close = () => {
                        throw new Error('Não está autorizado a fechar uma conexão deste local');
                    }
                }
                console.log('Conexão criada com sucessso!');
                resolve(connection);
            }

            openRequest.onerror = e => {
                console.log(e.target.error);
                reject(e.target.error.name);
            }
        })
    }

    static _createStores(connection) {
        stores.forEach(store => {
            if (connection.objectStoreNames.contains(store)) {
                connection.deleteObjectStore(store);
            }
            connection.createObjectStore({
                autoIncrement: true
            });
        })
    }

    static closeConnection() {
        close();
        connection = null;
    }
}