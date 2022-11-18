// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let N = parseInt(gets()); 

let n = 1 + 8*N; //formula matemática já dada, parte da fórmula

//TODO: Retorne a altura máxima que o triângulos de moedas terá

let alturaQuebrado = (-1 + Math.sqrt(n)) / 2; //formula completa que calcula a altura do triângulo em função de unidades N (no caso, moedas)

let alturaMaxTriangulo = Math.floor(alturaQuebrado); //arredonda para baixo a altura, já que as moedas não podem ser quebradas e vão ser descartadas

print(alturaMaxTriangulo);