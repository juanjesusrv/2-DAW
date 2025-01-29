document.addEventListener("DOMContentLoaded", () => {
    const letras = document.querySelectorAll(".letra");
    letras.forEach(letra => {
        letra.addEventListener("click", () => {
            if (letra.style.backgroundColor === "red") {
                letra.style.backgroundColor = "green";
            } else {
                letra.style.backgroundColor = "red";
            }
        });
    });
});