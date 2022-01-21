/**
 * 1. Por medio de un botón pedimos al usuario el nombre
 * 2. Después del prompt del nombre aparecen más promp
 * 3. Promps: Edad, Dirección, Documento, Teléfono.
 * 4. en un alert concatenado el siguiente mensaje
 * 5. Hola + nombre + tu edad es : + edad + tu dirección es: + y tu documento es + documento.
*/
function nombreUsuario(){
    let nombre = prompt("Ingresa tu nombre:");
    let edad = prompt("Ingresa tu edad:");
    let direccion = prompt("Ingresa tu dirección:");
    let documento = prompt("Ingresa tu documento:");
    let telefono = prompt("Ingresa tu número telefónico:");

    console.log("Su nombre es: " + nombre);
    alert("Hola, " + nombre + "." + "\nTienes: " + edad + " años. Tu dirección es: " + direccion + " y tu número de documento es: " + documento + ". Para contactarte usaremos el número teléfónico: " + telefono + ".")
}