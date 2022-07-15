// Método Math

let num1 = 10.78;
let num2 = 10.39;
let num3 = 20.48;
let num4 = 20.52;

num1 = Math.floor(num1); // Arredonda valor para menos
console.log(num1);

num2 = Math.ceil(num2); // Arredonda valor para mais
console.log(num2);

num3 = Math.round(num3); // Arredonda para valor mais próximo
num4 = Math.round(num4);
console.log(num3);
console.log(num4);

// Encontra o maior/menor valor
console.log(Math.max(21,8,54,13,17,66,4,34,12,87,41,56,7));
console.log(Math.min(21,8,54,13,17,66,4,34,12,87,41,56,7));

// Gera um número aleatório entre 0 e 0.99999...
// É possível arredondar o valor utilizando 'Math.round' ou 'parseInt'
// Para definir um escopo, se multiplica o valor gerado pelo valor máximo desejado
// e para definir um valor mínimo, basta adicionar o valor desejado na expressão
console.log(Math.random());
console.log(parseInt(Math.random()*100)+1);
console.log(Math.round(Math.random()*100)+1);

console.log(Math.PI); // Valor de PI

console.log(Math.pow(2, 10)); // Potenciação (base, expoente)
console.log(2 ** 10); // Potenciação (alt)

console.log(Math.sqrt(81)); // Raiz
console.log(81 ** (1/2)); // Raiz (alt) (radicando ** (radical))
console.log();