let valorUsuario;
let sumaPares = 0;
let sumaImpares = 0;

do {
    valorUsuario = prompt("Ingresa un número mayor que 0, en caso de querer finalizar ingresa la palabra 'stop': ")
    if (valorUsuario % 2 == 0) {
        sumaPares++;
    } else if (valorUsuario % 2 == 1) {
        sumaImpares++;
    }
} while (valorUsuario !== "stop");

console.log("El número total de números pares declarados es: " + sumaPares);
console.log("El número total de números impares declarados es: " + sumaImpares);