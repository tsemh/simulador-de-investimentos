let validaForm = {
  handleSubmit: (event) => {
    event.preventDefault();

    let send = true;

    let inputs = form.querySelectorAll('input');

    validaForm.clearErrors();

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = validaForm.checkInput(input);
      if (check !== true) {
        send = false;
        validaForm.showError(input, check);
      }
    }
    send = false;

    if (send) {
      form.submit();
    }
  },

  checkInput: (input) => {
    let rules = input.getAttribute('data-rules');
    if (rules !== null) {
      rules = rules.split('|');
      for (let k in rules) {
        let rDetails = rules[k].split('=');
        switch (rDetails[0]) {
          case 'required':
            if (input.value == '') {
              return 'Campo não pode estar vazio.';
            }
            break;
          case 'number':
            if (input.value !== Number) {
              return 'Apenas números são aceitos'
            }
            break;
        }
      }
    }
    return true;
  },

  showError: (input, error) => {
    input.style.borderColor = '#ff0000';

    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.ElementSibling)
  },
  clearErrors: () => {

    let inputs = form.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
      inputs[i].style = '';
    }

    let errorElements = document.querySelectorAll('.error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove();
    }
  }

};
let simular = document.querySelector('.formulario');
simular.addEventListener('submit', validaForm.handleSubmit);