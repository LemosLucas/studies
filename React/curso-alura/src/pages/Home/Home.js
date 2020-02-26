import React from 'react';
import './Home.css';
import Tabela from '../../componentes/tabela/Tabela.js';
import Form from '../../componentes/formulario/Formulario.js';
import 'materialize-css/dist/css/materialize.min.css';
import Header from '../../componentes/header/Header.js';
import PopUp from '../../utils/PopUp.js';
import ApiService from '../../utils/apiservice.js';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: []
    };
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: res.data });
        }
      })
      .catch(error => {
        PopUp.exibeMensagem('error', 'Não foi possível acessar a lista de autores.');
        console.log(error);
      })
  }

  removeAutor = id => {
    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === 'deleted') {
          const { autores } = this.state;
          this.setState({
            autores: autores.filter(autor => id !== autor.id)
          });
          PopUp.exibeMensagem('success', 'Autor removido com sucesso!');
        }
      })
      .catch(error => {
        PopUp.exibeMensagem('error', 'Autor não pode ser removido.');
        console.log(error);
      })
  }

  adicionaNovoAutor = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (res.message === 'success') {
          return res.data;
        }
      })
      .then(autor => {
        this.setState({
          autores: [...this.state.autores, autor]
        });
        PopUp.exibeMensagem('success', 'Autor adicionado com sucesso!');
      })
      .catch(error => {
        PopUp.exibeMensagem('error', 'Autor não pode ser adicionado.');
        console.log(error);
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

export default Home;
