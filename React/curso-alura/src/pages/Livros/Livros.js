import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header/Header.js';
import DataTable from '../../componentes/dataTable/DataTable.jsx';
import apiService from '../../utils/apiservice.js';
import PopUp from '../../utils/PopUp.js';


const Livros = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        apiService.ListaLivros()
            .then(res => {
                if (res.message === 'success') {
                    return res.data;
                } else {
                    throw new Error(res.message);
                }
            })
            .then(livros => {
                const livrosArray = livros.map(livro => livro.livro);
                setLivros(livrosArray);
            })
            .catch(error => {
                PopUp.exibeMensagem('error', 'Não foi possível listar os livros.');
                console.log(error);
            })
    }, [])

    return (
        <React.Fragment>
            <Header />
            <h1>Lista de livros:</h1>
            <DataTable dataArray={livros} />
        </React.Fragment>
    );
}

export default Livros;