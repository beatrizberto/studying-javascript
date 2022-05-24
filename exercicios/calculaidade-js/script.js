/*Atividade: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}*/

function calculaIdade(anos) {

	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Fulano', 
    idade: 20,
};

const pessoa2 = {
    nome: 'Ciclano', 
    idade: 15,
};

const animal = {
    nome: 'Pistola', 
    idade: 5, 
    cor: 'cinza'
};
    
/* com call
console.log(calculaIdade.call(pessoa2, 5));
*/

//com apply

console.log(calculaIdade.apply(pessoa2, [5]));