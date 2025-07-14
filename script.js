// Menú principal del bar
const menuPrincipal = [
  { 
    nombre: "Cerveza Artesanal", 
    precio: 4.50, 
    descripcion: "Selección local de barril",
    icono: "🍺"
  },
  { 
    nombre: "Margarita Clásica", 
    precio: 6.00, 
    descripcion: "Tequila, triple sec y lima fresca",
    icono: "🍸"
  },
  { 
    nombre: "Tabla de Quesos", 
    precio: 8.50, 
    descripcion: "Selección de quesos con acompañamientos",
    icono: "🧀"
  }
];

// Especiales del chef (se añaden aleatoriamente)
const especialesChef = [
  { 
    nombre: "Cóctel Especial", 
    precio: 7.50, 
    descripcion: "La creación exclusiva del bartender",
    icono: "🍹"
  },
  { 
    nombre: "Plato del Día", 
    precio: 9.00, 
    descripcion: "Preparación especial según temporada",
    icono: "🍛"
  },
  { 
    nombre: "Postre Sorpresa", 
    precio: 5.00, 
    descripcion: "Dulce tentación del chef",
    icono: "🍮"
  },
  { 
    nombre: "Vino Premium", 
    precio: 8.00, 
    descripcion: "Copa de nuestra selección reserva",
    icono: "🍷"
  }
];

// Función para mostrar el menú
function mostrarMenu() {
  const lista = document.getElementById('lista-productos');
  lista.innerHTML = '';
  
  menuPrincipal.forEach(producto => {
    const item = document.createElement('li');
    item.innerHTML = `
      <span class="producto-icono" style="font-size: 2rem;">${producto.icono}</span>
      <div class="producto-info">
        <div class="producto-nombre">${producto.nombre}</div>
        <div class="producto-desc">${producto.descripcion}</div>
      </div>
      <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
    `;
    lista.appendChild(item);
  });
}

// Función para agregar un especial del chef
function agregarEspecial() {
  const lista = document.getElementById('lista-productos');
  const especialAleatorio = especialesChef[Math.floor(Math.random() * especialesChef.length)];
  
  const item = document.createElement('li');
  item.classList.add('nuevo-especial');
  item.innerHTML = `
    <span class="producto-icono" style="font-size: 2rem; color: #e63946;">${especialAleatorio.icono}</span>
    <div class="producto-info">
      <div class="producto-nombre" style="color: #e63946;">${especialAleatorio.nombre}</div>
      <div class="producto-desc">${especialAleatorio.descripcion}</div>
    </div>
    <div class="producto-precio" style="color: #e63946;">$${especialAleatorio.precio.toFixed(2)}</div>
  `;
  
  lista.appendChild(item);
  
  // Animación para el nuevo elemento
  setTimeout(() => {
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  }, 10);
}

// Evento para el botón
document.getElementById('btn-agregar').addEventListener('click', agregarEspecial);

// Inicializar el menú al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarMenu();
  
  // Efecto de carga inicial para los items
  const items = document.querySelectorAll('#lista-productos li');
  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 100 + (index * 100));
  });
});