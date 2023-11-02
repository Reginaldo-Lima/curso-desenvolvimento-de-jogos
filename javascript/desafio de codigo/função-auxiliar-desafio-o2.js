
const entradas = ['ataque', 1, 'defesa', 2, 'cura', 3];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor; 
}

function print(text) {
    console.log(text);
}

module.exports = {gets, print};