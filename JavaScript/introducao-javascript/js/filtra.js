const inputFiltro = document.querySelector('#filtro-paciente');

inputFiltro.addEventListener('input', function () {
    // 'this' works since the event is attached to the input field I want to obtain the text from
    currentTextToFilter = this.value.toLocaleLowerCase();

    let patients = document.querySelectorAll('.paciente');

    patients.forEach(patient => {
        let name = patient.querySelector('.info-nome').textContent;
        let regEx = new RegExp(currentTextToFilter, 'i'); // REGEX (case insensitive)
        if (regEx.test(name)) {
            // if (name.toLocaleLowerCase().includes(currentTextToFilter)) { // NO REGEX
            // Show this line in the table
            patient.classList.remove('invisible');
        } else {
            // Hide this line in the table
            patient.classList.add('invisible');

        }
    })
})