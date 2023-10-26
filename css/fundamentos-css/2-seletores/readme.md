# SELETORES
O seletor no CSS é um padrão que define quais elementos HTML em uma página um conjunto específico de estilos deve ser aplicado. Ele pode ser baseado em elementos HTML, classes, IDs ou outros atributos, permitindo que você selecione e estilize elementos de maneira precisa.  
Veremos os 5 princimpais tipos de seletores:  
1. Seletores de tag/tipo
2. Seletores de Id (#)
3. Seletores de Classes (.)
4. Seletores Universais (*)
5. Seletores de Atributos ([atrib])  
## Seletores de Tag ou Tipo
Define em quais elementos seram aplicados os estilos.  
Funciona em todas as tags e podemos definir quais modificações queremos naquele elemanto.  
Podemos utillizar o CSS interno ou externo e o resultado será o mesmo.
```css
h1 {
    color: red;
}
```  
No exemplo a cima o elemento `h1` do HTML está sento modificado para apresentar a fonte na cor vermelha.
## Seletor de Id (#)
O atributo _id_ é disponível para todas as tags HTML. Esse atributo é o identificador de um elemento e por tanto deve ser único na página, não podendo se repetir.  
Utilizamos o caractere # seguido do nome do _id_ e declaramos as propriedades seguidas de seus determinados valores quais queremos modificar.  
```html
<p i="texto-de-definicao">Lorem ipsum</p>
```
```css
#texto-de-definicao {
    background: yellow;
    color: darkblue;
}
```  
## Seletor de Classe (.)
Todos os elementos HTML aceitam o atributo *class* (classe). As classes são uma forma de identificar um grupo de elementos. podendo se repetir na página.  
Utilizar um ponto (.) para identificar o atributo *class* dentro da CSS.
```html
<li class="seletores-mais-comuns">Lorem ipsum</li>
```  
```css
.seletores-mais-comuns {
    background: green;
}
```  
Podemos atribuir mais de uma classe para o mesmo mesmo elemento. Para isso basta separar os nomes das classes por um espaço em branco.
```html
<p class="paragrafo texto-inicial">
```
E as declarações funcionam de forma independentes.
## Seletor Universal (*)
Ele é identificado por um asterisco * e ele modificará todos os elementos do HTML, independente do tipo, do identificador ou da classe.
```css
    * {
        font-weight: bold;
    }
```
Todos os textos ficaram em negrito.  
Ele é utilizado para aplicar uma estilização que será comum em todos os elementos. Exemplo uma fonte, uma cor específica ou para um *reset-css* (para definirmos uma estilização padrão para a página, independente de qual navegador o usuário esteja utilizando).
## Seletores de Atributos ([atrib])
Além dos atributos de *id* e *class* os elementos HTML podem ter outros atributos e através do seletor de atributos podemos acessar e modificar estes elementos específicos independente de seus nomes.
```css
    [nome do atributo] {
        declaração
    }
```
Também podemos aplicar CSS para um atributo que tenha um valor específico.  
Da seguinte forma:
```css
    [atributo="valor-exato"] {
        declaração
    }
```
Também podemos buscar por um valor aproximado daquele atributo. Colocando o caractere **~** (til) antes do sinal de igual. O seletor buscará pelo valor específico que lhe foi atribuido ou pelo valor aproximado, desde que este valor esteja separado por espaços.
```html
    <a title="Streaming Netflix" href="https://www.netflix.com">Netflix</a>
```
```css
[title~="Streaming"] {
    (declaração)
}
```
Ou podemos utilizar o caractere *pipe* ( | ) para buscar o valor exato ou separado por hifém ( - ).
```html
    <a title="Streaming-Prime-Video" href="https://www.primevideo.com/">Prime Video</a>
```
```css
    [title|="Streaming"] {
        (declaração)
    }
```
Dessa forma podemos buscar um valor de um atributo para estilizar através de prefixos ou sufixos.  
Para prefixos utilizamos o assento circunflexo ( ^ ).
```css
[href^="https://"] {
    (declaração)
}
```
E para procurar um sufixo específico utilizamos o sifrão ( $ ).
```css
    [href$="login"] {
        (declaração)
    }
```
E para procurar uma palavra em qualquer localização naquele valor atribuido utilizamos o asterisco ( * ).
```css
    [href*="login"] {
        (declaração)
    }
```