const url = 'http://localhost:8000';

const apiService = {

    ListaAutores: () => {
        return (
            fetch(`${url}/api/autor`)
                .then(res => apiService.TrataErros(res))
        )
    },
    ListaNomes: () => {
        return (
            fetch(`${url}/api/autor/nome`)
                .then(res => apiService.TrataErros(res))
        )
    },
    ListaLivros: () => {
        return (
            fetch(`${url}/api/autor/livro`)
                .then(res => apiService.TrataErros(res))
        )
    },
    CriaAutor: autor => {
        return (
            fetch(`${url}/api/autor`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: autor
            })
                .then(res => apiService.TrataErros(res))
        )
    },
    RemoveAutor: id => {
        return (
            fetch(`${url}/api/autor/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => apiService.TrataErros(res))
        )
    },
    TrataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res.json();
    }
}

export default apiService;