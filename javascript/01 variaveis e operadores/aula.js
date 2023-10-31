/*
Primeiro desafio - Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1 Preço do combustível;
2 Gasto médio de combustível do carro por km;
3 Distância em km da viagem.

E imprima na tela o valor gasto na viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaKm = 100;

let listrosConsumidos = distanciaKm / kmPorLitro
let gastoViagem = listrosConsumidos * precoCombustivel;

console.log(gastoViagem);