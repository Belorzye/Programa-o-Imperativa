let Aluno = require('./alunos');

let listaDeAlunos = require('./estudantes');


 let Curso = {
    nome: 'Biologia',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: [],
    
    adicionarAluno: function(alunos) {
        this.listaEstudantes.push(alunos);
    },

    
     adicionarListaAlunos: function(lista) {
        
        for (let i = 0; i < lista.length; i++) {
           
            let alunos = new Aluno(lista[i].nome, lista[i].faltas, lista[i].notas);
           
            this.listaEstudantes.push(alunos);
        }
     },

     
     aprovacao: function(alunos) {
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) {
            return true;
        } else if (aluno.calcularMedia() >= this.notaAprovacao * 1.1 && aluno.faltas == this.faltasMaximas) {
            return true;
        } else {
            return false;
        }
     },
    
     aprovacaoTodos: function() {

        let aprovados = [];

        this.listaEstudantes.forEach(alunos => {

            aprovados.push(this.aprovacao(alunos));

        });

        return aprovados;
    }
}

module.exports = Curso;