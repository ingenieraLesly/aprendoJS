let ciudad = prompt("Ingresa tu ciudad");

switch (ciudad) {
    case "Bogota":
        alert("Clima frío");
        break;
    case "Pasto":
        alert("Clima frío");
        break;
    case "armenia":
        alert("Clima templado");
        break;
    case "medellin":
        alert("Clima templado");
        break;
    default:
        alert("No ingresó una ciudad válidad");
        break;
}
if (ciudad === "bogota" || ciudad == "Pasto") {
    alert("clima frío")
} else {
    if (ciudad === "armenia" || ciudad === "medellin"){
        alert("clima templado");
    }else{
        alert("no ingresó una ciudad válida");
    }
}