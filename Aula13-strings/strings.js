// Trabalhando com strings

let texto = 'The quick brown fox, jumps over the lazy dog';

// Concatenação
console.log(texto + ' for sure!');
console.log(texto, 'for sure!');
console.log(`${texto} for sure!`); // Melhor opção
console.log(texto.concat(' for sure!'));

// Indice da posição da palavra/letra informada
// Quando não encontrado, ele retorna -1
// Case sensitive
console.log(texto.indexOf('fox'))
console.log(texto.indexOf('Fox'))

// 
console.log(texto.charAt(5));
console.log(texto[5]);

// Retorna os caracteres minúsculos em um array
// Aceita expressões regulares
// poder ser usada para encontrar 1 ou vários caracteres
// A letra 'g' se refere ao grupo
console.log(texto.match(/[a-z]/g));

// Busca um ou mais caracteres, e exibe sua posição
// Aceita expressões regulares
console.log(texto.search(/[s]/));

// Troca palavras ou caracteres dentro de uma string
// Aceita expressões regulares
// pode trocar todos os caracteres do mesmo tipo
// usando expressões regulares
console.log(texto.replace('quick', 'slow'));
console.log(texto.replace('brown', 'white'));
console.log(texto.replace('fox', 'duck'));
console.log(texto.replace(/o/g, 'a'));

// Exibe o tamanho (numero de caracteres) total da string
console.log(texto.length);

// Corta um pedaço de uma string de acordo com o índice
// Números negativos cortam inversamente (de trás para frente)
console.log(texto.slice(4, 16));
console.log(texto.slice(-3));

// Divide a string em um array de acordo com o caractere selecionado
// O caractere selecionado irá ser excluído do array
// Um valor de parâmetro pode ser adicionado para definir
// o quanto poderá ser exibido
console.log(texto.split('o'));
console.log(texto.split(' '));
console.log(texto.split(' ', 5));

// Converte o case de uma string
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());


console.log();
let numero = 3326;

// Converte um valor numérico em string
console.log(typeof(numero));
console.log(typeof(numero.toString()));