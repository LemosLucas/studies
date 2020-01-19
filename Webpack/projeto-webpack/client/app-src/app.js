import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';
// Notação abaixo, sem o './' faz com que o webpack já procure dentro de 'node_modules'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Importação de um css qualquer custom
import '../css/meu.css';

const controller = new NegociacaoController();
const negociacao = new Negociacao(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');
const body = JSON.stringify(negociacao);
const method = 'POST';

const config = {
    method,
    headers,
    body
};

fetch('http://localhost:3000/negociacoes', config)
    .then(() => console.log('Dado enviado com sucesso'));