// Arrays

// Arrays em Javascript podem conter vários tipos de dados
// como strings, números, boolean ou até mesmo objetos
// Porém, isso não é considerado uma boa prática
const coisas = ['Luiz', 'João', 'Maria', 30, true];
console.log(coisas);

const alunos = ['Luiz', 'João', 'Maria'];
console.log(alunos); // Acesso ao array
console.log(alunos[0]); // Acesso ao índice de um array
console.log(alunos[1]);

alunos[0] = 'Eduardo'; // Dados podem ser alterados apontando-se o índice
console.log(alunos); 

alunos[3] = 'Robson'; // Dados também podem ser inseridos no array
console.log(alunos);
// Diferente de Java, arrays são dinâmicos e podem crescer ou diminuir
// É recomendado que se crie arrays como variáveis 'const'
// pois variáveis 'let' podem ser alteradas(array virar número ou string) 
// durante o código, o que não é desejado
// Diferente de 'variável', um valor mesmo dentro de uma constante, pode ser alterado

console.log(alunos.length); // Verifica tamanho do array

// É possível acessar índices vazios em Javascript
// pois os mesmos contém dados chamados de 'undefined'
console.log(alunos[50]);

alunos.push('Luiza'); // Adiciona objetos no final do array
console.log(alunos);

alunos.unshift('Cloves'); // Adiciona objetos no início do array
console.log(alunos);

alunos.pop(); // Remove o ultimo objeto do array
console.log(alunos);

const removido = alunos.pop(); // É possível exibir ou guardar em uma variável o que foi removido
console.log(removido);
console.log(alunos);

alunos.shift(); // Remove o primeiro elemento de um array
console.log(alunos);

alunos.push('Cloves');
alunos.push('Luiza');
console.log(alunos);

console.log(alunos.slice(0, 3)); // Exibe o array em um escopo (índice min, índice max)
console.log(alunos.slice(0, -1)); // Exibe o array excluindo os finais (índice min, -removido)

console.log(typeof alunos); // Não é possível checar se o objeto é um array dessa forma
console.log(alunos instanceof Array); // Mas é possível avaliar 