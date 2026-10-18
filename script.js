const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const pantalla1 = document.getElementById('pantalla-1');
const pantalla2 = document.getElementById('pantalla-2');

// Textos que irán cambiando en el botón No
const frasesNo = [
    "¿Seguro que no quieres volver a ser mi amigo?",
    "¿Ni compartir recuerdos?",
    "¿Ni reírnos como antes?",
    "¿Ni apoyarnos como antes?",
    "¿Ni celebrar nuestras viejas aventuras?",
    "¿Ni una nueva oportunidad?",
    "¿Ni salir a pasear como antes?",
    "¿De verdad no quieres volver a ser mi amigo?"
];

let indiceFrase = 0;
let nivelCrecimientoSi = 1;

function moverBotonNo() {
    // Cambiar el texto del botón
    btnNo.textContent = frasesNo[indiceFrase];
    indiceFrase = (indiceFrase + 1) % frasesNo.length;

    // Calcular nuevas coordenadas aleatorias dentro de la ventana
    // Se resta el tamaño del botón para que no se salga de los bordes
    const maxX = window.innerWidth - btnNo.offsetWidth - 20;
    const maxY = window.innerHeight - btnNo.offsetHeight - 20;
    
    const xAleatorio = Math.max(10, Math.random() * maxX);
    const yAleatorio = Math.max(10, Math.random() * maxY);

    // Cambiar posición a absoluta para moverlo libremente
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${xAleatorio}px`;
    btnNo.style.top = `${yAleatorio}px`;

    // Hacer que el botón Sí crezca
    nivelCrecimientoSi += 0.3;
    btnSi.style.transform = `scale(${nivelCrecimientoSi})`;
}

// Evento para computadoras (cuando el mouse pasa por encima)
btnNo.addEventListener('mouseover', moverBotonNo);

// Evento para teléfonos móviles (cuando el dedo toca la pantalla)
btnNo.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Evita que se registre el clic en el teléfono
    moverBotonNo();
});

// Evento para el botón Sí
btnSi.addEventListener('click', function() {
    pantalla1.classList.add('oculto');
    pantalla2.classList.remove('oculto');
});