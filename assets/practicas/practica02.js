/**
 * El usuario puede ingresar 5 departamentos de colombia
 * validación con los departamentos y dependiendo de cada uno va * a mostrar un prompt diferente. todo en minúsculas.
 * escribe una de las siguientes ciudades. ( cali, tulua, buga, jumbo, palmira) (prompt muestro lista de departamentos, luego otro prompt y luego un alert valido ciudades con if else)
 * información de esa ciudad seleccionada en un alert
 */
let departamento = prompt(
  "Elige un departamento. Para Guainía escribe 1, San Andrés (2), Atlántico (3), Cundinamarca(4), Vichada (5)"
);

if (departamento == 1) {
  let ciudadGuainia = prompt(
    "Genial, elegiste Guainía. Ahora dime un municipio.\nPara seleccionar Inírida: escribe 1, Barrancominas (2), Puerto Colombia (3), Mapiripan (4) o Morichal (5)");
    if (ciudadGuainia ==1 ) {
        alert("Espejito de sol no se casará contigo, esta hermosa indígena se quedará en el cerro Pajarito");
    } if (ciudadGuainia == 2){
        alert("El 1 de diciembre de 2019 Colombia vio nacer a este nuevo municipio. Barrancominas es más jóven del país");
    } if (ciudadGuainia == 3) {
        alert("La Guadalupe es el punto más oriental de Colombia. Una de las 6 áreas no municipalizadas de Guainía.");
    } if (ciudadGuainia == 4) {
        alert("En la masacre de Mapiripan se hablan de por lo menos 97 seres humanos asesinados.");
    } if (ciudadGuainia == 5) {
        alert("Sólo hasta el año 2021 estudiantes de Morichal pudieron presentar un ICFES. Un suceso sin precedentes ocurrido en medio de la selva.");
    } else { alert("Ingrese un municipio válido.");
            }
}