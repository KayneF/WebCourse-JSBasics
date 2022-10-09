
const numero = Number(prompt("Digite um numero: "));
const numeroTit = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTit.innerHTML = numero;

texto.innerHTML = ' ';
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)} </p>`;
texto.innerHTML += `<p>É inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)} </p>`;