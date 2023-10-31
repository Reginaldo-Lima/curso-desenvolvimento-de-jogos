
function calcularImc(pesoKg, alturaM){
    return pesoKg / Math.pow(alturaM, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 25) {
        return ('Peso normal');
    } else if (imc > 25 && imc <= 30) {
        return 'Acima do peso';
    } else if (imc > 30 && imc <= 40) {
        return 'Obeso';
    } else {
        return 'Obsesidade Grave';
    }
}

/* função imediatamente invocada e função anonima*/
(function (){
    
    let pesoKg = 98;
    let alturaM = 1.72;
    
    let imc = calcularImc(pesoKg, alturaM);
    console.log(classificarImc(imc));
})();
