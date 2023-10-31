/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 5;
let nota2 = 3;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;
let classificação;

if (media < 5) {
    classificação = 'reprovado'
} else if (media >= 5 && media < 7 ) {
    classificação = 'de recuperação'
} else {
    classificação = 'aprovado'
}

console.log(`A média do aluno é ${media.toFixed(2)} e está ${classificação}`)