const refs = {
    form: document.querySelector('.login-form'),
    formBtn: document.querySelector('form > button'),
    inputEmail: document.querySelector('input[type="email"]'),
    inputPassword: document.querySelector('input[type="password"]')
}

    
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

     if(refs.inputEmail.value === '' || refs.inputPassword.value === '') {
        alert('Все поля должны быть заполнены!')
     } else {
         
        const formElements = event.currentTarget.elements;
        const email = formElements.email.value;
        const password = formElements.password.value;
       
        const formValues = {
            email,
            password,
        };
         console.log(formValues);
         refs.form.reset()
    }
 
}


    

