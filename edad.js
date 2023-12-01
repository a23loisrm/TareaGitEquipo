let edad = prompt("Por favor, introduce a túa idade:");
edad = parseInt(edad);
if (isNaN(edad)) {
alert("Por favor, introduce un número válido para a idade. Modificación funcionalidadUno.");
} else {
let categoria;
switch (true) {
case edad >= 0 && edad <= 12:
categoria = "Chaval";
break;
case edad >= 13 && edad <= 18:
categoria = "Adolescente";
break;
case edad >= 19 && edad <= 30:
categoria = "Xoven";
break;
case edad >= 31 && edad <= 6
categoria = "Adulto";
break;
case edad >= 65 && edad <= 100:
categoria = "Xubilado";
break;
default:
alert("You Died");
}
if (categoria) {
alert("Eres un " + categoria + ".");
}
}