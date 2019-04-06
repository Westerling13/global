import Swiper from 'swiper';

const slider = new Swiper('#works-slider', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  slideActiveClass: 'works__item_active',
  slideNextClass: 'works__item_next',
  slidePrevClass: 'works__item_prev'

});
