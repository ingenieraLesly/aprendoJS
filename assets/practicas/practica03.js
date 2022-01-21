/**
 * En un HTML vamos a tener los siguientes textos
 * Nombre :
 * Edad :
 * Dirección :
 * Teléfono :
 * Documento :
 * Botón (ingresar datos)
 * Prompt que nos piden la información
 */
//DOM
let btnIngresarDatos = document.getElementById("btnIngresarDatos");

let nombre = document.getElementById("nombreID");
let edad = document.getElementById("edadID");
let direccion = document.getElementById("direccionID");
let telefono = document.getElementById("telefonoID");
let documento = document.getElementById("documentoID");

const imprimirDatos = () => {
  let nombreUser = prompt("Por favor, ingresa tu nombre");
  let edadUser = prompt("Por favor, dinos tu edad");
  let direccionUser = prompt("¿Cuál es tu dirección");
  let telefonoUser = prompt("¿A que número telefónico te podemos contactar?");
  let documentoUser= prompt("Por favor, ingresa tu número de documento");

  nombre.innerHTML = "Hola, " + nombreUser;
  edad.innerHTML = "Tienes " + edadUser + " años.";
  direccion.innerHTML = "Tu dirección es: " + direccionUser;
  telefono.innerHTML = "Te contactaremos al número teléfonico: " + telefonoUser;
  documento.innerHTML = "Tu número de documento es: " + documentoUser;

  localStorage.setItem("nombre", nombreUser);
  localStorage.setItem("edad", edadUser);
  localStorage.setItem("direccion", direccionUser);
  localStorage.setItem("telefono", telefonoUser);
  localStorage.setItem("documento", documentoUser);

};

if (localStorage.getItem("nombre")) {
    nombre.innerHTML = "Bienvenido/a " + localStorage.getItem("nombre");
  }
if (localStorage.getItem("edad")) {
    edad.innerHTML = "Edad: " + localStorage.getItem("edad") + " años.";
  }
if (localStorage.getItem("direccion")) {
    direccion.innerHTML = "Dirección: " + localStorage.getItem("direccion");
}
if (localStorage.getItem("telefono")) {
    telefono.innerHTML = "Teléfono: " + localStorage.getItem("telefono");
}
if (localStorage.getItem("documento")) {
    documento.innerHTML = "Documento: " + localStorage.getItem("documento");
}

// if (localStorage.getItem("nombreIngresado")) {
//     nombre.innerHTML = "Bienvenido/a " + localStorage.getItem("nombreIngresado");
//   }

//eventos
btnIngresarDatos.onclick = () => {
  imprimirDatos();
};


