# Intrudução ao CSS
## O que é CSS?
CSS é o acronimo de Cascading Style Sheets ou em tradução Folhas de Estilo em Cascata.  
Foi criado em 1994 por Hakon Wium Lie, sendo adotada pela W3C em 1995 e populalizando-se a partir dos anos de 1997.
* A CSS é uma linguagem de estilo.  
* Não é uma linguagem de programação.  
* Não é uma linguagem de marcação.
## O que pode ser criado com CSS?
* Layouts e estilização de página Web;
* Animações;
* Formas geometricas e desenhos;
* Filtros;
* Contadores;  
Sites para saber mais sobre CSS e suas possibilidades:  
[W3C Brasil](https://w3c.br), [W3C School](https://www.w3schools.com/css/), [Codepen.io](https://codepen.io).  
## Formas de declaração do CSS
### Propriedades e valores
Uma declaração em CSS é composta por uma propriedade e um valor. uma propriedade é uma característica de um elemento do nosso HTML. Um valor define o resultado de uma propriedade e como o navegador deve exibir o estilo daquele elemento.
>_seletor {  
    propriedade: valor;  
}_
>
Exemplo:

```css
h1 {
    background: red;
    color: white;  
}
```

### Maneiras de declarar CSS
**CSS Inline**: adicionamos o código CSS utilizando o atributo _`style`_ dentro das tags HTML, elemento por elemento. Este metodo tem prioridade entre os estilos, permitindo fazer atribuições específicas.<br>
Exemplo:
```html
<h1 style="background: red; color: white">
```

**CSS Interno:** o código CSS é adicionado dentro da tag `<head>`da página HTML, dentro desta tag adicionamos uma nova tag a `<style>`, e colocamos as regras CSS nessa área.  
Fica disponível apenas para aguela página. Porém carrega os dados mais rápido por ser um único arquivo.  
Exemplo:
```html
<head>
    <style>
        h1 {
            background: red;
            color: white;
        }
    </style>
</head>
```  
**CSS Externo:** é criado um arquivo com a extensão _.css_ com todas as regras CSS que queremos aplicar e este arquivo é referenciado no HTML da página através da tag `<link>`, dentro da tag `<head>`.  
É uma boa prática criar uma pasta _assets_ e nesta pasta criar outra com nome _css_ e lá criar o arquivo _.css_.  
```html
<head>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
```  
## Depurando o CSS
O processo de depuração (conhecido como _debug_), é uma forma de identificar problemas no código-fonte de uma aplicação e entender seu comportamento.  
Todos os navegadores tem a ferramenta _Dev Tools_ que é por onde podemos analizar o que está ocorrendo com quando a nossa página está em execução.