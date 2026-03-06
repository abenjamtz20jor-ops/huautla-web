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