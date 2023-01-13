const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

burger.addEventListener('click', burgerHandler);

function burgerHandler(e) {
  e.preventDefault();
  popup.classList.toggle('open');
  burger.classList.toggle('active');
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}
