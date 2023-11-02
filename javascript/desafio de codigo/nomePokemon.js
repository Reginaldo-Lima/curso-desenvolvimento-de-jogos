function combinarNomePokemon(palavra) {
    let palavraPokemon = palavra + 'saur';
    return palavraPokemon;
}
const combinandoNomesPokemons = combinarNomePokemon()

  // Entrada da palavra usando o gets():
  var nomeEntrada = 'venu';
  
  // Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
  var palavraGerada = combinandoNomesPokemons(nomeEntrada);
  
  // Exibindo a palavra gerada:
  console.log(palavraGerada);