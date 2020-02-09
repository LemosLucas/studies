import React from 'react';

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
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
        this.props.adicionaNovoAutor(this.state);
        this.setState(this.stateInicial);
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