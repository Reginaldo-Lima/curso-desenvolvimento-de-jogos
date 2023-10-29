# Background-image
Além de uma cor sólida, também podemos manipular o fundo dos nossos elementos de diversas formas, como aplicar uma imagem, um gradiente, um degradê, etc.

Para aplicarmos uma imagem de fundo utilizamos a propriedade *`background-image`* e o valor pode ser a imagem de um servidor externo (através da url) ou podemos utilizar o caminho dentro do nosso projeto. Conseguimos utilizar todos os formatos de imagens.
```css
div {
    background-image: url('./assets/images/image.jpg')
}
```
Por padrão a imagem se repete para preencher o espaço, mas vermos como modificar este padrão.

Além de imagens, podemos aplicar um gradiente através da função *`linear-gradient()`* e dentro desta função colocamos os valores das cores que desamos.
```css
div {
    background-image: linear-gradient(red, #f0a, rgb(45, 200, 75))
}
```
Além da função *`linear-gradient()`* também podemos utilizar a *`radial-gradient()`*, que nos fornece um gradiente circular.
```css
div {
    background-image: radial-gradient(blue, red, green)
}
```
Outra função que podemos utilizar é a *`repeating`* que pode ser linear ou radial, entre outras formas. E nos permite ter padrões no fundo dos nossos elementos.
```css
div {
    background-image: repeating-linear-gradient(to top, palevioletred 0 20px, lightpink 20px 40px);
}
```
Também podemos aplicar várias camadas de fundo em nossos *backgrounds*.
```css
#camadas {
    background-image:url('../images/image-01.png'), url('../images/image-02.jpg');
}
```

Para se aprofundar nestas funções acesse a documentação.

Site que tem vários exemplos de *patterns* (padrões) utilizando CSS é o 
https://projects.verou.me/css3patterns/