function Conta ( titular, numero, tipo, saldo) {

    this.titular = titular;             
    this.numero = numero;
    this.tipo - tipo;
    this.saldo = saldo;

}

const dadosTitulares = require('./modulos/cliente')

// let conta1 = new Conta(dados[0].titular, dados[0].numero, dados[0].tipo, dados[0].saldo);
// let conta2 = new Conta(dados[1].titular, dados[1].numero, dados[1].tipo, dados[1].saldo);


let listaContas = [];

for (let contador = 0; contador < dadosTitulares.length; contador++) {
 
    listaContas.push(new Conta(dadosTitulares[contador].titular, dadosTitulares[contador].numero, dadosTitulares[contador].tipo, dadosTitulares[contador].saldo) );

}

console.log(listaContas[0]);

// const banco ={
//     clientes: listaContas,
//     consultarCliente: function(titular){
//         for(let i = 0; i < dados.length; i++){
//             titular = dados[i].titular
//         }
//         return titular = dados.titular
//     }
// }
