import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';
// Notação abaixo, sem o './' faz com que o webpack já procure dentro de 'node_modules'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '@babel/polyfill/dist/polyfill.js';
// Importação de um css qualquer custom
import '../css/meu.css';
// Importação do módulo modal do bootstrap.
// Problema: necessita que o jQuery esteja disponível no escopo global, não em módulos como por padrão é feito
// Uma config dentro do webpack será feita para conseguir cumprir com esse requisito
import 'bootstrap/js/modal.js';

// Teste para saber se o jQuery está funcional
$('h1').on('click', () => alert('você me clicou'));
// Teste para saber se o 'modal' do bootstrap está funcional
console.log($('h1').modal);

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

fetch(`${SERVICE_URL}/negociacoes`, config)
    .then(() => console.log('Dado enviado com sucesso'));