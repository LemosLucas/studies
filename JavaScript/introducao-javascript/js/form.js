const addPatientButton = document.getElementById('adicionar-paciente');

addPatientButton.addEventListener("click", (event) => {
    let addForm = document.querySelector('#form-add');
    let tableBody = document.querySelector('#tabela-pacientes');

    // Preventing clearing inputs of the form and refreshing the page
    event.preventDefault();

    let patientData = {
        nome: addForm.nome.value,
        peso: addForm.peso.value,
        altura: addForm.altura.value,
        gordura: addForm.gordura.value
    };

    let newRow = createPatientInTheTable(patientData);

    if (isPatientValid(patientData)) {
        // the IMC is the last cell of the row
        let imcCell = newRow.children[newRow.children.length - 1];
        imcCell.innerHTML = (patientData.peso / (patientData.altura ** 2))
            .toFixed(2);
        // Setting remove event in the new line (NO NEED, events bubble)
        // newRow.addEventListener('dblclick', removePatient);
        // Appending the 'row' created to the existing table if data is OK
        tableBody.appendChild(newRow);
        addForm.reset();
    }
})

function createPatientInTheTable(patientData) {

    // Creating the 'row' TAG
    let newRow = document.createElement('tr');
    newRow.classList.add('paciente');

    // Creating each column, i. e., 'td' TAG
    for (const data in patientData) {
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = patientData[data];
        newCell.classList.add("info-".concat(data));
    }

    // Creating the IMC column manually
    newCell = newRow.insertCell(-1);
    newCell.classList.add("info-imc");

    return newRow;
}

function isPatientValid(patient) {

    let isDataValid = true;
    let nameInputField = document.getElementById('nome');
    let heightInputField = document.getElementById('altura');
    let weightInputField = document.getElementById('peso');
    let fatInputField = document.getElementById('gordura');

    //Validate name
    if (patient.nome.length == 0) {
        // Name is empty
        nameInputField.classList.add("campo-invalido");
        isDataValid = false;
    } else {
        nameInputField.classList.remove("campo-invalido");
    }

    // Validate height
    if (!isHeightValid(patient.altura)) {
        heightInputField.classList.add("campo-invalido");
        isDataValid = false;
    } else {
        heightInputField.classList.remove("campo-invalido");
    }

    // Validate weight
    if (!isWeightValid(patient.peso)) {
        weightInputField.classList.add("campo-invalido");
        isDataValid = false;
    } else {
        weightInputField.classList.remove("campo-invalido");
    }

    // Validate fatness
    if (patient.gordura.length == 0) {
        // Fat is empty
        fatInputField.classList.add("campo-invalido");
        isDataValid = false;
    } else {
        fatInputField.classList.remove("campo-invalido");
    }

    return isDataValid;
}