function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let dog = document.getElementById("dog");

    let textoCifrado = algoritmoEncriptar(texto)

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "Texto encriptado";
        parrafo.textContent = "";
        dog.src = "imagenes/pugsito.jpg";
    } else {
        dog.src = "imagenes/bulldog.avif"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deaseas encriptar o desencriptar"
        swal("Ingresa un texto :)");
    }

}

function algoritmoEncriptar(texto) {
    var encriptado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        if (letra === "e") {
            encriptado += "enter";
        } else if (letra === "i") {
            encriptado += "imes";
        } else if (letra === "a") {
            encriptado += "ai";
        } else if (letra === "o") {
            encriptado += "ober";
        } else if (letra === "u") {
            encriptado += "ufat";
        } else {
            encriptado += letra;
        }
    }
    return encriptado;
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let dog = document.getElementById("dog");
    let textoCifrado = algoritmoDesencriptar(texto);
    let mjsDesencriptado = document.getElementById("texto")
    mjsDesencriptado.value = textoCifrado
    
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado
        tituloMensaje.textContent = "Texto desencriptado";
        parrafo.textContent = "";
        dog.src = "imagenes/pugsito.jpg";
    } else {
        dog.src = "imagenes/desencriptado.jpg"
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        swal("Ingresa un texto :)");
    }

}

function algoritmoDesencriptar(texto) {

    texto = texto.toLowerCase();
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;

   
} 