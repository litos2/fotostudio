const worksSlider = document.querySelector('.work__swiper');
const swiper = new Swiper(worksSlider, {
  loop: true,

  pagination: {
    el: '.work__toggles',
  },

  navigation: {
    nextEl: '.swiper__button-prev button',
    prevEl: '.swiper__button-next button',
  }
});
