const btnUpRef = document.querySelector('.up-btn');
btnUpRef.addEventListener('click', onClick);

function onClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function showBtn() {
  btnUpRef.classList.remove('up-btn--hide');
}

function hideBtn() {
  btnUpRef.classList.add('up-btn--hide');
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  scrollY > 400 ? showBtn() : hideBtn();
});
