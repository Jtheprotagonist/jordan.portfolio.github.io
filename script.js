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

document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active"); // Toggle the 'active' class
  });

// JavaScript to handle the toggle functionality
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
