/* condicional */

let numero = 10;

let numPar = numero % 2 === 0;

console.log(numPar);

/* Condicional com If e Else */

numero = 10;

numPar = numero % 2 === 0;

if (numPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
}

/* Condicional com Else If */

numero = 10;

numPar = numero % 2 === 0;

if (numPar === 0) {
    console.log('O número é invalido.');
} else if (numPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
}