// Получаем содержимое слайдеров
let container = document.querySelector('.scrolling-container');
let container2 = document.querySelector('.slider2 .scrolling-container2');

// получаем кнопки второго слайдера
let scrollLeftBtn = document.getElementById('scroll-left');
let scrollRightBtn = document.getElementById('scroll-right');

// получаем кнопки второго слайдера
let scrollLeftBtn2 = document.getElementById('scroll-left-2');
let scrollRightBtn2 = document.getElementById('scroll-right-2');

let isAnimating = false; // Флаг для проверки статуса анимации

// Добавляем обработчики событий для кнопок первого слайдера
scrollLeftBtn.addEventListener('click', function() {
  if (!isAnimating) {
    smoothScroll(container, 'left');
  }
});

scrollRightBtn.addEventListener('click', function() {
  if (!isAnimating) {
    smoothScroll(container, 'right');
  }
});

// Добавляем обработчики событий для кнопок второго слайдера
scrollLeftBtn2.addEventListener('click', function() {
  if (!isAnimating) {
    smoothScroll(container2, 'left');
  }
});

scrollRightBtn2.addEventListener('click', function() {
  if (!isAnimating) {
    smoothScroll(container2, 'right');
  }
});
// делаем плавную прокрутку слайдера
function smoothScroll(element, direction) {
  let scrollAmount = 0;
  let scrollStep = 10;
  let speed = 15;
  let distance = element.offsetWidth;
  let scrollInterval;

  if (direction === 'left') {
    scrollStep *= -1;
  }

  isAnimating = true; // Устанавливаем флаг в состояние анимации

  scrollInterval = setInterval(function() {
    element.scrollLeft += scrollStep;
    scrollAmount += Math.abs(scrollStep);

    if (scrollAmount >= distance) {
      clearInterval(scrollInterval);
      isAnimating = false; // Анимация завершена, снимаем флаг анимации
    }
  }, speed);
}