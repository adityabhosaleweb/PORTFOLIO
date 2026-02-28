const text = ["Web Developer", "Agency Owner", "Freelancer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  if (!isDeleting && charIndex <= text[index].length) {
    currentText = text[index].substring(0, charIndex++);
  } else if (isDeleting && charIndex >= 0) {
    currentText = text[index].substring(0, charIndex--);
  }

  typingElement.textContent = currentText;

  if (!isDeleting && charIndex === text[index].length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

/* SCROLL REVEAL */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}