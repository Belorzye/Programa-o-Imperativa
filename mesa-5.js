function polegadaecentimetro(polegada){
    return polegada * 2,80;
}

console.log(polegadaecentimetro(10));

function url(link){
    return "https://github.com/Belorzye"+link+".com.br";
}

console.log( url("google") );

function exclamacao(frase){
    return frase + "!";
}

console.log( exclamacao("Hello, world!"));

function idade(a){
    return a * 7;
}

console.log(idade(5));

function horadetrabalho(salario){
    return salario / 10;
}

console.log(horadetrabalho(2000));

function alturaePeso(altura, Peso){
    return altura / Peso;
}

console.log(alturaePeso(1.61, 48))

function paraMaiuscula(texto) {
    return texto.toUpperCase();
}

console.log(paraMaiuscula('Teste'))

function tipoString(parametro) {
    console.log(typeof parametro);
}

tipoString(2)


function retornarCircunferencia(raio) {
    return 2 * Math.PI * raio;
}

console.log(retornarCircunferencia(76));

