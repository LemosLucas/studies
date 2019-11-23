let title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';

// Computing IMC
let weights = document.querySelectorAll('.info-peso');
let heights = document.querySelectorAll('.info-altura');
let imcs = document.querySelectorAll('.info-imc');
let isHeightOK, isWeightOK;

for (let i = 0; i < imcs.length; i++) {
    const weight = weights[i].textContent;
    const height = heights[i].textContent;
    isHeightOK = isHeightValid(height);
    isWeightOK = isWeightValid(weight);
    if (!isWeightOK) {
        console.log('Invalid weight');
        // weights[i].style.color = "red";
        // weights[i].parentElement.style.backgroundColor = "lightcoral";
        weights[i].classList.add("campo-invalido");
    }
    if (!isHeightOK) {
        console.log('Invalid height')
        // heights[i].style.color = "red";
        // heights[i].parentElement.style.backgroundColor = "lightcoral";
        heights[i].classList.add("campo-invalido");
    }
    if (isWeightOK && isHeightOK) {
        imcs[i].textContent = (weight / (height ** 2)).toFixed(2);
    } else {
        imcs[i].textContent = "Invalid data";
    }
}

function isWeightValid(weight) {
    return (weight <= 0 || weight >= 1000) ? false : true;
}

function isHeightValid(height) {
    return (height <= 0 || height >= 3) ? false : true;
}