const validInput = document.querySelector('#validation-input')

validInput.addEventListener('blur', onInputChange);



function onInputChange(event) {
    const inputLength = Number(validInput.dataset.length);
    

    if (Number(validInput.dataset.length) === event.currentTarget.value.length) {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    } else {
        validInput.classList.remove('valid');
        validInput.classList.add('invalid');
    }

}