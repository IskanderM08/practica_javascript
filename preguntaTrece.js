function sumarElementosMatriz(primerMatriz, segundaMatriz) {
    let tercerMatriz = [];
    let i = 0;
    do {
        tercerMatriz[i] = primerMatriz[i] + segundaMatriz[i];
        i++;
    } while (i < primerMatriz.length);

    return tercerMatriz;
}

let arrOfEvens = [2, 4, 6, 8, 10];
let arrOfOdds = [1, 3, 5, 7, 9];
console.log("La suma de las 2 matrices es: " + sumarElementosMatriz(arrOfEvens, arrOfOdds));