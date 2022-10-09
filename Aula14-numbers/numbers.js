// Padrão IEEE 754-2008

let num1 = 1500; // Integer
let num2 = 2.795410021; // float

console.log(num1 + num2);
console.log(num1.toString() + num2.toString()); // Converte número para string

console.log(num1.toString(2)); // Converte o número para string binário

console.log(num2.toFixed(2)); // Limita as casas decimais para um valor desejado

console.log(Number.isInteger(num1)); // Valida se valor é inteiro

console.log(Number.isNaN(num1)); // Valida se o valor nao é um número (Not a Number)

let newNum1 = 0.7;
let newNum2 = 0.1;
console.log(newNum1 + newNum2); // Precisão de calculos decimais seguem o padrão IEEE 754-2008

newNum1 += newNum2; // 0.8
newNum1 += newNum2; // 0.9
newNum1 += newNum2; // 1
console.log(newNum1);

// Limitar as casa decimais pode parecer resolver o problema 
// Mas testes mostram que não é o caso,
// o método apenas 'arredonda' o valor, mas ele continua como float
// newNum1 = newNum1.toFixed(2);
console.log(newNum1.toFixed(2));
console.log(Number.isInteger(newNum1));

// O problema é resolvido com um simples parse
newNum1 = parseFloat(newNum1.toFixed(2));
console.log(newNum1);
console.log(Number.isInteger(newNum1))
