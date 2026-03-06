const form = document.getElementById("comentarioForm");
const lista = document.getElementById("listaComentarios");
const estrellas = document.querySelectorAll(".rating span");

let ratingSeleccionado = 0;
let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

/* ⭐ SISTEMA DE ESTRELLAS */
estrellas.forEach(star => {
  star.addEventListener("click", () => {
    ratingSeleccionado = star.getAttribute("data-value");
    estrellas.forEach(s => s.classList.remove("active"));
    for(let i = 0; i < ratingSeleccionado; i++){
      estrellas[i].classList.add("active");
    }
  });
});

function mostrarComentarios(){
    lista.innerHTML = "";
    comentarios.forEach((comentario, index) => {
  
      const div = document.createElement("div");
      div.classList.add("comentario");
  
      const estrellasHTML = "★".repeat(comentario.rating);
  
      div.innerHTML = `
        <div class="avatar">${comentario.nombre.charAt(0).toUpperCase()}</div>
        <div class="comentario-content">
          <h4>${comentario.nombre}</h4>
          <div class="estrellas">${estrellasHTML}</div>
          <p>${comentario.mensaje}</p>
        </div>
        <button class="delete-btn" data-index="${index}">🗑</button>
      `;
  
      lista.appendChild(div);
  
      setTimeout(() => {
        div.classList.add("show");
      }, 100);
    });
  
    activarEliminar();
  }

  function activarEliminar(){
    const botones = document.querySelectorAll(".delete-btn");
  
    botones.forEach(btn => {
      btn.addEventListener("click", () => {
  
        const index = btn.getAttribute("data-index");
        const comentarioElemento = btn.closest(".comentario");
  
        comentarioElemento.classList.add("removing");
  
        setTimeout(() => {
          comentarios.splice(index, 1);
          localStorage.setItem("comentarios", JSON.stringify(comentarios));
          mostrarComentarios();
        }, 400);
  
      });
    });
  }

/* GUARDAR */
form.addEventListener("submit", e => {
  e.preventDefault();

  if(ratingSeleccionado == 0){
    alert("Selecciona una calificación ⭐");
    return;
  }

  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  const nuevoComentario = {
    nombre,
    mensaje,
    rating: ratingSeleccionado
  };

  comentarios.unshift(nuevoComentario);
  localStorage.setItem("comentarios", JSON.stringify(comentarios));

  form.reset();
  estrellas.forEach(s => s.classList.remove("active"));
  ratingSeleccionado = 0;

  mostrarComentarios();
});

/* REVEAL AL HACER SCROLL */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/* INICIAL */
mostrarComentarios();