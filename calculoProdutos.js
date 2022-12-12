/*

3. Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de 
etiqueta e a escolha da condição de pagamento.
Ultilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo.

Codigo Condição de pagamento:
- A vista Débito, recebe 10% de desconto;
- A vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoDeEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoDeEtiqueta - (precoDeEtiqueta * 0.1));
}
else if (formaDePagamento === 2) {
    console.log(precoDeEtiqueta - (precoDeEtiqueta * 0.15));
}
else if (formaDePagamento === 3) {
    console.log(precoDeEtiqueta);
}
else{
    console.log(precoDeEtiqueta + (precoDeEtiqueta * 0.1));
}