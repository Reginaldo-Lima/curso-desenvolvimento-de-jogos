/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const {gets, print} = require('./funcoes-auxiliares');

const quantidadeNumeros = gets();
let maiorValor = 0;
let menorValor = maiorValor;


for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if (numero > maiorValor) {
        maiorValor = numero;
    } else {
        menorValor = numero;
    }
}

print(menorValor);
print(maiorValor);