# Cores
## Cores pré-definidas
Os navegadores disponibilizam cerca de 140 cores pré-definidas as quais podemos referenciá-las utilizando seus nomes.

O site [W3School](https://www.w3schools.com/colors/colors_names.asp) tem a listagem de todas as cores pré-definidas.

Mesmo que existam muitas cores pré-definidas elas não são capazes de atender toas as necessidades da nossa identificação visual, então precisaremos utilizar outras formas de definições de cores.
```css
h1 {
    color: red;
}
```

## *CurrentColor*
Caso queiramos referenciar o valor da cor da propriedade *`color`* de um elemento, podemos utilizar a palavra reservada *`currentColor`* como o valor desta propriedade.

```css
#current-color {
    color: orange;
    border: 2px solid currentColor;
}
```
A palavra *`currentColor`* pega dinamicamente a cor da letra que está sendo utilizada no elemento.

## RGB e RGBA
O RGB é a sigla para *Red, Green e Blue*, vermelho, verde e azul, respectivamente. E para utilizar no CSS usamos a função *`rgb`*.
```css
#rgb {
    color: rgb(0, 0, 0,);
}
```
>*rgb(red, green, blue)*

Porém utilizamos uma numeração específica para definirmos estas cores e não nomes. A tonalidade de cada cor vai de 0 a 255, onde 0 não tem aquele tom presente e 255 está utilizando a tonalidade máxima daquela cor.

Auterando os valores destas tonalidades conseguimos determinar diversas cores.

Ou também podemos utilizar uma porcentagem para determinar o RGB de 0% a 100%, porém não é muito utilizada esta notação em projetos práticos.

```css
rgb(100%, 10%, 30%)
```
O RGBA é uma extenção do RGB, porém contém o canal *alpha*, este canal irá definir a opacidade da cor, a opacidade vai determinar a transparência desta cor.

O valor do canal *alpha* vai de 0.0 até 1.0, onde 0.0 é uma cor completamente transparente e 1.0 uma cor solida.
```css
#rgba {
    background: rgba(255, 0, 0, 0.3);
}
```
Utilizamos o RGBA quando queremos aplicar um nível de transparência ao nosso elemento.

## Hexadecimal
O código hexadecimal das cores na CSS é composto pelo símbolo de cerquilha (#) e mais 6 dígitos.
>#000000

Onde os dois primeiros dígitos representam a cor *red* (vermelho), os dois dígitos do meio a cor *green* (verde) e os dois últimos a cor *blue* (azul).

Estes dígitos podem ser representados por números e letras, onde os números vão de 0 a 9 e as letras de A até F, totalizando 15 caracteres possíveis para cada dpigito.
>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

Onde 0 representa nenhuma tonalidade e F a tonalidade máxima.

Nos possibilitando assim uma mistura de tonalidades de cores para compor nossa identidade visual.

```css
#hex {
    color: #0099ff;
}
```
Também podemos adicionar transparencia ao código hexadecimal, para isto precisamos acrescentar ao final do código mais dois dígitos, com os valores que vão de 00 à FF, onde 00 é totalmente transparente e FF é uma cor sólida.
```css
#hex-transparencia {
    color: #ff00ff9a;
}
```

## HSL e HSLA
HSL é a sigla para *Hue* (matiz), *Saturation* (saturação) e *Lightness* (luminosidade).

**Hue (matiz):** é o grau na roda de cores (de 0 a 360 graus)
- 0 ou 360 é vermelho
- 120 é verde
- 240 é azul

**Saturation (saturação):** valor percentual
- 0% um tom de cinza
- 100% cor total

**Lightness (luminosidade):** luminosidade da cor
- 0% é preto
- 100% é branco

![hsl](https://pt.rakko.tools/tools/30/HSV.png)

```css
#hsl {
    color: hsl(0, 100%, 50%);
}
```
HSLA basicamente é uma extensão do HSL com a presença do canal *alpha*. Que nos permite aplicar um nível de transparência com o valor do canal *alpha* variando de 0.0 a 1.0.
```css
#hsla {
    background: hsla(120, 80%, 50%, 0.40)
}
```

O metodo mais comum nos projetos reais na maioria é o metodo hexadecimal ou RGB e RGBA quando se quer um nível de transparência.

Acesse o código de estudo [aqui](./index.html).