
// funciones simples


function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('funcion 2');
}


miFuncion1();

miFuncion2();


//------------- funciones callback

//funciones para procesos que se ejecutan de manera asincrona

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resultado = op1 + op2;
    funcionCallback(`resultado: ${resultado}`);

}

sumar(7, 7, imprimir);


//-----------------


let imp = function imprimirResultado(mensaje){
    console.log(mensaje);
}

function multiplicar(op1, op2, imprimir){
    let resultado = op1 * op2;
    imprimir(`resultado de la multiplicacion es: ${resultado}`);

}

multiplicar(2, 20, imp);
