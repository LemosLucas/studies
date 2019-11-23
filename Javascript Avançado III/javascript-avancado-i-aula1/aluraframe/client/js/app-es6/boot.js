import {
    currentInstance
} from './controllers/NegociacaoController.js';

let negociacaoController = currentInstance();

document.querySelector('form').onsubmit = negociacaoController.add.bind(negociacaoController);
document.querySelector('.btn-apaga').onclick = negociacaoController.apaga.bind(negociacaoController);
document.querySelector('.btn-persiste').onclick = negociacaoController.persiste.bind(negociacaoController);