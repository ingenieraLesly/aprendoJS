//DOM
let ejecutar = document.getElementById("btnEjecutar")

const cambiarNombre = () => {
    let nombre = prompt("Ingresa tu nombre");
    alert("Tu nombre es: " + nombre)
}


//eventos
ejecutar.onclick = () => {
    cambiarNombre();
}