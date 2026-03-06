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

// PARALLAX
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".parallax img").forEach(img=>{
    img.style.transform =
      `translateY(${window.scrollY * 0.02}px) scale(1.03)`;
  });
});

// ===== MAPA =====

document.addEventListener("DOMContentLoaded", function(){

  // ===== INICIALIZAR MAPA =====
  const map = L.map('map').setView([18.1314, -96.8403], 13);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  // ===== ELEMENTOS PANEL =====
  const infoImg = document.getElementById("infoImg");
  const infoTitle = document.getElementById("infoTitle");
  const infoDesc = document.getElementById("infoDesc");

  // ===== JSON DE LUGARES =====
  const lugaresHuautla = [
    // 🌿 NATURALEZA
    {
      nombre: "Cerro de la Adoración",
      categoria: "naturaleza",
      emoji: "🌿",
      coords: [18.1362, -96.8451],
      descripcion: "Mirador espiritual donde la neblina envuelve el paisaje.",
      imagen: "Fotos/Cerro.png",
    },
    {
      nombre: "Cascada Puente de Fierro",
      categoria: "naturaleza",
      emoji: "🌿",
      coords: [18.1405, -96.82],
      descripcion: "Cascada rodeada de vegetación ideal para caminatas.",
      imagen: "Fotos/cascadas.png",
    },

    // 🕳️ CUEVAS
    {
      nombre: "Sistema Huautla",
      categoria: "cuevas",
      emoji: "🕳️",
      coords: [18.1208, -96.833],
      descripcion: "Uno de los sistemas de cuevas más profundos de América.",
      imagen: "Fotos/Cu-3.jpg",
    },

    // 🏘️ CULTURA
    {
      nombre: "Casa Museo María Sabina",
      categoria: "comunidades",
      emoji: "🏘️",
      coords: [18.131, -96.84],
      descripcion: "Espacio dedicado al legado espiritual mazateco.",
      imagen: "Fotos/Huautla.jpg",
    },
    {
      nombre: "Mercado Municipal",
      categoria: "comunidades",
      emoji: "🏘️",
      coords: [18.132, -96.8408],
      descripcion: "Centro gastronómico y artesanal del pueblo.",
      imagen: "Fotos/Huautla.jpg",
    },

    // 🏨 HOTELES
    {
      nombre: "Hotel El Rincón Mazateco",
      categoria: "hoteles",
      emoji: "🏨",
      coords: [18.133, -96.8385],
      descripcion: "Cabañas acogedoras con ambiente natural.",
      imagen: "Fotos/Huautla.jpg",
    },
    {
      nombre: "Casa Cejota",
      categoria: "hoteles",
      emoji: "🏨",
      coords: [18.1305, -96.841],
      descripcion: "Hospedaje con estilo tradicional.",
      imagen: "Fotos/Huautla.jpg",
    },

    // 🌿 MÁS NATURALEZA
    {
      nombre: "Loma de Chapultepec",
      categoria: "naturaleza",
      emoji: "🌿",
      coords: [18.1375, -96.847],
      descripcion:
        "Mirador natural con vistas panorámicas del valle y el pueblo.",
      imagen: "Fotos/arton25391.webp",
    },
    {
      nombre: "Bosques de Niebla",
      categoria: "naturaleza",
      emoji: "🌿",
      coords: [18.145, -96.86],
      descripcion:
        "Senderos entre neblina y vegetación densa, ideales para caminatas contemplativas.",
      imagen: "Fotos/Huautla.jpg",
    },
    {
      nombre: "Río Grande",
      categoria: "naturaleza",
      emoji: "🌿",
      coords: [18.118, -96.82],
      descripcion:
        "Zona natural de agua corriente perfecta para descanso y fotografía.",
      imagen: "Fotos/cascadas.png",
    },

    // 🕳️ MÁS CUEVAS
    {
      nombre: "Sótano de San Sebastián",
      categoria: "cuevas",
      emoji: "🕳️",
      coords: [18.116, -96.829],
      descripcion:
        "Impresionante cavidad natural asociada a exploración profunda.",
      imagen: "Fotos/Sis.jpg",
    },
    {
      nombre: "Gruta La Carlota",
      categoria: "cuevas",
      emoji: "🕳️",
      coords: [18.1195, -96.835],
      descripcion: "Cueva con formaciones rocosas y ambiente místico.",
      imagen: "Fotos/Cu-1.webp",
    },

    // 🏘️ MÁS CULTURA
    {
      nombre: "Catedral San Juan Evangelista",
      categoria: "comunidades",
      emoji: "🏘️",
      coords: [18.1315, -96.8395],
      descripcion: "Templo emblemático ubicado en el centro del municipio.",
      imagen: "Fotos/Huautla.jpg",
    },
    {
      nombre: "Torre del Reloj",
      categoria: "comunidades",
      emoji: "🏘️",
      coords: [18.1322, -96.8398],
      descripcion: "Estructura histórica representativa del pueblo.",
      imagen: "Fotos/Huautla.jpg",
    },
    {
      nombre: "Casa de Cultura",
      categoria: "comunidades",
      emoji: "🏘️",
      coords: [18.1308, -96.8415],
      descripcion:
        "Espacio de talleres, arte y preservación cultural mazateca.",
      imagen: "Fotos/Huautla.jpg",
    },

    // 🏨 MÁS HOTELES
    {
      nombre: "Hotel Casa ENPI",
      categoria: "hoteles",
      emoji: "🏨",
      coords: [18.1328, -96.838],
      descripcion: "Hospedaje tradicional en el centro del pueblo.",
      imagen: "Fotos/Huautla.jpg",
    },
    {
      nombre: "Hotel 1 de Mayo",
      categoria: "hoteles",
      emoji: "🏨",
      coords: [18.1318, -96.8402],
      descripcion: "Opción económica ubicada en zona céntrica.",
      imagen: "Fotos/Huautla.jpg",
    },
    {
      nombre: "Hotel Olímpico",
      categoria: "hoteles",
      emoji: "🏨",
      coords: [18.1335, -96.839],
      descripcion: "Hotel local con acceso rápido al centro.",
      imagen: "Fotos/Huautla.jpg",
    },
    {
      nombre: "Rancho San Lorenzo",
      categoria: "hoteles",
      emoji: "🏨",
      coords: [18.1455, -96.87],
      descripcion: "Cabañas ecológicas rodeadas de naturaleza.",
      imagen: "Fotos/Huautla.jpg",
    },
  ];

  // ===== CREAR MARCADORES =====
  lugaresHuautla.forEach((lugar) => {
    const icon = L.divIcon({
      html: `<div class="marker ${lugar.categoria}">${lugar.emoji}</div>`,
      className: "",
      iconSize: [30, 30],
    });

    const marker = L.marker(lugar.coords, { icon }).addTo(map);

    marker.on("click", () => {
      map.flyTo(lugar.coords, 16, {
        duration: 1.5,
      });

      document.querySelector(".map-info").style.opacity = 0;

      setTimeout(() => {
        infoImg.src = lugar.imagen;
        infoTitle.textContent = lugar.nombre;
        infoDesc.textContent = lugar.descripcion;

        document.querySelector(".map-info").style.opacity = 1;
      }, 400);
    });
  });
});