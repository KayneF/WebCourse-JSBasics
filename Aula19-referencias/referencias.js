// Valores primitivos e valores por referência

// =====================================================================
/**
 * Primitivos (imutáveis) -> string, number, boolean, 
 * undefined, null, bigint, symbol
 *      Os valores primitivos são imutáveis, pois quando 
 *      passado um valor de uma variável para outra, 
 *      a variável original se mantém, pois são apenas copiados
 */

let a = 'Original';
let b = a; // O valor de 'varA' foi copiado para 'varB'
console.log(a);
console.log(b);

a = 'Alternativo'; // O valor de 'varA' foi reatribuído
console.log(a); // Agora varA possui o novo valor atribuído
console.log(b); // porém, varB possui o mesmo valor que tinha antes
// Em outras palavras, valores primitivos precisam ser reatribuídos
// quando necessário

// =====================================================================
/**
 * Referência (mutáveis) -> array, object, function
 *      Os valores por referência são mutáveis, e quando alterados, 
 *      apresentam o mesmo valor tanto no original, quanto na 
 *      referência, pois valores referenciados apontam para o 
 *      mesmo endereço no espaço da memória. Diferentemente dos
 *      primitivos que são uma cópia do original. 
 */

// Exemplo com arrays
let varA = [1, 2, 3];
let varB = varA; // O valor de 'varA' está sendo referenciado em 'varB'
console.log(varA);
console.log(varB);

varA.push(4);
varA.push(5);
console.log(varA);
console.log(varB); // Note que agora, ambos possuem os mesmos valores

varB.pop();
console.log(varA);
console.log(varB); // Não importa aonde é feito a mudança

// Caso queira copiar um array ou objeto dentro de outra variável
// se utiliza um 'spread'
let varC = [...varA];
console.log(varC);

varC.push(5, 6, 7);
console.log(varC); // Os valores 5, 6 e 7 foram inseridos em 'varC'
console.log(varA); 
// Note que desta vez, 'varA' sem mantém como antes, 
// pois se trata de uma cópia, não de uma referência

// =====================================================================
// Tudo que se aplica em arrays, é aplicado em objetos
const pA = { // Objeto
    nome: 'Kojiro',
    sobrenome: 'Hyuga'
};

const pB = pA; // Referência
console.log(pB);
console.log(pA);

pB.sobrenome = 'Kobayashi';
console.log(pB);
console.log(pA);

const pC = {...pA}; // Spread

pC.sobrenome = 'Hyuga';
console.log(pC);
console.log(pA);