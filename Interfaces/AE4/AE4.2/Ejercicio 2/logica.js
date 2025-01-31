// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleSoundButton = document.getElementById("toggleSound");
    const audioMessage = document.getElementById("audioMessage");
    const audioTitle = document.getElementById("audioTitle");
    
    // Mensaje base
    const repro = "<b><i>Reproduciendo:</i></b> ";

    // Lista de sonidos con títulos
    const sounds = [
        { title: "Naturaleza", url: "https://sound-effects-media.bbcrewind.co.uk/mp3/NHU05104275.mp3" },
        { title: "Industria", url: "https://sound-effects-media.bbcrewind.co.uk/mp3/07076051.mp3" },
        { title: "Base Aérea", url: "https://sound-effects-media.bbcrewind.co.uk/mp3/07001043.mp3" }
    ];

    let currentAudio = null; // Variable para almacenar el audio actual

    toggleSoundButton.addEventListener("click", () => {
        if (!currentAudio || currentAudio.paused) {
            // Seleccionar un sonido aleatorio
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

            // Si ya hay un audio cargado, detenerlo antes de reproducir uno nuevo
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Reiniciar el tiempo del audio anterior
            }

            // Crear un nuevo elemento de audio y reproducirlo
            currentAudio = new Audio(randomSound.url);
            currentAudio.play();

            // Actualizar el mensaje y mostrarlo
            audioTitle.innerHTML = repro + randomSound.title;

            // Reiniciar la animación del texto
            audioTitle.style.animation = "none"; // Detener animación previa
            audioTitle.style.animation = "slideText 5s infinite linear"; // Reiniciar animación

            audioMessage.classList.remove("hidden");

            // Cambiar el texto del botón
            toggleSoundButton.textContent = "Detener sonido ambiente";
        } else {
            // Pausar el audio actual
            currentAudio.pause();

            // Ocultar el mensaje
            audioMessage.classList.add("hidden");

            // Cambiar el texto del botón
            toggleSoundButton.textContent = "Iniciar sonido ambiente";
        }
    });
});
