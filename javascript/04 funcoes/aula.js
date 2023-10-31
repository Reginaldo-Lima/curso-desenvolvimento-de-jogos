
function test() {
    console.log('teste');
}

test();
/* função com parametro */

function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Reginaldo');
sayMyName('Jailson');

/* funçção com retorno */

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

/* Exemplo para incrementar juros */

function incrementarJuros(valor, percentualJuros) {
    let valorDeAcrescimo = valor * (percentualJuros / 100);
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(200, 25));