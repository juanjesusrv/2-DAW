function nuevaVentana() {
    window.open("./pop.html", "", "width=1080,height=720");
}


function maximizar(){
    window.resizeTo(screen.availWidth, screen.availHeight);
    window.moveTo(0, 0);
    document.getElementById("max").style.display = "none";
    document.getElementById("min").style.display = "block";
}

function minimizar(){
    window.resizeTo(screen.availWidth - 100, screen.availHeight - 100);
    window.moveTo(100, 100);
    document.getElementById("max").style.display = "block";
    document.getElementById("min").style.display = "none";
}
