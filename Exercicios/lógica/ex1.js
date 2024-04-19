// Minha resolução

// function maiorMenor (x, y) {
//     if(x === y) return 'Os numeros são iguais';

//     if(x > y) return `${x} é o maior`;

//     if(x < y)  return `${y} é o maior`;
// }

// segunda forma

// function maiorMenor(x, y) {
//     return x > y ? x : y;
// }

// terceira forma

// const maiorMenor = (x, y) => {
//     return x > y ? x : y;
// }

// Melhor forma

const maiorMenor = (x, y) => x > y ? x : y;

console.log(maiorMenor(1, 2));