const buttonUpdatePatients = document.querySelector('#buscar-pacientes');

buttonUpdatePatients.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', () => {
        // Checking if a error returned
        if (xhr.status != 200) {
            // Error request
            console.log('Status: ' + xhr.status);
            console.log(xhr.responseText);
            return;
        }

        let patients = JSON.parse(xhr.responseText);
        let tableBody = document.querySelector('#tabela-pacientes');

        patients.forEach(patient => {
            delete(patient.imc); // 'imc' property will be computed afterwards
            let newRow = createPatientInTheTable(patient);
            if (isPatientValid(patient)) {
                // the IMC is the last cell of the row
                let imcCell = newRow.children[newRow.children.length - 1];
                imcCell.innerHTML = (patient.peso / (patient.altura ** 2))
                    .toFixed(2);
                // Setting remove event in the new line (NO NEED, events bubble)
                // newRow.addEventListener('dblclick', removePatient);
                // Appending the 'row' created to the existing table if data is OK
                tableBody.appendChild(newRow);
            }
        });
    })

    xhr.send();
})