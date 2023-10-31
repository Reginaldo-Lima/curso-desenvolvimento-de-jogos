/*
3 O tipo de combustível que está no carro;

E imprima na tela o valor gasto na viagem.*/
const precoEtanol = 5.79;
const precoGasolina = 6.90;
const litroPorKm = 11;
const distanciaKm = 100;
let tipoCombustivel = 'etanol';
let valorGasto;

let consumoCombustivel = distanciaKm / litroPorKm;

if (tipoCombustivel === 'gasolina') {
    valorGasto = consumoCombustivel * precoGasolina;
} else{
    valorGasto = consumoCombustivel * precoEtanol;
}
console.log(valorGasto.toFixed(2));