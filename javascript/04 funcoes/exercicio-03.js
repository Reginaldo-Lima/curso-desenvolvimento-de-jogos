/** FUNÇÃO DENTRO DE FUNÇÃO */

function escreverMeuNome(name) {
    return 'Meu nome é: ' + name;
}

function verificarIdade(idade){
    if (idade >= 18) {
        console.log(escreverMeuNome('Reginaldo') + ' e sou maior de idade');
    } else {
        console.log('Você ainda é menor de idade');
    }
}

verificarIdade(28);