const refs = {
  body: document.querySelector('body'),
  modalBtn: document.querySelector('.icon-close'),
  modalContainer: document.querySelector('.modal'),
  

}



function openModal() {
  refs.body.classList.add('onOpenModal');
  refs.modalContainer.remove('is-hidden');
  refs.modalBtn.addEventListener('click', closeModal);
}
  
function closeModal () {
  refs.body.classList.remove('onOpenModal');
  refs.modalContainer.add('is-hidden');
  refs.modalBtn.removeEventListener('click', closeModal);
}