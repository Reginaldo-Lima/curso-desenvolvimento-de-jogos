# Background-size
Se quizermos definir qual o tamanho das imagens de fundo dos nossos elementos nós conseguimos utilizar a propriedade *`backgroud-size`* e com ela podemos alterar o tamanho das imagens de fundo de três formas diferentes.

A primeira forma é através de algumas palavras chaves que esta propriedade aceita, como *auto*, *cover* e *contain*.

O valor padrão desta propriedade é o *auto*, onde a imagem se ajusta automaticamente, mas mantem o seu tamanho original.

O valor *cover* fará com que a imagem se redmencione para preencher o container, porém acabamos perdendo alguma parte da imagem que ultrapasse o limite, fazendo a imagem ficar cortada.
```css
#cover {
    background-size: cover;
}
```
O valor *contain* redimensiona a imagem para caber completamente no container, mesmo que sobre espaços no elemento.
```css
#contain {
    background-size: contain;
}
```
Outra forma que conseguimos trabalhar com as imagens é definindo os valores quais queremos que ala ocupe. Em várias unidades de medidas diferentes.  
Quando utilizamos um único valor estamos difinindo a largura (*width*) da nossa imageme a altura (*height*) será definida de maneira automática.
```css
#tamanho {
    background-size: 100%;
}
```
Se quisermos trabalhar a largura e a altura da nossa imagem, devemos definir dois valores.  
1º valor é a largura e o 2º valor a altura.
```css
#exemplo-x-y {
    background-size: 300px 300px;
}
```
Também conseguimos aplicar mais de uma camada de fundo e dimensioná-las de maneira separadas. Separando os valores com vírgula, podemos trabalhar as camadas.
```css
#exemplo-camadas {
    background-image: url('../images/image-01.png'), url('../images/image-02.jpg');
    background-size: 300px 300px, contain;
}
```