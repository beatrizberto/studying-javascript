/*Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número (ok)
Realize as seguintes validações:
1- Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
2- Se o array não for do tipo 'object', lance um erro do tipo TypeError
3- Se o número não for do tipo 'number', lance um erro do tipo TypeError
4- Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
5- Utilize a declaração try...catch
6- Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function validaArray (arr, num){
    
    try {
    
    //quando chamar função vazia, ex. console.log (validaArray());
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

    //ex. console.log (validaArray(5, 5));
    if (typeof arr !== 'object') throw new TypeError("'Array' precisa ser do tipo 'object'.");

    //console.log (validaArray([],'a'));
    if (typeof num !== 'number') throw new TypeError("'Num' precisa ser do tipo 'number'.");

    //
    if (arr.length !== num) throw new RangeError("Tamanho inválido.");

    return arr;
    
  
    }

    catch (e){
        if(e instanceof ReferenceError) {
            console.log ("Este erro é um ReferenceError.")
            console.log(e.message)
        }

        if(e instanceof TypeError) {
            console.log ("Este erro é um TypeError.")
            console.log(e.message)
        }

        if(e instanceof RangeError) {
            console.log ("Este erro é um RageError.")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado: " + e)
        }

    }

}

console.log (validaArray([11, 12, 13, 14, 15],5));
