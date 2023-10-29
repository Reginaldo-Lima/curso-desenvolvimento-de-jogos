# Propriedade *`background`*
A propriedade *`background`* é como se fosse uma propriedade resumida, ou seja, em uma única propriedade podemos atribuir os valores de outras propriedades, como se fosse um atalho para a CSS.  
Para isto basta separamos os valores por um espaço.
```css
.exemplo {
    width: 300px;
    height: 300px;
    border: 15px dashed palegreen;
    color: white;
    padding: 30px;
    font-size: 80px;
    font-weight: 900;

    background:
        url('../images/arquivo.jpg') 
        center / 300px 300px no-repeat
        padding-box red;
}
```
> Observação importante:  
O valor de do tamanho do elemento de fundo, *`background-size`* precisa ter uma barra de separação e precisa ser declarado depois do valor de *`background-position`*, caso contrário não funcionará corretamente.

Se não definirmos algum valor especifico para alguma propriedade a CSS irá aplicar o valor padrão para aquela propriedade.

Como a CSS é uma Folha de Estilo em Cascata, as propriedades e valores que são declarados abaixo tem mais força do que as que foram declaradas acima.

Também podemos trabalhar por camadas, separando os valores por vírgula, como vimos anteriormente em outras propriedades.