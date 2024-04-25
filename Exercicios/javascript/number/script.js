const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}`;
texto.innerHTML += `<p>com duas casa decimais: ${numero.toFixed(2)}`;