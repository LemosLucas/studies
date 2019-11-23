const table = document.querySelector('#tabela-pacientes');

// Listener is being added to the table. Due to elements bubbling up events by default, we can detect clicks on the on each cell
table.addEventListener('dblclick', event => {
    let targetElement = event.target; // Forcefully its a td, i. e., specific cell
    targetElement.parentNode.classList.add('fadeOut');
    setTimeout(() => {
        targetElement.parentNode.remove(); // Remove the entire row, i. e., parent of the cell 
    }, 500);
});