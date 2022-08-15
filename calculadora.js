function somar ( num1, num2 ){

    return num1 + num2;

}

console .log ( somar (5,195) );


// 2parte

function subtrair (num3, num4){
    
    return num3 - num4;
}

console .log ( subtrair ( subtrair(5,20),(4) ) );




function multiplicar (num5,num6){

    return num5 * num6;
}

console .log ( (multiplicar(15,3)), (9));




function dividir (num7, num8){

    return num7 / num8;
}

console .log( dividir( (dividir (5,5)), (5)));


// CALCULADORA - NÍVEL II

console.log ("-------------- Teste de Operações / Calculador --------------");       

console.log (dividir (100,0));


// CALCULADORA - NÍVEL III

function aoQuadrado (num9){

    return multiplicar (num9, num9)
}

console .log (aoQuadrado(15) );


function mediaDeTresNumeros (num10, num11, num13) {

    return dividir (multiplicar (num10,num11), + num13), 3;
}

console.log (mediaDeTresNumeros (5,7,8,) );


function calculaPorcentagem (num1, num2) {

    return dividir (multiplicar (num1, num2), 100);
}

console .log (calculaPorcentagem (100,10) );


function geradorDePorcentagem (num1, num2) {

    return dividir (multiplicar (num1,200), num2 );
}

console .log (geradorDePorcentagem(2,200) );