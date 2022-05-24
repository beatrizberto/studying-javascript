/*
Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

*/

/*
Primeira tentativa:

- não sei como definir o array "alunos"
- não sei como atribuir nota a cada aluno
- não sei como extrair os alunos aprovados para um novo array



 */
//array de onde vão vir os dados

const alunos = [
    //'alunos' é um array composto por objetos tipo chave: valor
    
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },

    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },

    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },

    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];


function alunosAprovados (arr, mediaFinal){
    // arr e mediaFinal são parâmentos, não variáveis. Sempre fico com essa dúvida


   let aprovados = []; //aprovados é o array auxiliar o enunciado
     
   for (let i = 0; i < arr.length; i++) {

    const {nota, nome} = arr[i]; //aqui está a técnica 'object destructuring' do enunciado. ver: https://dmitripavlutin.com/javascript-object-destructuring/

       if(nota >= mediaFinal) {
           aprovados.push(nome);
       }

    }

    return aprovados;
}
   

console.log(alunosAprovados(alunos, 5)) 
//na hora de chamar a função é que se referencia os dados que vão ser usados
