import React from 'react';
import './App.css';
import Tabela from './Tabela.js';
import Form from './Formulario.js';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header.js';

class App extends React.Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],
  };

  removeAutor = indexAutorParaRemover => {
    const { autores } = this.state;
    this.setState({
      autores: autores.filter((autor, indexAutorAtual) => indexAutorParaRemover !== indexAutorAtual)
    });
  }

  adicionaNovoAutor = autor => {
    this.setState({
      autores: [...this.state.autores, autor]
    })
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form adicionaNovoAutor={this.adicionaNovoAutor} />
      </React.Fragment>
    );
  }
}

export default App;
