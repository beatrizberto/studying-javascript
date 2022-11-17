const funcoes = require('./funcoes-auxiliares');

console.log(funcoes.gets());

/* 
açúcar sintático:

const { gets, print } = require('./funcoes-auxiliares');

print(gets());

*/



/* 
Destruir objetos:

const pessoda = {
    nome: 'Vitor';
}

opção1.
const nome = pessoa.nome;
opção2 (mais moderno):
const { nome } = pessoa;

*/

