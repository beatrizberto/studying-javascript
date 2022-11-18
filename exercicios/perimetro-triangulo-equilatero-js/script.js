/* Desafio
Dado o comprimento dos lados de um triângulo equilátero, escreva um programa para encontrar a área da circunferência do triângulo equilátero dado.

Entrada
A entrada será dada por um inteiro N que representará os lados do triângulo. 

Saída
A saída deverá retornar “A area da circunferencia é: “,  e em seguida o valor do perimetro do triângulo

 */

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let pi = 3.14159265358979323846;
 
let N = gets();

//TODO: Retorne a área do perímetro do triângulo

const resultado = ((N/Math.sqrt(3))**2)*pi;

print('A area da circunferencia eh: ' + resultado.toFixed(2));