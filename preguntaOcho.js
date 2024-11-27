let numeroUno = Math.floor(Math.random() * 10) + 1;
let numeroDos = Math.floor(Math.random() * 10) + 1;
let sumaAleatoria = numeroUno + numeroDos;
let sumaUsuario = 0;

do {
    sumaUsuario = prompt("Ingrese un número del 2 al 20 que intente adivinar la suma aleatoria: ")

    if (sumaUsuario == sumaAleatoria) {
        console.log("Adivinaste, la suma " + sumaAleatoria + " es la correcta");
    } else {
        console.log("Incorrecto, vuelva a intentarlo");
    }
} while (sumaUsuario != sumaAleatoria);