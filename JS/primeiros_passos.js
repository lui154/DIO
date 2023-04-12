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