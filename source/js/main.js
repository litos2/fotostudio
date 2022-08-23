// function initLines() {
// 	new LeaderLine(
//     document.getElementById('element-1'),
//     document.getElementById('element-2'),
//     document.getElementById('element-3'),
//     document.getElementById('element-4'),
//     document.getElementById('element-5'),
//     {
//       color: 'red',
// 			size: 8,
// 			dash: true
// 	});
// }

// initLines();

const workSlider = new Swiper('.work__swiper', {
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

const photoSlider = new Swiper('.slder__swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    navigation: {
      nextEl: '',
      prevEl: ''
    }
  },
});