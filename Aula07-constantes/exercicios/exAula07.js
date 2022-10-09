// Exercicio variáveis

const nome = "Kayne";
const sobrenome = "Ferreira";
const idade = 33;
const peso = 90;
const altura = 1.79;
let imc;
let anoNascimento;

anoNascimento = 1989;
imc = (peso/(altura*altura));

console.log(nome, sobrenome, 'tem', idade, 'anos,');
console.log('tem', altura + 'm de altura, pesa', peso + 'kg, e seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu no ano de', anoNascimento);

// Concatenações podem ser feitas com vírgula e o sinal "+"
// A vírgula une os dados com espaços entre elas
// Também é possível utilizar o comando ${var} 
// sem a necessitade de concatenar quando são utilizadas crases
// Exemplo: 

console.log();
console.log(`${nome} ${sobrenome} tem ${idade} anos, `);
console.log(`tem ${altura}m de altura, pesa ${peso}kg, e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu no ano de ${anoNascimento}.`);