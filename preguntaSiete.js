function sumaReciprocos(numeroUsuario) {
    let sumaReciprocos = 0;
    let i = 0;

    do {
        sumaReciprocos = sumaReciprocos + (1 / (i + 1));
        i++;
    } while (i < numeroUsuario);

    return sumaReciprocos;
}

let numeroUsuario = prompt("Ingrese un número del 1 al 10 para obtener la suma de recíprocos: ")
console.log("La suma de los recíprocos es: " + sumaReciprocos(numeroUsuario));
