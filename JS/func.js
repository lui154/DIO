function appDesconto(valor, desconto){
    return (valor-(valor*desconto));
}
function appJuros(valor, juros){
    return(valor+(valor*juros));
}

const precoEtiqueta = 100;
const formPagamento = 4;

if(formPagamento === 1){
    console.log(appDesconto(precoEtiqueta,0.1));
}else if( formPagamento === 2){
    console.log(appDesconto(precoEtiqueta,0.15));
}else if( formPagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(appJuros(precoEtiqueta,0.1));
}