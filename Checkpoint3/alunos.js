function Alunos(nome, faltas, notas) {

    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;


     this.calcularMedia = function () {

     return this.notas.reduce((acumulador, nota) => acumulador + nota) / this.notas.length;
     };

    

     this.addFalta = function() {

        this.faltas += 1;
    };
}

module.exports = Alunos;