class DateHelper {

    constructor() {
        throw new Error('This class cannot be instantiated');
    }

    static textoParaData(texto) {
        // Check to validate if the string was passed in the right format
        let dateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!dateRegex.test(texto))
            throw new Error('Data format should be yyyy-mm-dd');
        // Converting date from string to Date
        // EASY-WAY
        // let date = new Date(texto.value.split('-'));
        // '...' is the spread operator. Each element of 'dataArray' is passed to each position of the 'Date' argument
        return new Date(...texto.split('-').map((element, index) => element - index % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
}