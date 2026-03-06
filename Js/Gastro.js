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

// FADE
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{threshold:0.2});

fades.forEach(el=>observer.observe(el));

/* Leer más */
const botonesLeer = document.querySelectorAll(".leer-mas");

botonesLeer.forEach(boton=>{
  boton.addEventListener("click", function(){

    const blog = this.closest(".blog-1");

    blog.classList.toggle("active");

    if(blog.classList.contains("active")){
      this.textContent = "Leer menos";
    } else {
      this.textContent = "Leer más";
    }

  });
});

document.querySelectorAll(".leer-mas").forEach(boton => {
    boton.addEventListener("click", function() {
        const extraTexto = this.parentElement.querySelector(".extra");
        
        extraTexto.classList.toggle("show");

        // Cambiar texto del botón
        if (extraTexto.classList.contains("show")) {
            this.textContent = "Leer menos";
        } else {
            this.textContent = "Leer más";
        }
    });
});