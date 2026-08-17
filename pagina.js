const productos = [
  {
    nombre: "Mini limas",
    descripcion: "Limas de tamaño mini, ideales para manicure portátil.",
    precio: "$1,150",
    precioNumerico: 1150,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-1.png",
    color: "linear-gradient(135deg, #ffd2a3, #ffb84d)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Mini limas"
  },
  {
    nombre: "Labial maté",
    descripcion: "Labial con acabado mate de larga duración.",
    precio: "$1,800",
    precioNumerico: 1800,
    etiqueta: "Labios",
    imagen: "img-paginas/img-2 .png",
    color: "linear-gradient(135deg, #d84f6f, #a93a5c)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Labial maté"
  },
  {
    nombre: "Labial Brillos (Fluffy Lips)",
    descripcion: "Labial con acabado brilloso y efecto fluffy.",
    precio: "$2,200",
    precioNumerico: 2200,
    etiqueta: "Labios",
    imagen: "img-paginas/img-3.png",
    color: "linear-gradient(135deg, #ff8bb4, #ff6b9d)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Labial Brillos (Fluffy Lips)"
  },
  {
    nombre: "Polvo de Hadas",
    descripcion: "Polvo translúcido con efecto iluminador.",
    precio: "$2,200",
    precioNumerico: 2200,
    etiqueta: "Rostro",
    imagen: "img-paginas/img-4.png",
    color: "linear-gradient(135deg, #ffd4e5, #ffe4f0)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Polvo de Hadas"
  },
  {
    nombre: "Espejo Plegable Kawaii",
    descripcion: "Espejo plegable con diseño adorable.",
    precio: "$3,900",
    precioNumerico: 3900,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-5.png",
    color: "linear-gradient(135deg, #ffc4d8, #ffb5cc)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Espejo Plegable Kawaii"
  },
  {
    nombre: "Multiuso lipliner (Delineador de labios)",
    descripcion: "Delineador multiuso para labios de precisión.",
    precio: "$1,100",
    precioNumerico: 1100,
    etiqueta: "Labios",
    imagen: "img-paginas/img-6.jpg",
    color: "linear-gradient(135deg, #8e5c7f, #6b4157)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Multiuso lipliner"
  },
  {
    nombre: "Esponjas mini",
    descripcion: "Esponjas de maquillaje en tamaño mini.",
    precio: "$2,300",
    precioNumerico: 2300,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-7.jpg",
    color: "linear-gradient(135deg, #d9d0ff, #a58ce9)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Esponjas mini"
  },
  {
    nombre: "Tejar makeup color (Sombras)",
    descripcion: "Paleta de sombras con múltiples tonos.",
    precio: "$4,000",
    precioNumerico: 4000,
    etiqueta: "Ojos",
    imagen: "img-paginas/img-8.png",
    color: "linear-gradient(135deg, #9a7dff, #6d5ef6)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Tejar makeup color"
  },
  {
    nombre: "Arqueadores",
    descripcion: "Arqueadores para pestañas de calidad profesional.",
    precio: "$2,400",
    precioNumerico: 2400,
    etiqueta: "Ojos",
    imagen: "img-paginas/img-9.jpg",
    color: "linear-gradient(135deg, #c2a6ff, #7b7cf8)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Arqueadores"
  },
  {
    nombre: "Prencitas de mariposa",
    descripcion: "Set de prencitas con diseño de mariposa (pack 6).",
    precio: "$3,200",
    precioNumerico: 3200,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-10.png",
    color: "linear-gradient(135deg, #f7b7d2, #d46bb3)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Prencitas de mariposa"
  },
  {
    nombre: "Prencitas de flor",
    descripcion: "Set de prencitas con diseño de flor (pack 6).",
    precio: "$3,100",
    precioNumerico: 3100,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-11.png",
    color: "linear-gradient(135deg, #ffb5c7, #ff7a9a)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Prencitas de flor"
  },
  {
    nombre: "Prensas grandes y chicas (Mate)",
    descripcion: "Set de prensas para cabello en tamaño grande y chico (pack 6).",
    precio: "$4,150",
    precioNumerico: 4150,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-12.jpg",
    color: "linear-gradient(135deg, #b6d8ff, #7ea9ff)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Prensas grandes y chicas"
  },
  {
    nombre: "Prensas grandes de estrella",
    descripcion: "Prensas grandes con diseño de estrella.",
    precio: "$3,400",
    precioNumerico: 3400,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-13.jpg",
    color: "linear-gradient(135deg, #ffe2a8, #f6c76d)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Prensas grandes de estrella"
  },
  {
    nombre: "Mascarilla para puntos negros",
    descripcion: "Mascarilla efectiva para limpiar puntos negros.",
    precio: "$750",
    precioNumerico: 750,
    etiqueta: "Skincare",
    imagen: "img-paginas/img-14.png",
    color: "linear-gradient(135deg, #1a1a2e, #16213e)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Mascarilla para puntos negros"
  },
  {
    nombre: "Mascarilla kakaziyan",
    descripcion: "Mascarilla de kakaziyan para cuidado facial.",
    precio: "$1,600",
    precioNumerico: 1600,
    etiqueta: "Skincare",
    imagen: "img-paginas/img-15.jpg",
    color: "linear-gradient(135deg, #8b7355, #6b5344)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Mascarilla kakaziyan"
  },
  {
    nombre: "Vinchas para skincare",
    descripcion: "Vinchas cómodas para cuidado facial.",
    precio: "$4,000",
    precioNumerico: 4000,
    etiqueta: "Skincare",
    imagen: "img-paginas/img-16.png",
    color: "linear-gradient(135deg, #ffd6c2, #ff9b7e)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Vinchas para skincare"
  },
  {
    nombre: "Gomitas (Colores y negras)",
    descripcion: "Pack de gomitas en varios colores y negras.",
    precio: "$3,700",
    precioNumerico: 3700,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-17.png",
    color: "linear-gradient(135deg, #ff6b9d, #ffa3c7)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Gomitas"
  },
  {
    nombre: "Gomas Grandes (Set Colitas)",
    descripcion: "Set de gomas grandes para coletas.",
    precio: "$7,250",
    precioNumerico: 7250,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-18.png",
    color: "linear-gradient(135deg, #b6d8ff, #7ea9ff)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Gomas Grandes"
  },
  {
    nombre: "SET brochas",
    descripcion: "Set completo de brochas para maquillaje.",
    precio: "$3,200",
    precioNumerico: 3200,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-19.jpg",
    color: "linear-gradient(135deg, #cdb4ff, #8a63ff)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar SET brochas"
  },
  {
    nombre: "Anillos",
    descripcion: "Anillos con diseños variados.",
    precio: "$1,500",
    precioNumerico: 1500,
    etiqueta: "Accesorios",
    imagen: "img-paginas/img-21.jpg",
    color: "linear-gradient(135deg, #ffd59a, #ffab67)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Anillos"
  },
  {
    nombre: "Manteca de cacao",
    descripcion: "Manteca de cacao pura para cuidado de labios y piel.",
    precio: "$1,500",
    precioNumerico: 1500,
    etiqueta: "Labios",
    imagen: "img-paginas/img-20.png",
    color: "linear-gradient(135deg, #d4a574, #c8915a)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar Manteca de cacao"
  }
];

const combos = [
  {
    nombre: "Polvo de Hadas + Lipgloss",
    descripcion: "Combo de polvo iluminador con labial brilloso.",
    items: ["Polvo de Hadas", "Labial Brillos (Fluffy Lips)"],
    precio: "$4,500",
    precioNumerico: 4500,
    etiqueta: "Popular",
    imagen: "img-paginas/combo-1.png",
    color: "linear-gradient(135deg, #ffd4e5, #ffb5cc)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar el combo Polvo de Hadas + Lipgloss"
  },
  {
    nombre: "Gomitas Negras + Gomas Grandes + Gomitas Colores",
    descripcion: "Pack completo de accesorios para el cabello.",
    items: ["Gomitas (Colores y negras)", "Gomas Grandes (Set Colitas)"],
    precio: "$4,000",
    precioNumerico: 4000,
    etiqueta: "Oferta",
    imagen: "img-paginas/combo-2.png",
    color: "linear-gradient(135deg, #ff6b9d, #ffa3c7)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar el combo Gomitas + Gomas Grandes"
  },
  {
    nombre: "Labial Mate + Lipgloss",
    descripcion: "Combo de labiales mate y brilloso.",
    items: ["Labial maté", "Labial Brillos (Fluffy Lips)"],
    precio: "$3,990",
    precioNumerico: 3990,
    etiqueta: "Bestseller",
    imagen: "img-paginas/combo-3.png",
    color: "linear-gradient(135deg, #d84f6f, #ff8bb4)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar el combo Labial Mate + Lipgloss"
  },
  {
    nombre: "Vincha Skincare + Mascarillas",
    descripcion: "Pack completo para tu rutina de cuidado facial.",
    items: ["Vinchas para skincare", "Mascarilla kakaziyan", "Mascarilla para puntos negros"],
    precio: "$6,300",
    precioNumerico: 6300,
    etiqueta: "Skincare",
    imagen: "img-paginas/combo-4.jpg",
    color: "linear-gradient(135deg, #8b7355, #c7a589)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar el combo Vincha Skincare + Mascarillas"
  },
  {
    nombre: "Set Brochas + Paleta Sombras + Espejo",
    descripcion: "Kit completo para maquillaje profesional.",
    items: ["SET brochas", "Tejar makeup color (Sombras)", "Espejo Plegable Kawaii"],
    precio: "$11,100",
    precioNumerico: 11100,
    etiqueta: "Premium",
    imagen: "img-paginas/combo-5.jpg",
    color: "linear-gradient(135deg, #9a7dff, #ffc4d8)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar el combo Set Brochas + Paleta + Espejo"
  },
  {
    nombre: "Prensa Estrella + Gomitas Variadas",
    descripcion: "Set de accesorios para cabello con estilo.",
    items: ["Prensas grandes de estrella", "Gomitas (Colores y negras)", "Gomas Grandes (Set Colitas)"],
    precio: "$5,014",
    precioNumerico: 5014,
    etiqueta: "Favorito",
    imagen: "img-paginas/combo-6.jpg",
    color: "linear-gradient(135deg, #ffe2a8, #ff6b9d)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar el combo Prensa Estrella + Gomitas"
  },
  {
    nombre: "Delineador + Labiales + Gomitas",
    descripcion: "Combo de labios con accesorios para el cabello.",
    items: ["Multiuso lipliner (Delineador de labios)", "Labial maté", "Labial Brillos (Fluffy Lips)", "Gomitas (Colores y negras)", "Gomas Grandes (Set Colitas)"],
    precio: "$4,000",
    precioNumerico: 4000,
    etiqueta: "Full Pack",
    imagen: "img-paginas/combo-7.jpg",
    color: "linear-gradient(135deg, #8e5c7f, #ff8bb4)",
    numero: "5493513446488",
    mensaje: "Hola, quiero comprar el combo Delineador + Labiales + Gomitas"
  }
];

const contenedorProductos = document.getElementById("productos");
const contenedorCombos = document.getElementById("combos");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadorCarrito();
}

function agregarAlCarrito(producto) {
  const itemExistente = carrito.find(item => item.nombre === producto.nombre);
  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarCarrito();
  mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

function actualizarContadorCarrito() {
  const contador = carrito.reduce((total, item) => total + item.cantidad, 0);
  const badge = document.getElementById("carrito-badge");
  if (badge) {
    badge.textContent = contador;
    badge.style.display = contador > 0 ? "flex" : "none";
  }
}

function mostrarNotificacion(mensaje) {
  const notif = document.createElement("div");
  notif.className = "notificacion";
  notif.textContent = mensaje;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2000);
}

function crearCardProducto(producto) {
  const card = document.createElement("article");
  card.className = "product-card";

  const whatsappUrl = `https://wa.me/${producto.numero}?text=${encodeURIComponent(producto.mensaje)}`;
  const imagenProducto = producto.imagen || producto.image || producto.Image || "";
  const visual = imagenProducto
    ? `<img class="product-image" src="${imagenProducto}" alt="${producto.nombre}" />`
    : `<div class="product-visual" style="background: ${producto.color};">${producto.emoji || "✨"}</div>`;

  card.innerHTML = `
    ${visual}
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <div class="product-meta">
      <span class="product-price">${producto.precio}</span>
      <span class="product-tag">${producto.etiqueta}</span>
    </div>
    <div class="product-actions">
      <button class="cart-btn" data-producto='${JSON.stringify(producto)}'> 🛒 Agregar al carrito</button>
      <a class="product-btn" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"> Comprar por WhatsApp</a>
    </div>
  `;

  const btnCarrito = card.querySelector(".cart-btn");
  btnCarrito.addEventListener("click", function() {
    agregarAlCarrito(producto);
  });

  return card;
}

function crearCardCombo(combo) {
  const card = document.createElement("article");
  card.className = "combo-card";

  const whatsappUrl = `https://wa.me/${combo.numero}?text=${encodeURIComponent(combo.mensaje)}`;
  const imagenCombo = combo.imagen || combo.image || combo.Image || "";
  const visualCombo = imagenCombo
    ? `<img class="combo-image" src="${imagenCombo}" alt="${combo.nombre}" />`
    : `<div class="combo-visual" style="background: ${combo.color};">${combo.emoji || "✨"}</div>`;

  card.innerHTML = `
    ${visualCombo}
    <h3>${combo.nombre}</h3>
    <p>${combo.descripcion}</p>
    <ul class="combo-list">
      ${combo.items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <div class="combo-meta">
      <span class="combo-price">${combo.precio}</span>
      <span class="combo-tag">${combo.etiqueta}</span> 
      </div>
    <a class="product-btn" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"> Pedir combo por WhatsApp </a>
  `;
  return card;
}

productos.forEach((producto) => {
  contenedorProductos.appendChild(crearCardProducto(producto));
});

combos.forEach((combo) => {
  contenedorCombos.appendChild(crearCardCombo(combo));
});

actualizarContadorCarrito();
