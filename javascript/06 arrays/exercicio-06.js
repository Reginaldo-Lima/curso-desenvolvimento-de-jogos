/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

const listaDeNotas = [2, 7, 3, 8, 10, 4];

let maiorNota = 0;

for (let i = 0; i < listaDeNotas.length; i++) {
    const nota = listaDeNotas[i];
    
    if (nota > maiorNota) {
        maiorNota = listaDeNotas[i];
    }
}

console.log(maiorNota);