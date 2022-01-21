let dia = prompt("Ingrese un día de la semana").toLowerCase();

if (
  dia == "lunes" ||
  dia == "martes" ||
  dia == "miercoles" ||
  dia == "miércoles" ||
  dia == "jueves" ||
  dia == "viernes"
) {
  alert("Entre semana");
} else {
  if (dia == "sabado" || dia=="sábado" || dia == "domingo") {
    alert("fin de semana");
  } else {
    alert("Favor ingrese solo días de la semana");
  }
}
