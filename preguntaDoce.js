let listaMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let listaDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mesUsuario = prompt("Ingrese un número de mes: ");

if (mesUsuario > 0 && mesUsuario < 13) {
    console.log("El mes de " + listaMeses[mesUsuario - 1] + " tiene " + listaDias[mesUsuario - 1] + " días");
} else {
    console.log("El número ingresado no es válido");
}