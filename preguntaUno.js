function comprobarBisiesto(oneYear) {
    let boleanoBisiesto = false;
    if (oneYear % 4 == 0) {
        boleanoBisiesto = true;
        if (oneYear % 100 == 0) {
            boleanoBisiesto = false;
            if (oneYear % 400 == 0) {
                boleanoBisiesto = true;
            }
        }
    }

    return boleanoBisiesto;
}

let oneYear = prompt("Ingrese un año para comprobar si es bisiesto: ")
console.log("El año " + oneYear + " ¿es bisiesto? " + comprobarBisiesto(oneYear));