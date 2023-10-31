document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    let translateValue = 0;

    document.querySelector(".next").addEventListener("click", function() {
        if (translateValue > -200) {
            translateValue -= 100;
            slider.style.transform = `translateX(${translateValue}%)`;
        }
    });

    document.querySelector(".prev").addEventListener("click", function() {
        if (translateValue < 0) {
            translateValue += 100;
            slider.style.transform = `translateX(${translateValue}%)`;
        }
    });
});
