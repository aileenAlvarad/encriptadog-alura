function mostrarTexto() {
  $("#encription-not-found").addClass("hidden");
  $("#encription-found").removeClass("hidden");
}

function mostrarImagen() {
  $("#encription-found").addClass("hidden");
  $("#encription-not-found").removeClass("hidden");
}

function encriptar(texto) {
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

function desencriptar(texto) {
  var desencriptado = "";
  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    if (letra === "enter") {
      desencriptado += "e";
    } else if (letra === "imes") {
      desencriptado += "i";
    } else if (letra === "ai") {
      desencriptado += "a";
    } else if (letra === "ober") {
      desencriptado += "o";
    } else if (letra === "ufat") {
      desencriptado += "u";
    } else {
      desencriptado += letra;
    }
  }
  return desencriptado;
}

function procesoEncriptar() {
  // SI el input area esta vacio mostramos al perrito 
  var textoAEncriptar = document.getElementById("campo-transparente")
  if (textoAEncriptar.value == "") {
    mostrarImagen()
    return;
  } else {
    mostrarTexto()
  }

  var textoEncriptado = encriptar(textoAEncriptar.value);
  var resultadoTextArea = document.getElementById("resultado"); 
  resultadoTextArea.value = textoEncriptado
} 

function procesoCopiar(){
  var resultField = document.getElementById("resultado");
			resultField.select();
			document.execCommand("copy"); 
      console.log("Llamando funcion resultado")

} 

