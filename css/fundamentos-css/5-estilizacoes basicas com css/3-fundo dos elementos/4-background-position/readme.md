# Posicionamento dos Elementos de Fundo
Para determinarmos em qual posição queremos a nossa imagem de fundo utilizamos a propriedade *`background-position`*.

Podemos utilizar palavras reservadas, assim como também podemos utilizar unidades de medidas para determinar os seus valores de posicionamento.
- top
- center
- bottom
- left
- right

```css
#top {
    background-position: top;
}
```
Também podemos definir a posição através dos eixos x e y, só colocando estes valores separados por um espaço.
```css
#eixos {
    background-position: left top;
}
```
Tanto podemos utilizar as palavras-chaves, como também os valores de medidas.  
Fazendo como que possamos trabalhar este posicionamento de diversas formas.

Também podemos trabalhar os valores de cantos relativos.
```css
#relativo {
    background-position: left 50px top 30px;
}
```
>A imagem ficará  posicionada 50px afastada da lateral esquerda e 30px afastada do topo.

Claro que também podemos trabalhar estas propriedades em camadas separadas, só separando os valores por vírgula, como já vimos anteriromente em outras propriedades.