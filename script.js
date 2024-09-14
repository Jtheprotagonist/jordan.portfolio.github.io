// Existing Carousel Code
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

// New toggleAnswer Code for New Section
function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer-${questionNumber}`);

  // Check if the answer is currently displayed, and toggle its visibility
  if (answer.style.display === "none") {
    answer.style.display = "block"; // Show answer
  } else {
    answer.style.display = "none"; // Hide answer
  }
}
