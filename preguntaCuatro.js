let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;

do {
    numeroUsuario = prompt("Ingrese un número del 1 al 10 que intente adivinar el número aleatorio: ")

    if (numeroUsuario == numeroAleatorio) {
        console.log("Adivinaste, el número " + numeroAleatorio + " es el correcto");
    } else {
        console.log("Incorrecto, vuelva a intentarlo");
    }
} while (numeroUsuario != numeroAleatorio);