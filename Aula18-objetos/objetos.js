// Objects

// Objetos podem ser criados como variáveis
// e atributos podem ser atribuídos diretamente
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// ================================================
// Criando um método para gerar objetos (pessoa)
// A construção do objeto é necessária para a passagem dos parâmetros
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, 
        sobrenome, 
        idade
    };
}

// Os argumentos são enviados normalmente para a função
const p1 = criaPessoa('Roberto', 'Rongo', 35);
const p2 = criaPessoa('Oliver', 'Tsubasa', 15);
console.log(p1);
console.log(p2);
console.log(p1.nome, p2.nome);

// ================================================
// Métodos também podem ser criados dentro do objeto
const pessoa2 = {
    nome: 'Kojiro',
    sobrenome: 'Hyuga', 
    idade: 17,

    fala() {
        console.log(`Olá, ${pessoa2.nome} ${pessoa2.sobrenome}!!!`)
    }
};

pessoa2.fala();