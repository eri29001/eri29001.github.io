
// Elementos de botones
const abrirBtn = document.getElementById('Abrir');
const cerrarBtn = document.getElementById('Cerrar');
const tapa = document.querySelector('.superior');
const mensaje = document.querySelector('.mensaje');

// Función para abrir el sobre
abrirBtn.addEventListener('click', function() {
    // Animar la tapa para que gire
    tapa.classList.add('abrir-superior');
    // Hacer que el mensaje aparezca
    mensaje.classList.add('abrir-mensaje');
});

// Función para cerrar el sobre
cerrarBtn.addEventListener('click', function() {
    // Revertir la animación de la tapa
    tapa.classList.remove('abrir-superior');
    // Hacer que el mensaje desaparezca
    mensaje.classList.remove('abrir-mensaje');
});
