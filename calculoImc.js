/*
2) calcule o imc 

formula do imc:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal.
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave;

*/

const peso = 35.7
const altura = 1.50

const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc <= 18.5) {
    console.log(' você esta abaixo do peso ideal')
}
else if (imc >= 18.5 && imc <= 25) {
    console.log(' peso normal')
}
else if (imc >= 25 && imc <= 30) {
    console.log(' voce esta acima do seu peso ideal')
}
else if( imc >= 30 && imc <= 40){
    console.log(' voce esta obeso')
}
else{
    console.log(' obesidade grave!')
}