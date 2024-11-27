let productoNumeros = 1;
let numeroUsuario = 0;

do {
    numeroUsuario = prompt("Ingrese un número entero positivo, al ingresar un número igual o menor a 0 finalizará la lista de números: ");
    if (numeroUsuario > 0) {
        productoNumeros = productoNumeros * numeroUsuario;
    }
} while (numeroUsuario > 0)

console.log("El producto total de la lista de números es: " + productoNumeros);