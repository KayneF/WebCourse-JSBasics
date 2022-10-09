// Alerta simples sem retorno
alert('Olá');

// Confirmação boolean
const confirma = confirm('Deseja continuar?');
if (confirma == true) {

    alert('Confirmado!')

    // Caixa de dialogo que retorna o input
    let nome = prompt('Digite seu nome: ');
    let num1 = prompt('Digite um número: ');
    let num2 = prompt('Digite outro número: ');

    num1 = Number(num1);
    num2 = Number(num2);

    // Parse pode ser feito reatribuindo variável
    // Também pe possível fazer diretamente como no ex abaixo
    let res = (parseInt(num1) + parseInt(num2));
    alert(`Olá ${nome}, seu resultado é ${num1 + num2}`);

} else {
    alert('Deixa pra lá...')
}
