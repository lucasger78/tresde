

///////////// PORTFOLIO ////////////
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = document.querySelectorAll('.slide').length - 1;
  }
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  if (slideIndex < document.querySelectorAll('.slide').length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  const slideWidth = document.querySelector('.slide').offsetWidth + 10;
  slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}
