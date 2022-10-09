// Métodos/Funções
// =============================================
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

// =============================================
const variavel = saudacao('Kayne');
console.log(variavel);

// Parâmetros de funções podem ser atribuídas com um valor padrão
// Caso a chamada da função não enviar um dos parâmetros
// ou mais, os valores padrões serão utilizados
function soma(x = 5, y = 5) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(10, 10)); // É feito o cálculo utilizando os 2 parâmetros enviados
console.log(soma(10)); // É feito o cálculo usando apenas 1 parâmetro enviado e o outro da função
console.log(soma()); // É feito o cálculo usando os valores padrões atribuídos na função

// =============================================
// Esta função...
const raiz = function(n) {
    return Math.sqrt(n);
};

// ...é a mesma que esta função!
const raizAlt = n => Math.sqrt(n);

const num = 10;
console.log(raiz(num).toFixed(2));
console.log(raizAlt(num).toFixed(2));