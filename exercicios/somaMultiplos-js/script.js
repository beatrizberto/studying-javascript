const a = 3;
const n = 18;
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
let soma = 0;

for (let i = a; i <= n; i++) {
      if (i % a ===0) {
    soma = soma + i;
     }
  
}
console.log(soma)
