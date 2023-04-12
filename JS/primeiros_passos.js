//combustivel
const precoGas = 5.60;
const precoEta = 4.50;
const gastoMedio = 10;
const distKM = 113;

const consumo = distKM / gastoMedio;
const tipoComb = 'Gasolina';

if(tipoComb === 'Etanol'){
    const valorGasto = consumo * precoEta;
    console.log(valorGasto.toFixed(2));
}else{
    const valorGasto = consumo * precoGas;
    console.log(valorGasto.toFixed(2));
}

//notas
const nota1 = 8;
const nota2 = 9;
const nota3 = 7;
const media = (nota1+nota2+nota3)/3;
console.log(media);

if(media < 5 ){
    console.log("Reprovado");
}else if(media >= 5 && media <= 7){
    console.log("Recuperação");
}else{
    console.log("Aprovado");
}

//imc
const peso = 60;
const altura = 1.62;
const imc = peso / Math.pow(altura,2);
console.log(imc);

if(imc < 18.5){
    console.log('Abaixo do Peso');
}else if(imc >= 18 && imc <= 25){
    console.log('Peso Normal');
}else if(imc > 25 && imc < 30){
    console.log('Acima do Peso');
}else if(imc >= 30 && imc <= 40){
    console.log('Obeso');
}else{
    console.log('Obesidade Grave');
}

//produto
const precoEtiqueta = 100;
const formPagamento = 1;

if(formPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta*0.1));
}else if( formPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta*0.15));
}else if( formPagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta + (precoEtiqueta*0.1));
}