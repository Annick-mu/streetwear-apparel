// Basic JavaScript for automatic sliding
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showSlide, 3000); // Changes slide every 3 seconds
