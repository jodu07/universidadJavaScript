

// se recomienda poner funciones anonimas, es decir que se declara una variable y se asigna la funcion a esa variable


// funcion normal
let miFuncion = function(){
    console.log('saludos desde mi funcion');
}

miFuncion();

// funcion flecha

const miFuncionFlecha = () => {
    console.log('saludos desde mi funcion flecha');
}

miFuncionFlecha();
    
// con funcion Flecha no se puede hacer uso de hoisting


// otras formas de definir funciones flechas

const miFuncionFlecha2 = () => console.log('saludos desde mi funcion flecha2');

miFuncionFlecha2();



const saludar = () => {
    return 'saludos desde funcion flecha saludar';
}
console.log(saludar());



// funcion flecha simplificada
const saludar2 = () => 'saludos desde saludar2';

console.log(saludar2());



//si queremos regresar un objeto
const regresaObejto = () => ({nombre: 'juan', apellido: 'lara'});

console.log(regresaObejto());


// si queremos recibir parametros

const funcionConParametroClasico = function(mensaje){
    console.log(mensaje);
}

funcionConParametroClasico('hola');

// si recime solo un parametro se puede omitir el parentesis antes de la flecha
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros('saludos con parametro');

//const funcionVariosParametros = (op1, op2) =>  op1 + op2; forma simple con una operacion sencilla

//forma con mas operaciones se defiene el cuerpo {}
const funcionVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `resultado: ${resultado}`;
} 
console.log(funcionVariosParametros(5, 5));