(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openMobileModalBtn: document.querySelector('[data-mobile-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openMobileModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeByBackdrop);
  document.addEventListener('keydown', closeByEsc);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function hideModal() {
    refs.modal.classList.add('is-hidden');
  }

  function closeByBackdrop(e) {
    if (e.target !== e.currentTarget) return;
    hideModal();
  }

  function closeByEsc(e) {
    if (e.code !== 'Escape') return;
    hideModal();
  }
})();
