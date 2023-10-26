# COMBINADORES
## Agrupamento de Seletores
Podemos fazer um agrupamento de seletores para criarmos um bloco de código para quando queremos aplicar um determinado conjunto de regras CSS para diferentes seletores, possibilitando o reaproveitamento de declarações e deixando o código mais limpo, apenas separando os seletores por uma virgula ( , ).  
Exemplo:
```css
h1, p {
    color: red;
}
```
E para estilizar um elemento HTML que tenha uma classe específica devemos fazer da seguinte forma:
```css
p.texto {
    background: yellow;
}
```
Também podemos agrupar estes tipos de elementos com outros seletores.  

Acesse o código de estudo [aqui](./01-agrupamento%20de%20seletores/index.html).  
## Combinadores
Veremos a seguir quais são os tipos de seletores.   
Combinadores: qual tipo de relação entre 2 seletores.  
1. Combinador descendente (espaço)
2. Combinador filho (>)
3. Combinador irmão adjacente (+)
4. Combinador irmão em geral (-)

E devemos declara-los da sequinte maneira:  

> ``[SELETOR] [COMBINADOR] [SELETOR] ``  
Colocando-se o caractere que específica o combinador.
### Combinador Descendente
Basicamente é utilizado para aplicar as regras CSS nos elementos que são descendentes diretos de determinados elementos.  
E ele é específicado por um espaço em branco entre os seletores.  
Exemplo:
```css
li li {
    background: lightgreen;
}
```
Está procurando dentro do elemnto _`<li>`_ outros elementos _`<li>`_ que sejam seus descendentes para aplicar a estilização.  
Podemos utilizar outros tipos de seletores combinados, assim como no agrupamento de seletores.
```css
#lista-01 li {
    color: red;
}
.fundo-verde #sublista-01 li {
    background: lightgreen;
}
```

Acesse o códido de estudo [aqui](./02-combinador%20descendente/index.html).  
### Combinador Filho
Ele irá selecionar os elementos filhos imediatos do seletor a esquerda.  
O combinador filho é específicado pelo sinal de maior (>).  
Exemplo:
```css
div > p {
    color: black;
}
```
Buscará os elementos _`<p>`_ que sejam filhos do elemento _`<div>`_.

Acesse o código de estudo [aqui](./03-combinador%20filho/index.html).
### Combinadores Irmãos
#### Combinador Irmão Adjacente
Ele é específicado pelo sinal de mais (+) e é utilizado para selecionar o elemento que está diretamento depois do seletor a esquerda.  
E é necessário que estes elementos estejam na mesma linha de identação.  
Exemplo:
```css
div + p {
    color: tomato;
}
```
A estilização ocorrerá somente no item mais próximo (ou a baixo) do seletor da esquerda.
#### Combinador Irmão em Geral
Se desejarmos aplicar as regras de CSS para todos os irmãos do seletor especificado a esquerda devemos utilizar o combinador irmão em geral, simbolizado pello *til* (~).  
Exemplo:
```css
div ~ p {
    background: lightgreen;
}
```
Desta forma as regras seram aplicadas a todos os elementos que sejam irmãos de maneira geral do seletor desejado.  

Acesse o código de estudo [aqui](./04-combinador%20irmão/index.html).
### Agrupamento de Combinadores e Seletores
Podemos fazer o uso do agrupamento de combinadores juntamente com o agrupamento de seletores. São vários conceitos que podemos aplicar para utilizarmos nossas regras de CSS para estilizar nossa página.  
Exemplo:
```css
.fundo-verde span + p {
    background: green;
}
```
No caso, estamos buscando o elemnto *`<p>`* que seja irmão adjacentedo elemento *`<span>`* que é descendente do elemento que tenha a classe fundo-verde como valor definido.