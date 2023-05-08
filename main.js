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
  texto = texto.toLowerCase();
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  return texto;
}

function procesoEncriptar() {
  // SI el input area esta vacio mostramos al perrito 
  var textoAEncriptar = document.getElementById("ingresa-texto")
  if (textoAEncriptar.value == "") {
    mostrarImagen()
    swal("Ingresa un texto :)");
    return;
  } else {
    mostrarTexto()
  }

  var textoEncriptado = encriptar(textoAEncriptar.value);
  var resultadoTextArea = document.getElementById("resultado");
  resultadoTextArea.value = textoEncriptado;
  textoAEncriptar.value = "";
}

function procesoCopiar() {
  var resultField = document.getElementById("resultado");
  resultField.select();
  document.execCommand("copy");
  mostrarImagen();


}

function procesoDesencriptar() {
  var inputPrincipal = document.getElementById("ingresa-texto");
  var desencriptado = document.getElementById("resultado");
  if (desencriptado.value == "" && inputPrincipal.value == "") {
    swal("Ingresa un texto para desencriptar :)");
    return;
  }

  var textoDesencriptado = desencriptar(desencriptado.value); 
  var textoDesencriptado2 = desencriptar(inputPrincipal.value);
  inputPrincipal.value = textoDesencriptado2;
  desencriptado.value = textoDesencriptado;

}



