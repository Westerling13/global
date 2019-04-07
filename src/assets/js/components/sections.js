import $ from 'jquery';

const sidebarLink = $('.sidebar__link'); // Ссылки сайдбара
const pageScreen = $('.page__screen'); // Экраны
const hireButton = $('.header__button'); // Кнопка в хедере
window.screenCounter = 0; // Счетчик текущего экрана

// Функция переключения экранов
window.switchScreen = function(target) {
  const targetScreen = target.attr('href');
  if(targetScreen === '#home') {
    hireButton.removeClass('header__button_active');
  } else {
    hireButton.addClass('header__button_active');
  }
  pageScreen.removeClass('page__screen_active');
  $(targetScreen).addClass('page__screen_active');
};

// Функция сброса активных ссылок
window.refreshLinks = function(key) {
  const navLink = $('.nav__link');
  const sidebarLink = $('.sidebar__link');
  navLink.removeClass('nav__link_active');
  sidebarLink.removeClass('sidebar__link_active');
  navLink.eq(key).addClass('nav__link_active');
  sidebarLink.eq(key).addClass('sidebar__link_active');
};

// Клик по ссылке сайдбара
sidebarLink.click(function(evt) {
  evt.preventDefault();
  const $this = $(this);
  const key = $this.data('key');
  screenCounter = $(this).data('key');
  sidebarLink.blur();
  refreshLinks(key);

  switchScreen($this);
});

// Событие прокрутки колесика мыши
window.addEventListener('wheel', function(evt) {
  evt.preventDefault();
  if (evt.deltaY > 0) {
    screenCounter += 1;
    if (screenCounter > 4) screenCounter = 0;
    const target = sidebarLink.eq(screenCounter);
    refreshLinks(screenCounter);
    switchScreen(target);
  } else {
    screenCounter -= 1;
    if (screenCounter < -4) screenCounter = 0;
    const target = sidebarLink.eq(screenCounter);
    refreshLinks(screenCounter);
    switchScreen(target);
  }
});
