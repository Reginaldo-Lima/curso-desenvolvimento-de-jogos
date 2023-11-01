/**
 * Uma sala comtém 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
 * faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
 * 
 * Dados de Entrada:
   5
   50
   10
   98
   23
 * 
 * Dados de Saída:
   98
 * 
 */

const { gets, print} = require('./funcoes-auxiliares');

const numeroDeAlunos = gets();
let maiorNumero = 0;

for (let i = 1; i < 5; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorNumero) {
    maiorNumero = numeroSorteado;
  }
}

console.log(maiorNumero);