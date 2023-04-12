const preCombustivel = 4.53;
const gastoMedio = 10;
const distKM = 113;

const consumo = distKM / gastoMedio;
const gasto = consumo * preCombustivel;

console.log(gasto);
console.log(gasto.toFixed(2));