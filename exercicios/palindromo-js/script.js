/*function verificaPalindromo (string){
//verificar se a string existe. Se não existir, return faz sair da função.
    if(!string) return "string inexistente";
 
//solução 1, partindo da premissa de que checaremos só uma palavra.      
split: separa a palavra letra por letra, criando uma string
reverse: inverte a sequência de letras
join: junta novamente as letras      

    return 
    string.split("").reverse().join("") === string;
        }*/


 //solução 2
 
 function verificaPalindromo2 (string){
     if (!string) return "string inexistente";


    for (let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
        return false;
        }
    }

    return true;
 }

console.log(verificaPalindromo2("abba"));

      