/* === Part 2: Functions with Scope, Parameters & Return Values === */

// Global scope variable
let clickCount = 0;

// Function with parameters & return value
function multiply(a, b) {
  return a * b;
}

// Demonstrating local scope
function logMessage(message) {
  let localVar = "Local scope active!";
  console.log(localVar, message);
}

/* === Part 3: Combining CSS + JS === */

// Animate box when button clicked
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", () => {
  clickCount++;
  logMessage(`Button clicked ${clickCount} times`);

  // Toggle class using function
  toggleAnimation(box, "animate");

  // Example usage of multiply()
  console.log("2 * 3 =", multiply(2, 3));
});

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

/* === Modal Example === */
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

