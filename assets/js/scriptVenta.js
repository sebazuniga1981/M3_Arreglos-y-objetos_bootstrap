import propiedadesVenta from "./data/propiedadesVenta.js"

window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("venta")) {
    renderizarPropiedades(propiedadesVenta, "venta");
  }
});

function renderizarPropiedades(propiedades, contenedorId, limite = propiedades.length) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = "";

  for (let i = 0; i < limite; i++) {
    const propiedad = propiedades[i];

    contenedor.innerHTML += `
    <div class ="col-md-4">
    <div class="card h-100 shadow-sm>
      <div class="propiedad">
        <img src="${propiedad.src}" alt="${propiedad.title}">
        <h2>${propiedad.title}</h2>
        <p>${propiedad.description}</p>
        <p><strong>Ubicación:</strong> ${propiedad.address}</p>
        <p><strong>Habitaciones:</strong> ${propiedad.bedrooms}</p>
        <p><strong>Precio:</strong> $${propiedad.price.toLocaleString()}</p>
        <p><strong>Fumar:</strong> ${propiedad.smoking ? "Permitido ✅" : "Prohibido 🚫"}</p>
        <p><strong>Mascotas:</strong> ${propiedad.pets ? "Permitidas 🐶" : "No permitidas ❌"}</p>
      </div>
      </div>
      </div>
    `;
  }
}
