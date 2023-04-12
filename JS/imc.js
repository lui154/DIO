function calc(peso, altura){
   return peso / Math.pow(altura,2);
}
function classificar(imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}
(function main(){
    const peso = 60;
    const altura = 1.62;

    const imc = calc(peso, altura);
    console.log(classificar(imc));
})();