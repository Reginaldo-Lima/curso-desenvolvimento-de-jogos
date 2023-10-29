# Imagens
## Propriedade `object-fit`
A propriedade *`object-fit`* irá determinar como uma imagem ou vídeo deveram ser redimensionados para caber dentro da caixa do elemento, qua chamamos de container.

Em inglês *`object-fit`* significa ajuste de opjeto.

esta propriedade dirá a nossa imagem ou vídeo se eles iram manter sua proporção ou iram se distorcerem para ocupar o máximo de espaço.

### *`object-fit: fill;`*
O valor *`fill`* é o valor padrão desta propriedade.

Não precisa ser declarada.

Fará com que a imagem fique distorcida para ocupar toda a área do container.

### *`object-fit: contain;`*
A imagem irá manter sua proporção original, porém será redmensionada para caber dentro do container, mas ela não ficará distorcida.
```css
#contain {
    object-fit: contain;
}
```

### *`object-fit: cover;`*
A imagem irá preencher o espaço do container, porém irá cortar o restante da imagem que ultrapassar o limite do valor determinado.
```css
#cover {
    object-fit: cover;
}
```

### *`object-fit: none;`*
A imagem irá ignorar o tamanho do elemento pai, o seu container, e manterá o seu tamanho original.
```css
#none {
    object-fit: none;
}
```

### *`object-fit: scale-down;`*
Este valor nos retornará uma imagem coma as configurações de *`contain`* ou de *`none`*, dependendo de qual configuração nos retorne uma imagem menor.
```css
#scale-down {
    object-fit: scale-down;
}
```

Acesse o código de estudo [aqui](./object-fit.html).

## Propriedade *`object-position`*
Esta propriedade é utilizada em conjuto com a propriedade *`object-fit`*, basicamente ela irá determinar como uma imagem ou vídeo irá se posicionar tanto horizontalmente como verticalmente no nosso container.

O seu valor padrão é centralizar o objeto no centro do container.

Podemos trabalhar com diferentes tipos de unidades de medidas para definirmos seus valores e até combinar unidades diferentes.

O primeiro valor desta propriedade é referente a posição no eixo x, horizontal. E o segundo valor é referente ao eixo y, vertical.

Também podemos utilizar valores negativos.

O *`object-position`* também aceita algumas palavras-chaves como valor:
>Para o eixo x:
>- left
>- center
>- right
>- start
>- end  
>
>Para o eixo y:
>- top
>- center
>- bottom
>- start
>- end
```css
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left top;
}
```

Acesse o código de estudo [aqui](./object-position.html).