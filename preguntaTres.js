let numeroUsuario = 0;

do {
    numeroUsuario = prompt("Ingrese un número entero positivo, al ingresar un número igual o menor a 0 finalizará la lista de números: ");
    if (numeroUsuario > 0) {
        let raizNumero = Math.sqrt(numeroUsuario);
        console.log("La raíz cuadrada de: " + numeroUsuario + " es: " + raizNumero);
    }
} while (numeroUsuario > 0)