// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Reginaldo', 'Jailson', 'Vitória', 'Vanessa'];

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    
    if (nome[0] === 'V') {
        console.log(nomes[i])
    }
}