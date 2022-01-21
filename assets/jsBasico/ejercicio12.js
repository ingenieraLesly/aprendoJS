//DOM
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
    let nombre = prompt("Ingresa tu nombre");
    nombreUsuario.innerHTML = "Bienvenido/a " + nombre;
}


//eventos
ejecutar.onclick = () => {
    cambiarNombre();
}