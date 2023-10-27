# ALTURA E LARGURA
As primeiras propriedades básicas de CSS que iremos ver serâo as responsáveis por alterar tanto a altura como a largura dos nossos elementos que são elas *height* e *width*, respectivamente.  

Existem algumas formas de alterar as medidas de altura e largura, assim como diversas unidades de medidas que podem ser selecionadas fazendo com que as estlizações se comportem de maneiras diferentes, a unidade de medida mais comuna ser utilizada é o *pixel* `(px)`, porém dependendo do resultado desejado pode-se utilizar outra unidade.
```css
div {
    width: 200px;
    height: 100px;
    background: lightblue;
}
```
Além dos valores definidos aqui, nós também conseguimos aplicar algumas palavras chaves reservadas da CSS. Por exemplo a palavra *`auto`* que aplica um dimencionamento automático.  

Outra palavra específica da CSS é a *`initial`*, que basicamente irá aplicar os valores padrões daquele elemento.  

Mais uma palavra reservada da CSS é a *`inherit`*, que irá definir o valor da propriedade de acordo com seu elemento pai.  

Estas palavras reservadas da CSS não são exclusivas das propriedades *height* e *width* mas podem ser aplicadas a todas as outras propriedades.  

Exemplo:
```css
div {
    background: aquamarine;
    width: auto;
    height: inherit;
}
```
Acesse o código de estudo [aqui](./1-largura%20e%20altura/index.html).

## Altura e Largura Máxima e Mínima
Através das propriedades *`max-width`*, *`min-width`*, *`max-height`* e *`min-height`* conseguimos definir quais seram as alturas e larguras máximas e mínimas.  

Exemplo:
```css
button{
    background: pink;
    max-width: 300px;
    max-height: 500px;
}
```
Quando definimos uma dimensão mínima, seja de altura ou de largura, através das propriedades *`min-height`* e *`min-width`*, garantimos que aquele elemento inicie com ao menos estas dimensões.  

Já quando definimos as dimensões máximas através das propriedades *`max-height`* e *`max-width`*, altura máxima e largura máxima, respectivamente, garantimos que aquele elemento não passará daqueles valores, independente do seu conteúdo.  

Quando queremos deixar nossa página responsiva utilizaremos bastante estas propriedades.

Acesse o código de estudo [aqui](./2-altura%20e%20largura%20maxima%20e%20minima/index.html).

## *Margin*
A propriedade de margem, *`margin`*, basicamente é utilizada para criar um espaçamento em volta dos elementos.

Podemos utilizar valores individuais para cada lado do elemento qual desejamos modificar.  

>- *margin-top*
>- *margin-bottom*
>- *margin-left*
>- *margin-right*

Também não precisamos definir os valores de forma individual, a propriedade *`margin`* por si só nos permite trabalhar estes valores, separando-os por um espaço vazio.  
>Um valor: aplica nos 4 lados.  
Dois valores: 1º valor em cima e embaixo, 2º valor nas laterias.  
Três valores: em cima, laterais e embaixo.  
Quatro valores: cima, direita, baixo e esquerda.  
*(seguindo o sentido horário, começando por cima)*

Exemplo:
```css
#elemento-01 {
    background: orange;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 40px;
}
```
```css
#elemento-02 {
    background: purple;
    margin: 10px 40px 20px 30px;
}
```
A propriedade *margin* também aceita valores negativos, fazendo com que a margem fique para dentro do elemento.  
Assim como também podemos aplicar as palavras reservadas da CSS, como *auto* e *inherit*.

Acesse o código de estudo [aqui](./3-margin/index.html).

## *Padding*
Diferente da propriedade *`margin`* que distancia os elementos por fora, o *`padding`* aplicará um espaçamento interno, distanciando o conteúdo das bordas do elemento.

A maneira de declarar a propriedade *`padding`* é muito parecida com a de *`margin`*.  
Aplicando valores separados por um espaço em branco na unica propriedade *`padding`*:
>Um valor: todos os 4 lados.  
Dois valores: 1º valor em cima e embaixo, 2º valor nas laterais.  
Três valores: em cima, laterias e embaixo.  
Quatro valores: cima, direita, baixo e esquerda.  
*(Seguindo o sentido horário, começando por cima)*

Exemplo:
```css
#elemento-01 {
    background: orange;
    padding: 20px 10px 30px 40px;
}
```
E também definindo valores discriminados para cada lado do elemento.
>- *padding-top*
>- *padding-bottom*
>- *padding-left*
>- *padding-right*

Exemplo:
```css
#elemento-02 {
    padding-top: 20px;
    padding-right: 10px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```
E da mesma forma podemos aplicar as palavras reservadas *`inherit`* e *`auto`*.

Acesse o código de estudo [aqui](./4-padding/index.html).

## *Box Sizing*
Sempre quando aumentamos o espaçamento do *`padding`* tanto a altura e a largura do elemento aumentam juntamente com este espaçamento interno.

Isto ocorre porque tanto a largura quanto a altura são calculadas da seguinte forma:
>*width = largura + borda + padding*  
*width* = 200px + 0 (borda) + 20px (direita) + 20px (esquerda)  
*width* = 240px

Podemos utilizar outra propriedade para complementar nossa estilização ou para manter este comportamento ou para evitar que isto ocorra, que é a propriedade *`box-sizing`*, ela aceita basicamente dois valores, o *`content-box`* que se comporta de maneira padrão, e o *`border-box`* que irá redefinir o tamanho do elemento de maneira inteligente para que ele tenha o tamnaho que definimos tanto para altura como para a largura.

Exemplo:
```css
div {
    width: 200px;
    height: 200px;
    color: white;

    margin: 20px;
    padding: 20px;
}

#elemento-02 {
     background: purple;
    box-sizing: border-box;
}
```
Dessa forma a dimensão será calculada da seguinte maneira:
>*width* = 160px + 0 + 20px + 20px  
*width* = 200px