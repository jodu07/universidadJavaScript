// constructores para poder crear mas objetos del mismo tipo

//Funcion constructor de objetos de tipo persona

function Persona(nombre, apellido, email){
    this.nombre = nombre; // el this indica la propiedad del objeto y al otro lado se indica el parametro que va pasar el valor a la propiedad
    this.apellido = apellido;
    this.email = email;

    //agregar una funcion en esta funcion contructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// creamos un objeto de tipo persona con la palabra reservada new y llamamos el metodo constructor
let padre = new Persona( 'juan', 'Rojas', 'pedror@gmail'); // metodo que crea un objeto de tipo persona

console.log( padre );

let madre = new Persona('Maria', 'perez', 'mperez@gmail');

console.log(madre);
console.log(madre.nombreCompleto());


padre.nombre = 'carlos';
console.log(padre);



//llamar metodo de la funcion

console.log(padre.nombreCompleto());


//-----Distintas Formas de crear objetos y diferentes tipos de variables

let miObjeto = new Object();
let miObjeto2 = {}; // se recomeidna mas esta sintaxis, sintaxis simplificada,

let miCadena = new String ('hola');
let miCadena2 = 'Hola';   // sintaxis simplificada, forma recomendable

let miNumero = new Number(1);
let miNumero2 = 1;   // sintaxis simplificada, forma recomendable

let miBoolean = new Boolean(false);
let miBoolean2 = false;   // sintaxis simplificada, forma recomendable

let miArreglo = new Array();
let miArreglo2 = [];  // sintaxis simplificada, forma recomendable

let miFuncion = new Function();
let miFuncion2 = function(){}; // sintaxis simplificada, forma recomendable