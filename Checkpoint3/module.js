let Alunos = require('./alunos');
let Curso = require('./curso');
let Estudantes = require('./estudantes');

let aluno1 = new Alunos('Izabela', 3, [10, 8, 9.5, 10]);

console.log(aluno1);

console.log(aluno1.calcularMedia());

aluno1.addFalta();

console.log(aluno1.faltas);



console.log(Curso);

Curso.adicionarAluno(aluno1);

console.log(Curso);


let aluno2 = new Alunos('Leo', 3, [6, 7, 5, 5]);

Curso.adicionarAluno(aluno2);

console.log(Curso);


let aluno3 = new Alunos('Larissa', 3, [6, 7.3, 5, 8]);

Curso.adicionarAluno(aluno3);

console.log(Curso);



console.log(Curso.aprovacao(aluno1));

console.log(Curso.aprovacao(aluno2));

console.log(Curso.aprovacao(aluno3));
// testando o metodo aprovacaoTodos
console.log(Curso.aprovacaoTodos());



Curso.adicionarListaAlunos(Estudantes);

console.log(Curso);

console.log(Curso.aprovacaoTodos());

