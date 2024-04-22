const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const comId = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = (indice + 1);
    return newObj;
});

console.log(pessoas);
console.log('*************************************************************');
console.log(nomes);
console.log('*************************************************************');
console.log(idades);
console.log('*************************************************************');
console.log(comId);