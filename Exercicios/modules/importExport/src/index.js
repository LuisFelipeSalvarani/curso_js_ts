// import { nome as nome2, idade, sobrenome, soma, Pessoa } from "./modulo1";

// const nome = 'Felipe'
// const p1 = new Pessoa('Luis', 'Salvarani')

// console.log(nome2, nome, sobrenome, idade);
// console.log(soma(5, 6));
// console.log(p1);

// import * as MeuModulo from './modulo1';

// console.log(MeuModulo)

// Importando o default

import aquelaFuncao, { nome, sobrenome, idade, soma } from './modulo1';
console.log(aquelaFuncao(5, 6));
console.log(soma(5, 6));
console.log(nome, sobrenome, idade);