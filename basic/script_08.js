let number = parseInt(prompt("Ingresa el numero de llantas"));
let trasport = prompt(
  "Ingresa un medio de trasporte. terrestre, acuatico, aereo"
).toLocaleLowerCase();

if (number == 1 && trasport == "terrestre") {
  alert("Monociclo");
} else {
  if (number == 2 && trasport == "terrestre") {
    alert("Moto o Bicicleta");
  } else {
    if (number == 4 && trasport == "terrestre") {
      alert("Automovil");
    } else {
      if (number > 4 && trasport == "terrestre") {
        alert("Camion");
      } else {
        if (number == 0 && trasport == "acuatico") {
          alert("Barco");
        } else {
          if (number == 20 && trasport == "aereo") {
            alert("Avio");
          } else {
            alert("Datos requridos incorrecto");
          }
        }
      }
    }
  }
}
