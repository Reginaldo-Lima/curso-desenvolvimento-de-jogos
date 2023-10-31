 /*
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/    

class Carro {
    /** DEFINIÇÃO DE COMO É UM CARRO */
    marca;
    cor;
    consumoLitroPorKm;

    constructor(marca, cor, consumoLitroPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoLitroPorKm = consumoLitroPorKm;
    }

    /** METODO PARA CALCULAR O GASTO DA VIAGEM */
    calcularGastoDaViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.consumoLitroPorKm * precoCombustivel;
    }
}
 /** CRIANDO AS INSTANCIAS DE CARRO */
const uno = new Carro('Fiat', 'Prata', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10);

/** CHAMANDO O METODO DE CALCULAR O GASTO
 * NO CASO, ATRIBUINDO O VALOR A UMA VARIÁVEL
 */
const totalGastoUno = uno.calcularGastoDaViagem(70, 5);
const totalGastoPalio = palio.calcularGastoDaViagem(70, 5);

/** IMPRIMINDO NO TERMINAL */
console.log(`O uno gastou ${totalGastoUno.toFixed(2)}`);
console.log(`O palio gastou ${totalGastoPalio}`);