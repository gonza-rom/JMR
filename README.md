# 👜 Catálogo JMR

Este proyecto es un catálogo web para **JMR Marroquinería**, donde los clientes pueden ver los productos, filtrarlos, agregarlos a un carrito y enviar su pedido por WhatsApp.  

Está diseñado para ser **moderno, responsive y fácil de usar**, con soporte para **modo oscuro**, filtros por categoría, ordenamiento por precio y persistencia del carrito en LocalStorage.

---

## 🚀 Funcionalidades implementadas

### Catálogo de productos
- Muestra todos los productos con su imagen, nombre, precio y categoría.
- Tamaño de imagen uniforme (200x200 px) para un diseño limpio.
- Filtros por categoría: carteras, billeteras, mochilas.
- Buscador por nombre de producto.
- Ordenar productos por precio (menor a mayor / mayor a menor).

### Carrito de compras
- Los usuarios pueden agregar productos al carrito.
- Se puede **aumentar o disminuir la cantidad** de cada producto.
- Persistencia en **LocalStorage** → el carrito no se pierde al refrescar la página.
- Botón de carrito flotante con número de productos y separación desde los bordes.
- Modal para visualizar el carrito completo, con opciones de **vaciar** o **enviar pedido**.

### Pedido por WhatsApp
- Genera un mensaje automático con los productos seleccionados y el total.
- Abre WhatsApp directamente para enviar el pedido.

### Modo oscuro
- Cambia el fondo, tarjetas, modal, lista del carrito, botones, inputs y selects.
- Botón que permite alternar entre **modo claro y oscuro**, con cambio de color y texto del botón.
- Persistencia en LocalStorage → recuerda el modo al recargar la página.
- Logo del sitio puede cambiar según el modo (opcional).

### Notificaciones (Toast)
- Toasts que aparecen al **agregar o eliminar productos** del carrito.

### Footer
- Footer moderno con información de contacto y redes sociales.
- Adaptable al modo oscuro.

---

## 🛠 Tecnologías usadas

- **Frontend:** HTML, CSS, JavaScript, Bootstrap 5  
- **Persistencia:** LocalStorage  
- **Integración:** WhatsApp API (enlace para pedidos)  

---

## 📂 Estructura del proyecto

/JMR
├─ index.html # Página principal con catálogo y carrito
├─ style.css # Estilos personalizados y modo oscuro
├─ main.js # Lógica de catálogo, carrito, filtros y WhatsApp
├─ /img # Imágenes de productos
└─ README.md


---

## ⚡ Cómo usar

1. Abrir `index.html` en cualquier navegador moderno.
2. Navegar por los productos.
3. Filtrar, buscar o ordenar según sea necesario.
4. Agregar productos al carrito.
5. Ver carrito desde el botón flotante.
6. Enviar pedido por WhatsApp directamente desde el modal.

---

## ✨ Mejoras futuras (ideas)
- Login de clientes para guardar pedidos.
- Carrito persistente en **backend con base de datos**.
- Sistema de stock por producto.
- Páginas por categoría o destacado de productos.
- Animaciones y efectos para un catálogo más interactivo.
- Cambiar logo automáticamente en modo oscuro.

---

## 📞 Contacto
- WhatsApp: [5493834927252](https://wa.me/5493834927252)  
- Dirección: Centro Rivadavia 564 | Valle Viejo 1165  
- Redes sociales: Instagram / Facebook (por agregar)
