document.addEventListener("DOMContentLoaded", function () {
  const danzas = document.querySelectorAll(".danza");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  danzas.forEach((danza) => {
    observer.observe(danza);
  });
});

/* Galería */
const fotos = document.querySelectorAll(".foto img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

function showImage(index){
  lightboxImg.src = fotos[index].src;

  const titulo = fotos[index].parentElement.querySelector("p").textContent;
  document.getElementById("lightboxTitle").textContent = titulo;
}

fotos.forEach((foto, index)=>{
  foto.addEventListener("click", ()=>{
    currentIndex = index;
    showImage(currentIndex);
    lightbox.classList.add("show");
  });
});

closeLightbox.addEventListener("click", ()=>{
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e)=>{
  if(e.target === lightbox){
    lightbox.classList.remove("show");
  }
});

next.addEventListener("click", ()=>{
  currentIndex++;
  if(currentIndex >= fotos.length){
    currentIndex = 0;
  }
  showImage(currentIndex);
});

prev.addEventListener("click", ()=>{
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = fotos.length - 1;
  }
  showImage(currentIndex);
});