/* Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

OK 1- Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
2 -Dentro de ContaBancaria, construa o getter e o setter de saldo;
OK 3- Dentro de ContaBancaria, crie os métodos sacar e depositar;
ok 3- Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
OK 4- Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
5- Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
OK 6- Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
OK 7- Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
8- Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais. */




class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia; //this se refere a conta bancária
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; 
        //sempre que um valor tiver getter & setter, colocar underline para que getter & setter tenham o nome correto
        }
   
//GETTER & SETTER

        get saldo(){
            return this._saldo;
        }

        set saldo(valor){
            this._saldo = valor;

        }



    sacar(valor){
        if (valor > this._saldo){
            return "Operação negada";
            }
        this._saldo = this.saldo - valor;

        return this._saldo;
    }
            
    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;

    }
}


class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito) {
      super (agencia, numero); //o método 'super' manda as infos pra classe-mãe
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
       
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }


}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super (agencia, numero); //o método 'super' manda as infos pra classe-mãe
        this.tipo = 'poupança';

    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super (agencia, numero); //o método 'super' manda as infos pra classe-mãe
        this.tipo = 'universitaria';

    }

    sacar (valor) {
        if (valor>500){
            return 'A operação excede o limite.'
        }

        this._saldo = this._saldo - valor;
    } 
    //sobrescreve o método da herdade da classe-mãe

}