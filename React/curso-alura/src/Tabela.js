import React from 'react';


export default class Tabela extends React.Component {

    render() {

        const { autores, removeAutor } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody autores={autores} removeAutor={removeAutor}/>
            </table>
        );
    }
}

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = ({ autores, removeAutor }) => {
    const linhas = autores.map((autor, index) => {
        return (
            <tr key={index}>
                <td>{autor.nome}</td>
                <td>{autor.livro}</td>
                <td>{autor.preco}</td>
                <td><button className="waves-effect waves-light btn indigo ligthen-2" onClick={() => removeAutor(index)}>Remover</button></td>
            </tr>
        );
    })
    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

