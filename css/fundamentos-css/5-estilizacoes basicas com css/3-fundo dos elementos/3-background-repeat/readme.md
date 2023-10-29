# Repetiçaão das Imagens de Fundo
A CSS tem como padrão de comportamento fazer com que a imagem ou outro elemento que estamos definindo como fundo, se repita para que preencha todo o espaço do container, mas podemos alterar este comportamento através da propriedade *`background-repeat`*, onde conseguimos definir como o elemento se comportará.

## `background-repeat: repeat;`
Este é o valor padrão, fazendo com que a imagem se repita lado a lado em todas as direções.

## `background-repeat: repeat-x;`
Determina que a imagem se repita somente no eixo x, horizontal.
```css
#repeat-x {
    background-repeat: repeat-x;
}
```

## `background-repeat: repeat-y;`
Determina a repetição somente no eixo y, vertical.
```css
#repeat-y {
    background-repeat: repeat-y;
}
```

## `background-repeat: space;`
Faz com que a imagem se repita em todas as direções, porem se não couber a imagem completa na próxima repetição, ela irá adicionar um espaçamento entre as imagens para preencher o espaço do container, sem alterar as dimensões da imagem.
```css
#space {
    background-repeat: space;
}
```

## `background-repeat: round;`
A imagem se repete em todas as direções e se redimensionará automaticamente para ocupar todo o conteiner, sem deixar espaços ou sem imagens cortadas.
```css
#round {
    background-repeat: round;
}
```

## `background-repeat: no-repeat;`
A imagem não irá se repetir, será exibida uma única vez.
```css
#no-repeat {
    background-repeat: no-repeat;
}
```

## `background-repeat: x y;`
Qunado queremos determinar como será o coportamento do nosso elemento de fundo, tanto no eixo x, como no eixo y, de maneira separada, declaramos os valores com um espaço de separação.
```css
#eixos {
    background-repeat: space round;
}
```