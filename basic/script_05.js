//Algoritmos que dependiendo si el o al usuaria son mayores de 18 años habilite el catalogo
// si el pais china asi se mayor de 18 no habilite el catalogo

let age = prompt("inter your age");
let country = prompt("inter your country")

if(age >= 18 && country != "china") {
    alert("se ha desbloqueado el catalogo de pelis violentas");
} else {
    alert("no tienes permiso para ver este catalogo");
}

/** Operadores de comparación
 * >: indicar que es mayor a algo
 * <: indica que es menor a algo
 * ==: comparar si un valor es igual a otro
 * >=: si es mayor o igual
 * <=: si es menor o igual
 * !=: diferente
 * ===: compara si un valor es igual y si el tipo de dato es igual
 *
 * Operadores logicos
 * &&: Y = tiene que ser verdaderos los dos para que se cumpla la condicion
 * ||: o = si cualquiera de los dos es verdadero se cumple la condición
 */