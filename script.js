const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');
const pantalla1 = document.getElementById('pantalla-1');
const pantalla2 = document.getElementById('pantalla-2');
const imagenGato = document.getElementById('imagen-gato');
const musicaFondo = document.getElementById('musica-fondo');

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

const imagenesNo = [
    "triste1.jpg",
    "triste2.jpg",
    "triste3.jpg",
    "triste4.jpg",
    "triste1.jpg",
    "triste2.jpg",
    "triste3.jpg",
    "triste4.jpg"
];

let indice = 0;
let nivelCrecimientoSi = 1;

// NUEVO: Intentar reproducir la música al primer toque en cualquier parte de la pantalla
function iniciarMusica() {
    musicaFondo.play().catch(() => {
        // Si el navegador lo bloquea, no hace nada y espera el siguiente clic
    });
    // Se elimina el evento para que no intente reproducirse cada vez que tocan la pantalla
    document.removeEventListener('click', iniciarMusica);
    document.removeEventListener('touchstart', iniciarMusica);
}

// Detecta el primer clic o toque en el celular
document.addEventListener('click', iniciarMusica);
document.addEventListener('touchstart', iniciarMusica);

function moverBotonNo() {
    btnNo.textContent = frasesNo[indice];
    imagenGato.src = imagenesNo[indice];
    
    indice = (indice + 1) % frasesNo.length;

    const maxX = window.innerWidth - btnNo.offsetWidth - 20;
    const maxY = window.innerHeight - btnNo.offsetHeight - 20;
    
    const xAleatorio = Math.max(10, Math.random() * maxX);
    const yAleatorio = Math.max(10, Math.random() * maxY);

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${xAleatorio}px`;
    btnNo.style.top = `${yAleatorio}px`;

    nivelCrecimientoSi += 0.3;
    btnSi.style.transform = `scale(${nivelCrecimientoSi})`;
}

btnNo.addEventListener('mouseover', moverBotonNo);

btnNo.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moverBotonNo();
});

btnSi.addEventListener('click', function() {
    pantalla1.classList.add('oculto');
    pantalla2.classList.remove('oculto');
});
