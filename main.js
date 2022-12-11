
let numero1 = prompt(`Introduzca el primer número de la operación`);

let operacion = prompt(`Elija el tipo de operación escribiendola de la siguiente manera:

                       sumar / restar / dividir / multiplicar ---------------------------------------------------------------------------

                       Sumar / Restar / Dividir / Multiplicar ---------------------------------------------------------------------------

                                        + / - / % / *`);

let numero2 = prompt(`Introduzca el segundo número de la operación`);


let resultado

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)

const hacerCuenta = (numero1,operacion,numero2) => {
    
    if (operacion === "sumar" || operacion === "Sumar" || operacion === "+") {

        resultado =`<h1>Suma</h1><br>
                    <b id="texto"> Resultado = <b id="resultado">${numero1 + numero2}</b>`
    }

    else if (operacion === "restar" ||  operacion === "Restar" || operacion === "-"){
        resultado =`<h1>Resta</h1><br>
                    <b id="texto"> Resultado = <b id="resultado">${numero1 - numero2}</b>`
    }

    else if (operacion === "multiplicar" ||  operacion === "Multiplicar" || operacion === "*"){
        resultado =`<h1>Multiplicación</h1><br>
                    <b id="texto"> Resultado = <b id="resultado">${numero1 * numero2}</b>`
    }

    else if (operacion === "dividir" ||  operacion === "Dividir" || operacion === "%"){
        resultado =`<h1>División</h1><br>
                   <b id="texto"> Resultado = <b id="resultado">${numero1 / numero2}</b>`
    }

    else {
        resultado =`<h2>Error</h2>`
    }

    
}




hacerCuenta(numero1,operacion,numero2)




document.write(resultado)

