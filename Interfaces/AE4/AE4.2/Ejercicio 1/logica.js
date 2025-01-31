document.addEventListener("DOMContentLoaded", function () {

const video = document.getElementById("videoPlayer");
const playPauseButton = document.getElementById("playPause");
const restartButton = document.getElementById("restart");
const rewindButton = document.getElementById("rewind");
const forwardButton = document.getElementById("forward");
const muteUnmuteButton = document.getElementById("muteUnmute");
const volumeDownButton = document.getElementById("volumeDown");
const volumeUpButton = document.getElementById("volumeUp");

// Boton de play/pause
playPauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = "||";
    document.body.classList.add("dark-mode");
  } else {
    video.pause();
    playPauseButton.textContent = "►";
    document.body.classList.remove("dark-mode");
  }
});

// Boton de reinicio
restartButton.addEventListener("click", () => {
  video.currentTime = 0;
  video.play();
  playPauseButton.textContent = "||";
});


// Boton de retroceso
rewindButton.addEventListener("click", () => {
  video.currentTime = Math.max(video.currentTime - 5, 0);
});


// Boton de avance
forwardButton.addEventListener("click", () => {
  video.currentTime = Math.min(video.currentTime + 5, video.duration);
});

// Boton de silenciar
muteUnmuteButton.addEventListener("click", () => {
  video.muted = !video.muted;
  muteUnmuteButton.textContent = video.muted ? "Activar audio" : "Silenciar audio";
});

// Boton de bajar volumen
volumeDownButton.addEventListener("click", () => {
  if (video.volume > 0) {
    video.volume = Math.max(video.volume - 0.1, 0);
    volumeDownButton.disabled = video.volume === 0;
    volumeUpButton.disabled = false;
  }
});

// Boton de subir volumen
volumeUpButton.addEventListener("click", () => {
  if (video.volume < 1) {
    video.volume = Math.min(video.volume + 0.1, 1);
    volumeUpButton.disabled = video.volume === 1;
    volumeDownButton.disabled = false;
  }
});

});