/**
 * 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */


/* 1 metódo convencional, minha resolução*/

/*
const valorEtiqueta = 100;
let modoPagamento = 'Dinheiro';
let valorCobrado;

const descontoDebito = (valorEtiqueta * 10) / 100;
const descontoDinheiroPix = (valorEtiqueta * 15) / 100;
const jurosParcelado = (valorEtiqueta * 10) / 100;

if (modoPagamento === 'Débito') {
    valorCobrado = valorEtiqueta - descontoDebito;
} else if (modoPagamento === 'Dinheiro' || modoPagamento === 'Pix') {
    valorCobrado = valorEtiqueta - descontoDinheiroPix;
} else if (modoPagamento === 'Crédito à vista' || modoPagamento === 'Crédito 2x') {
    valorCobrado = valorEtiqueta;
} else {
    valorCobrado = valorEtiqueta + jurosParcelado;
}

console.log(valorCobrado);
*/

/* 2 método, abstração para resolução de algoritmos, resolução do professor */

const valorEtiqueta = 100;
let modoPagamento = 4;
/* Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */
let valorCobrado;

if (modoPagamento === 1) {
    console.log(valorEtiqueta - (valorEtiqueta * 0.1));
} else if (modoPagamento === 2) {
    console.log(valorEtiqueta - (valorEtiqueta * 0.15));
} else if (modoPagamento === 3) {
    console.log(valorEtiqueta);
} else {
    console.log(valorEtiqueta + (valorEtiqueta * 0.1))
}