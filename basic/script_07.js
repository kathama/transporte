let day = prompt("Inter a day").toLocaleLowerCase();

if (day == "sabado" || day == "domingo") {
  alert("Es un fin de semana");
} else {
  if (
    day == "lunes" ||
    day == "martes" ||
    day == "miercoles" ||
    day == "jueves" ||
    day == "viernes"
  ) {
    alert("Es un dia entre seman");
  } else {
    alert("Favor ingrese es un dia de la semana");
  }
}
