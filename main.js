    const productos = [
      { id: 1, nombre: "Cartera Amayra Negra", precio: 20000, categoria: "carteras", imagen: "./img/62.2074G.2.jpg" },
      { id: 2, nombre: "Billetera JMR Cuero", precio: 12000, categoria: "billeteras", imagen: "./img/62.2074G.2.jpg" },
      { id: 3, nombre: "Mochila Cuero Marrón", precio: 25000, categoria: "mochilas", imagen: "./img/62.2074G.2.jpg" },
      { id: 4, nombre: "Cartera Amayra Roja", precio: 22000, categoria: "carteras", imagen: "./img/62.2074G.2.jpg" },
      { id: 5, nombre: "Billetera JMR Azul", precio: 14000, categoria: "billeteras", imagen: "./img/62.2074G.2.jpg" }
    ];

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    function mostrarCatalogo(lista) {
      const catalogoDiv = document.getElementById("catalogo");
      catalogoDiv.innerHTML = "";
      if (lista.length === 0) {
        catalogoDiv.innerHTML = `<p class="text-center text-muted">No se encontraron productos.</p>`;
        return;
      }
      lista.forEach(p => {
        catalogoDiv.innerHTML += `
          <div class="col-md-4 mb-3">
            <div class="card shadow-sm">
              <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
              <div class="card-body text-center">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="card-text">$${p.precio}</p>
                <button class="btn btn-success" onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
              </div>
            </div>
          </div>
        `;
      });
    }

    function aplicarFiltros() {
      const categoria = document.getElementById("filtroCategoria").value;
      const orden = document.getElementById("ordenPrecio").value;
      const busqueda = document.getElementById("buscador").value.toLowerCase();
      let lista = [...productos];
      if (categoria !== "todos") lista = lista.filter(p => p.categoria === categoria);
      if (busqueda.trim() !== "") lista = lista.filter(p => p.nombre.toLowerCase().includes(busqueda));
      if (orden === "asc") lista.sort((a, b) => a.precio - b.precio);
      else if (orden === "desc") lista.sort((a, b) => b.precio - a.precio);
      mostrarCatalogo(lista);
    }

    function agregarCarrito(id) {
      const producto = productos.find(p => p.id === id);
      const item = carrito.find(i => i.id === id);
      if (item) item.cantidad++;
      else carrito.push({ ...producto, cantidad: 1 });
      guardarCarrito();
      mostrarCarrito();
      mostrarToast("✅ Producto agregado al carrito");
    }

    function eliminarProducto(id) {
      const item = carrito.find(i => i.id === id);
      if (!item) return;
      carrito = carrito.filter(i => i.id !== id);
      guardarCarrito();
      mostrarCarrito();
      mostrarToast(`❌ ${item.nombre} eliminado del carrito`);
    }

    function cambiarCantidad(id, delta) {
      const item = carrito.find(i => i.id === id);
      if (!item) return;
      item.cantidad += delta;
      if (item.cantidad <= 0) eliminarProducto(id);
      guardarCarrito();
      mostrarCarrito();
    }


    function guardarCarrito() {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function vaciarCarrito() {
      carrito = [];
      guardarCarrito();
      mostrarCarrito();
      mostrarToast("🗑️ Carrito vacío");
    }

    function enviarPedido() {
      if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
      }
      let mensaje = "Hola, quiero hacer un pedido:\n\n";
      carrito.forEach(item => {
        mensaje += `${item.cantidad} x ${item.nombre} - $${item.precio * item.cantidad}\n`;
      });
      mensaje += `\nTotal: $${document.getElementById("total").innerText}`;
      const telefono = "5493834927252";
      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    }

    function mostrarToast(mensaje) {
      const toastEl = document.getElementById("toastCarrito");
      document.getElementById("mensajeToast").innerText = mensaje;
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }

    // Modo oscuro con LocalStorage
    function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark);
    actualizarBotonModo();
    }

    function actualizarBotonModo() {
    const btn = document.querySelector(".btn-toggle-dark");
    if (!btn) return; // si no existe, salir
    if (document.body.classList.contains("dark-mode")) {
        btn.classList.remove("btn-secondary");
        btn.classList.add("btn-warning"); // color para modo oscuro
        btn.textContent = "☀️ Modo claro"; // cambiar ícono y texto
    } else {
        btn.classList.remove("btn-warning");
        btn.classList.add("btn-secondary"); // color para modo claro
        btn.textContent = "🌙 Modo oscuro"; // cambiar ícono y texto
    }
    }

    // Aplicar al cargar la página
    window.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") document.body.classList.add("dark-mode");
    actualizarBotonModo();
    });

    // Actualizar número en icono de carrito
    function mostrarCarrito() {
    const carritoUl = document.getElementById("carrito");
    carritoUl.innerHTML = "";
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        carritoUl.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
            <img src="${item.imagen}" alt="${item.nombre}" style="width:100px; height:100px; object-fit:cover; margin-right:10px; border-radius:5px;">
            <div>
                <strong>${item.nombre}</strong><br>
                <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${item.id}, -1)">➖</button>
                <span class="mx-2">${item.cantidad}</span>
                <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${item.id}, 1)">➕</button>
            </div>
            </div>
            <div>
            $${item.precio * item.cantidad}
            <button class="btn btn-sm btn-danger ms-2" onclick="eliminarProducto(${item.id})">🗑️</button>
            </div>
        </li>
        `;
    });
    document.getElementById("total").innerText = total;
    document.getElementById("cantidadCarrito").innerText = carrito.reduce((a,b)=>a+b.cantidad,0);
    }
    // Inicializar
    aplicarFiltros();
    mostrarCarrito();