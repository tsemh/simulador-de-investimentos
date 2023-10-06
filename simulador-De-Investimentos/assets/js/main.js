const botaoCheckL = document.querySelectorAll('.btn-ch-l');
const botaoCheckR = document.querySelectorAll('.btn-ch-r');

const bruto = document.querySelector('.bruto');
const liquido = document.querySelector('.liquido');

const pre = document.querySelector('.pre');
const pos = document.querySelector('.pos');
const fix = document.querySelector('.fix');



function handleClickL(e) {
  removeCheckbox();
  liquido.classList.remove('laranja');
  bruto.classList.remove('laranja');
  
  if (!this.classList.contains('laranja')) {
    criaCheckbox()
    this.classList.add('laranja');
  } else if (this.classList.contains('laranja')) {
    removeCheckbox();
  }
  
  
  
}


botaoCheckL.forEach(function (e) {
  e.addEventListener('click', handleClickL);
})


function handleClickR(e) {
  pre.classList.remove('laranja')
  fix.classList.remove('laranja'),
    pos.classList.remove('laranja'),
    this.classList.add('laranja')
    removeCheckbox();
}

botaoCheckR.forEach(function (e) {
  e.addEventListener('click', handleClickR);
})


function criaCheckbox() {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'check');
  checkbox.setAttribute('name', 'Rend-bruto');
  checkbox.setAttribute('disabled', true);
  checkbox.setAttribute('checked', true);

  const element = document.getElementById('only-input');
  element.appendChild(checkbox);
}


function removeCheckbox() {
  const inputCriado = document.getElementsByClassName('check');

  for( let i = inputCriado.length; i > 0; i--) {
    inputCriado[i].remove();
  }
}



