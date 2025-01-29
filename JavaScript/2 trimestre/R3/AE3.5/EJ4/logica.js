window.onload = function() {

    function abrirWebmail(){

        let valor = Math.floor(Math.random() * 3);
        let url = "";
        switch (valor){
            case 0:
                url = "https://login.live.com";
                break;
            case 1:
                url = "https://accounts.google.com";
                break;
            case 2:
                url = "https://www.serviciodecorreo.es";
                break;
        }
        
        return url;
    }

    let html = document.getElementById("html");

    html = '<h1>¿Desea contactar con nosotros?</h1>' +
    '<p>Haz click en el siguiente enlace para <a href="' + abrirWebmail() +'" onclick="abrirWebmail()">' +
        'abrir un Webmail aleatorio</a></p>';

    document.write(html);
}