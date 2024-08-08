'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
//if we call like closeModal(), it wont work
//reason being, js will call the closeModal() as soon as above line is called and not when click is performed
//to ensure, function is only called when click is called, we call it like closeModal

overlay.addEventListener('click', closeModal);

//handling keyboard events

document.addEventListener('keydown', function (e) {
  // console.log('keydown event', e);
  //console.log(e.key);

  //we want to close modal class only if it contains hidden class
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    //console.log('escape was pressed');
  }
});
