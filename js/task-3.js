const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

const x = () => {
    outputElem.textContent = inputElem.value.trim();
    if (outputElem.textContent === "") {
        outputElem.textContent = "Anonymous";
    }
 };

inputElem.addEventListener('input', x)