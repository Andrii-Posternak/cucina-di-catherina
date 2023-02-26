const modalRef = document.querySelector('[data-modal-buy]');

modalRef.addEventListener('click', closeByBackdrop);
document.addEventListener('keydown', closeByEsc);

function openModal() {
  document
    .querySelector('.backdrop-modal-buy')
    .classList.toggle('backdrop-modal-buy--hidden');
}

function hideModal() {
  modalRef.classList.add('backdrop-modal-buy--hidden');
}

function closeByBackdrop(e) {
  if (e.target !== e.currentTarget) return;
  hideModal();
}

function closeByEsc(e) {
  if (e.code !== 'Escape') return;
  hideModal();
}
