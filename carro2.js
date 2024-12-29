document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.button-item');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    document.getElementById('btn-pagar').addEventListener('click', procesarPago);
});

function agregarAlCarrito(event) {
    const item = event.target.parentElement;
    const titulo = item.querySelector('.titulo-item').innerText;
    const precio = parseFloat(item.querySelector('.precio-item').innerText.replace('$', ''));
    const imagen = item.querySelector('.img-item').src;

    const carritoItems = document.querySelector('.carrito-items');
    const itemCarrito = document.createElement('div');
    itemCarrito.classList.add('carrito-item');
    itemCarrito.innerHTML = `
        <img src="${imagen}" width="80px" alt="">
        <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>
            <span class="carrito-item-precio">$${precio.toFixed(2)}</span>
        </div>
        <span class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
        </span>
    `;

    carritoItems.appendChild(itemCarrito);
    actualizarTotalCarrito();

    itemCarrito.querySelector('.btn-eliminar').addEventListener('click', () => {
        itemCarrito.remove();
        actualizarTotalCarrito();
    });
}

function actualizarTotalCarrito() {
    const carritoItems = document.querySelectorAll('.carrito-item');
    let total = 0;

    carritoItems.forEach(item => {
        const precio = parseFloat(item.querySelector('.carrito-item-precio').innerText.replace('$', ''));
        total += precio;
    });

    document.querySelector('.carrito-precio-total').innerText = `$${total.toFixed(2)}`;
}

function procesarPago() {
    const total = document.querySelector('.carrito-precio-total').innerText;

    if (total === '$0.00') {
        alert('Tu carrito está vacío. Agrega productos antes de pagar.');
        return;
    }

    // Simulación de un proceso de pago
    alert(`Iniciando el proceso de pago por ${total}...`);

    // Aquí puedes agregar redirección a una página de pago real, por ejemplo:
    // window.location.href = 'pago.html'; // Reemplaza con la URL de tu página de pago.

    // O simplemente, ocultar el carrito y mostrar un mensaje de éxito
    // Limpiar el carrito
    document.querySelector('.carrito-items').innerHTML = '';
    document.querySelector('.carrito-precio-total').innerText = '$0.00';
    
    // Mostrar un mensaje de éxito
    alert('¡Pago realizado con éxito!');
}