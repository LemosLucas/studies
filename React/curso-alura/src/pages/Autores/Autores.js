import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header/Header.js';
import DataTable from '../../componentes/dataTable/DataTable.jsx';
import apiService from '../../utils/apiservice.js';
import PopUp from '../../utils/PopUp.js';

const Autores = () => {
    const [nomes, setNomes] = useState([])

    // The empty array as second argument makes it work as only as a 'componentDidMount' and 'componentWillMount', since it
    // prevents the execution after every render.
    useEffect(() => {
        apiService.ListaAutores()
            .then(res => {
                if (res.message === 'success') {
                    return res.data;
                } else {
                    throw new Error(res.message);
                }
            })
            .then(autores => {
                const autoresArray = autores.map(autor => autor.nome);
                setNomes(autoresArray);
            })
            .catch(error => {
                PopUp.exibeMensagem('error', 'Não foi possível listar os livros.');
                console.log(error);
            })
    }, []);

    return (
        <React.Fragment>
            <Header />
            <h1>Lista de autores: </h1>
            <DataTable dataArray={nomes} />
        </React.Fragment>
    );
}

export default Autores;