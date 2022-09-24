const Avaliacao = require('./Aplicacao1');
const Espectadores = require('./Aplicacao2');


Espectadores.push (new Avaliacao(2,30));


const pesquisa = {
    mediaIdades : function(array){

        let soma = array.reduce(function(acumulador, i){
          return acumulador + i.idade},0);
        
          return soma / Espectadores.length
      
      },
    qtdPessoas : function (array){

        let pessoasRegular = array.filter(function(array){
          return array.opiniao === 1
        });
      
        return pessoasRegular.length
      
      },
    porcentagem : function(array){

        let espectadoresBom = array.filter(function(array){
          return array.opiniao === 2
        });
      
        return espectadoresBom.length / Espectadores.length * 100
      
      }

}


console.log(mediaIdades(Espectadores));  
console.log(qtdPessoas(Espectadores));
console.log(porcentagem(Espectadores)+" %");