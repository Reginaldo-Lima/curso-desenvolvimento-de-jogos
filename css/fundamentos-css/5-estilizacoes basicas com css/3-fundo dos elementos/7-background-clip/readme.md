# *`background-clip`*
Esta propriedade é muito parecida com a propriedade *`background-origin`*. Ela determina se a imagem ou cor de fundo do elemento deve preencher as areas do *padding-box*, *content-box* ou *border-box*. Além de criar alguns efeitos diferentes.

## *`background-clip: padding-box;`*
O nosso fundo não preenche a area das bordas, mas a area do espaçamento interno, *padding*.
```css
#padding-box {
    background-clip: padding-box;
}
```

## *`background-clip: border-box;`*
Com este valor o fundo preencherá todo o espaço incluindo as bordas e o espaçamento interno.
```css
#border-box {
    background-clip: border-box;
}
```

## *`background-clip: content-box;`*
Este valor fará com que o fundo ocupe somente o espaçamento do conteúdo, não preenchendo os espaçamento interno e o espaço das bordas.
```css
#content-box {
    background-clip: content-box;
}
```

## *`background-clip: text;`*
Esse valor faz um recorte no fundo, de acordo com o texto que contém dendro do seu elemento, e aplica o fundo que definimos dentro deste recorte.   
Porém para esta propriedade funcionar da maneira esperada é necessário alguns cuidados.  
1. Adicionar a declaração:
```css
-webkit-background-clip: text;
```
Para garantir que o navegador reconheça e execute esta propriedade.  

2. Colocar a cor do texto como transparente, para possibilitar vermos o fundo que está por baixo.
```css
color: transparent;
```
Desta maneira temos:
```css
#text {
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text;
    background-color: /*valor-exemplo*/;
    background-image: /*url(exemplo)*/;
}
```