// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.querySelector(".slider");
//     let translateValue = 0;

//     document.querySelector(".next").addEventListener("click", function() {
//         if (translateValue > -200) {
//             translateValue -= 100;
//             slider.style.transform = `translateX(${translateValue}%)`;
//         }
//     });

//     document.querySelector(".prev").addEventListener("click", function() {
//         if (translateValue < 0) {
//             translateValue += 100;
//             slider.style.transform = `translateX(${translateValue}%)`;
//         }
//     });
// });
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');

let counter = 0;
const slideWidth = document.querySelector('.slide').clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter < 8) {
        counter++;
        slides.style.transform = `translateX(${-counter * slideWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        slides.style.transform = `translateX(${-counter * slideWidth}px)`;
    }
});
