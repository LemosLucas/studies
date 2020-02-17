import React from 'react';
import './Formulario.css';
import FormValidator from '../../utils/FormValidator.js';
import PopUp from '../../utils/PopUp.js';

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                esperado: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                esperado: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                esperado: true,
                args: [{ min: 0, max: 9999 }],
                mensagem: 'Entre com um preço'
            }
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido()
        }

        this.state = this.stateInicial;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = () => {

        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {
            this.props.adicionaNovoAutor(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(campo => campo.isInvalid);

            //Exibir msg de erro para cada campo invalido
            camposInvalidos.forEach(campoInvalido => {
                PopUp.exibeMensagem('error', campoInvalido.message);
            });
        }
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={this.handleInputChange}
                />

                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value={livro}
                    onChange={this.handleInputChange}
                />


                <label htmlFor="preco">Preço</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                    value={preco}
                    onChange={this.handleInputChange}
                />


                <button className="waves-effect waves-light btn indigo ligthen-2" onClick={this.handleFormSubmit} type="button">Salvar</button>
            </form>
        );
    }
}