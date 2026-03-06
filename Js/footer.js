// Animación al hacer scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Parallax suave
const footer = document.querySelector(".parallax-footer");

window.addEventListener("scroll", () => {
  const offset = window.scrollY;
  footer.style.setProperty("--scroll", offset);
  footer.style.setProperty(
    "transform",
    `translateY(${offset * 0.05}px)`
  );
});

const backToTopBtn = document.getElementById("backToTop");

// Mostrar botón al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll suave hacia arriba
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
