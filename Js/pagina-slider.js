const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const links = menu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// cerrar menú al dar click en un link
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('open');
  });
});
//JavaScript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slider");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slide) => {
        slide.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });

    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
    contents[manual].classList.add("active")
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderNav(i);
    });
});