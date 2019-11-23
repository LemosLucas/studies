import {ConnectionFactory} from './ConnectionFactory.js'
import {NegociacaoDao} from '../dao/NegociacaoDao.js';
import {Negociacao} from '../models/Negociacao.js';

export class NegociacaoService {

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

    static async obtemNegociacoes() {
        return Promise.all([this.obtemNegociacoesServidor('semana'),
                this.obtemNegociacoesServidor('anterior'),
                this.obtemNegociacoesServidor('retrasada')
            ])
            .then(periodos => {

                let negociacoes = periodos
                    .reduce((dados, periodo) => dados.concat(periodo), [])
                    .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));

                return negociacoes;
            })
            .catch(error => {
                throw new Error(error);
            });
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

    static cadastra(negociacao) {
        return ConnectionFactory.getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociação cadastrada com sucesso!')
            .catch(error => {
                console.log(error);
                throw new Error('Não foi possível adicionar negociação');
            })
    }

    static lista() {
        return ConnectionFactory.getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(error => {
                console.log(error);
                throw new Error('Não foi listar as negociações')
            })
    }

    static apaga() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(daoNegociacao => daoNegociacao.apagaTodos())
            .catch(error => {
                console.log(error);
                throw new Error('Não foi possível apagar as negociações');
            })
    }

    static importa(listaAtual) {
        return this.obtemNegociacoes()
            .then(negociacoes =>
                negociacoes.filter(negociacao => {
                    return !listaAtual.some(negociacaoExistente =>
                        negociacao.isEquals(negociacaoExistente)
                    );
                }))
            .catch(error => {
                console.log(error);
                throw new Error('Não foi possível importar as negociações');
            })
    }


}