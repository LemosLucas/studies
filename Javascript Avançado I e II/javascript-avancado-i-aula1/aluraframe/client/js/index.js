// Getting all form fields
let formFields = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

let tbody = document.querySelector('table tbody');

// Adding event listener to the "incluir" button
document.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault();

    let tr = document.createElement('tr');
    // Adding a column corresponding to the each input form
    formFields.forEach(field => {
        let td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);
    });

    // Computing volume for the last column
    let tdVolume = document.createElement('td');
    tdVolume.textContent = formFields[1].value * formFields[2].value;
    tr.appendChild(tdVolume);

    // Appending new row to the table
    tbody.appendChild(tr);

    // Cleaning input forms after adding row to the table
    formFields[0].value = '';
    formFields[1].value = 1;
    formFields[2].value = 0, 0;

    // Applying focus to the first input form
    formFields[0].focus();

})