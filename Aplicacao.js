import input from 'readline-sync';
console.log("Aplicação de Juros\n");

let valordevido = input.question("Informe o valor devido: R$ ");
if(valordevido<=0){
    console.log("O valor da dívida deve ser maior que zero");
}else{
let dias = input.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
if(dias == 0 ){
    console.log("Você está em dia!");
}
else if(dias<0){
    console.log("O valor de dias não pode ser negativo");
}else if(dias>0){

console.log('');

console.log("Valor original da dívida: R$ "+ valordevido);
console.log("Dias atrasados: "+ dias);

let juros = dias > 15 ? 0.1 : 0.05;
console.log("Taxa de juros: "+ juros*100+"%")
valordevido = Number(valordevido)+Number(valordevido*juros);
console.log("Valor total com juros: R$ "+ valordevido);
}}
