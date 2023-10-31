/**
 * 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

function aplicarDesconto(valorEtiqueta, percentualDesconto){
    return valorEtiqueta - (valorEtiqueta * (percentualDesconto / 100));
}

function aplicarJuros(valorEtiqueta, percentualJuros){
    return valorEtiqueta + (valorEtiqueta * (percentualJuros / 100));
}

(function () {
    const valorEtiqueta = 100;
    let modoPagamento = 4;

    if (modoPagamento === 1) {
        console.log(aplicarDesconto(valorEtiqueta, 10));
    } else if (modoPagamento === 2) {
        console.log(aplicarDesconto(valorEtiqueta, 15));
    } else if (modoPagamento === 3) {
        console.log(valorEtiqueta);
    } else {
        console.log(aplicarJuros(valorEtiqueta, 10))
    }
})();