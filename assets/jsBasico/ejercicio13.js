//Local Storage
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
  let nombre = prompt("Ingresa tu nombre");
  nombreUsuario.innerHTML = "Bienvenido/a " + nombre;
  localStorage.setItem("nombre", nombre);
};

if (localStorage.getItem("nombre")) {
  nombreUsuario.innerHTML = "Bienvenido/a " + localStorage.getItem("nombre");
}

//eventos
ejecutar.onclick = () => {
  cambiarNombre();
};
