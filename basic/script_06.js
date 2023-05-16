// Control de mayusculas y miniscula (toLowerCase): es para minuscula. (toUpperCase): es para mayuscula.

// Conversion de tipos de datos
// mayuscula y minuscula
// un espacio en un caracter
// valors vacios
// tilde

let age = parseInt(prompt("inter your age")) ;
let country = prompt("inter your country").toLowerCase()

console.log(age,country)

if(age == 0 || country == ""){
    alert("No ingreso uno de los valore")
} else{
    if(age >= 18 && country != "china") {
        alert("se ha desbloqueado el catalogo de pelis violentas");
    } else {
        alert("no tienes permiso para ver este catalogo");
    }
}


