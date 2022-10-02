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

// Модальное окно
/* const initModal = function() {
  const openButton = document.querySelector('.open-button');
  const modal = document.querySelector('.modal');

  openButton.addEventListener('click', function() {
    modal.classList.add('active');

    const closeButton = modal.querySelector('.modal__close-button');

    closeButton.addEventListener('click', function() {
      modal.classList.remove('active')
    })
  }
}

initModal(); */

const worksSlider = document.querySelector('.work__swiper');
const swiper = new Swiper(worksSlider, {

  slidesPerView: 1,

  pagination: {
    el: '.work__toggles',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper__button-prev button',
    prevEl: '.swiper__button-next button',
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
    }
  }
});

///

const textBlocks = document.querySelectorAll('.text-block');

const initTextBlock = (block) => {
  const showMoreButton = block.querySelector('.text-block__button');
  const textBlock = block.querySelector('.text-block__text');
  let isTextVisible = false;

  showMoreButton.addEventListener('click', function() {
    if (isTextVisible) {
      textBlock.style.maxHeight = '200px';
      showMoreButton.textContent = 'Подробнее';
      showMoreButton.classList.add('closed');
    } else {
      textBlock.style.maxHeight = 'unset';
      showMoreButton.textContent = 'Свернуть';
      showMoreButton.classList.remove('closed');
    }
    isTextVisible = !isTextVisible;
  })
}

textBlocks.forEach((block) => initTextBlock(block));

