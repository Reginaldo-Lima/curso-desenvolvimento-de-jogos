
/*

Criação de um objeto literal

const pessoa = {
    nome: 'Reginaldo',
    idade: 28
}

*/

/*
// Prototype

const pessoa = {
    genero: 'masculino'
}

const reginaldo = {
    nome: 'Reginaldo',
    idade: 28,
    __proto__: pessoa
}

console.log(reginaldo.genero);
*/

//FUNÇÃO CONSTRUTORA

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`);
}

// O BLOCO DE CÓDIGO A CIMA É EQUIVALENTE AO BLOCO DE BAIXO
// AS DEFINIÇÕES DE CLASSES NO JS É O MESMO QUE OS DE PROTOTYPE

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`);
    }
}