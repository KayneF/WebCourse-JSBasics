/**
 * Operadores
 *      +  Adição
 *      -  Subtração
 *      *  Multiplicação
 *      /  Divisão
 *      ** Potênciação
 *      %  Modulus
 *      ++ Incremento
 *      -- Decremento
 *      += Incremento atribuido
 *      -= Decremento atribuido
 *      *=  Multiplicação atribuída
 *      /= Divisão atribuída
 *      **=  Potenciação atribuída
 */

const num1 = 10;
const num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log();


// Pre incremento exibe o valor incrementado/decrementado
// Pos incremento exibe o valor e depois incrementa/decrementa

let contador = 1;
console.log(contador++);
console.log(contador++);
console.log(contador--);
console.log(++contador);
console.log(--contador);
console.log();


// Incremento/decremento definido
contador += 2;
console.log(contador);
contador += 3;
console.log(contador);

console.log();
console.log("Incremento potência");
for (i=0; i<5; i++) {
    contador **= 2;
    console.log(contador);
}
