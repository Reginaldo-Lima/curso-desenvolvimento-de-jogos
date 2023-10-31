/** Objeto é uma coleção dinamica de chave e valor */

const reginaldo = {
    nome: 'Reginaldo Moura',
    idade: 28,
    endereco: 'tururu',

 /** objetos também aceitam funções e estas funções são chamadas de metódos */

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

/** Por ser uma coleção dinâmica, os objetos aceitão que seus dados sejão editados */

reginaldo.altura = 1.72;
delete reginaldo.endereco;

/*
reginaldo.descrever();
*/

/** ACESSANDO DINAMICAMENTE VALORES DE UM OBJETO */

const atributo = 'nome';
console.log(reginaldo[atributo]);

/**
 * reginaldo['nome'] = 'teste';
 * reginaldo.nome = 'teste';
 */