const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselItems.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  const translateX = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateX}%)`;
}
