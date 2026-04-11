const hamburger = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
const overlay = document.querySelector('#js-overlay');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
});

overlay.addEventListener('click', function () {
  hamburger.classList.remove('is-active');
  nav.classList.remove('is-active');
  overlay.classList.remove('is-active');
});
