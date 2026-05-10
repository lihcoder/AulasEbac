// definição da classe Conta Bancaria

class ContaBancaria {
    //propriedades

    #saldo;

    //método construtor
    constructor(){
        this.#saldo = 0;
    }

    //Métodos
    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor){
        return valor <= this.#saldo;
    }

    getSaldo(){
        return this.#saldo;
    }
}

// definição da classe caixa eletronico

class CaixaEletronico {
    constructor(conta){
        this.conta = conta;
    }

    depositar(){
        //Pegar o valor do deposito
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);

        //fazer o depósito na conta
        this.conta.depositar(valorDeposito);

        //exibir o saldo atualizado
        this.mostrarSaldo(this.conta.saldo);
    }

    sacar(){
        //pegar valor do saque
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);

        //fazer o saque na conta
        if(this.conta.temSaldoParaSacar(valorSaque)){
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        } else {
            //mostrae saldo insuficiente
            this.mostrarSaldo("Insuficiente para saque");
        }
    }
}

//criar instâncias
const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);