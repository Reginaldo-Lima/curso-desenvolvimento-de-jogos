
const entradas = [5, 1];
let i = 0;

function gets() {
    let valor = entradas[i];
    i++
    return valor;
}

function print(text) {
    console.log(text);
}

module.exports = {gets, print}