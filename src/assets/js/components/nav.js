import $ from 'jquery';

const navButton = $('.header__nav-button'); // Кнопка меню в хедере
const pageBody = $('.page__body'); // Тело страницы
const navLink = $('.nav__link'); // Ссылки внешнего меню

// Функции открытия и скрытия внешнего меню
const activateNav = () => pageBody.addClass('page__body_open-nav');
const inactivateNav = () => pageBody.removeClass('page__body_open-nav');

// Клик по кнопке меню
navButton.click(activateNav);

// Клик по ссылке внешнего меню
navLink.click(function(evt) {
  evt.preventDefault();

  const $this = $(this);
  const $key = $this.data('key');
  screenCounter = $key;

  refreshLinks($key);
  switchScreen($this);
  inactivateNav();
});

// Сброс внешнего меню по нажатию Esc
$(document).keyup(function(e) {
  if (e.key === "Escape") inactivateNav();
});
