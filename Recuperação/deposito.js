function deposito (nome, valor){

    let resultado = 0

    for (let index = 0; index < banco.clientes.length; index++) {

        if (nome == banco.clientes[index].titular){

            return resultado = "Deposito realizado. Seu novo saldo é: " + (banco.clientes[index].saldo + valor);
        }
        
        
    }

    return resultado;

 }

 function saque (nome, valor) {

     let resultado = 0

     for (let index = 0; index < banco.clientes.length; index++) {

          if ((banco.clientes[index].saldo - valor) < 0 ){

            return resultado = "Saldo Insuficientes!!"
        }

        else if(nome == banco.clientes[index].titular){

            return resultado = "Extração feita com sucesso. Seu novo saldo é: " + (banco.clientes[index].saldo - valor)
        }
        
    }

    return resultado;
   
}

console.log(banco.consultarCliente("Bendite Huggett"))
console.log(banco.deposito("Bendite Huggett", 20000))
console.log(banco.saque("Bendite Huggett", 5000))


module.exports = deposito;

const banco = require('./modulos/cliente')


// Prof travei legal nessa parte aki, mas fiz oq consegui flw :(

