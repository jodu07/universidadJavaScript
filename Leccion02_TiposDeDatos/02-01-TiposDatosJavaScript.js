//Tipo de datos

//string

var nombre = "Jhonnatan"; //las cadenas deben de ir entre comillas dobles o sencillas

console.log(nombre);

nombre = 10

//typeof para saber el tipo de dato que se esta utilizando
console.log(typeof nombre);



// tipo numerico 
var numero = 100;

console.log(numero);
console.log(typeof numero);



//tipo Object

var objeto = {
    nombre: "Jhonnatan",
    apellido: "Dussan",
    telefono: "31244555"

}

console.log(objeto);


//tipo boolean

var bandera = false;

console.log(typeof bandera);

console.log(bandera);



//tipo de dato function

function miFunction(){}
console.log(miFunction);
console.log(typeof miFunction);

//tipo de dato symbol

var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);


//tipo clase es una function......las clases en javaScript son funciones tambien
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
}

console.log(Persona);
console.log(typeof Persona);


//tipo de dato undefined

var x;

console.log(x);   //valor del tipo de dato
console.log(typeof x); // tipo de dato

x = undefined;
console.log(typeof x);


//null = ausencia de valor

var y = null;
console.log(y);
console.log(typeof y);


// los arreglos son de tipo object

var autos = ['Bmw', 'aaa', 'chevrolet'];
console.log(autos);
console.log(typeof autos);


// valores vacios ---- asignar cadenas vacias a nuestras variables

var z = '';
console.log(z);
console.log(typeof z);



//concatenación de cadenas en javaScript


var nombre = 'juan';
var apellido = 'perez';

var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = 'Edgar' + ' ' + 'dussan';
console.log(nombreCompleto2);

var x = nombre + 219 + 47;   // el numero lo trata como una cadena
console.log(x);

// si queremos sumar los valores


// las expresiones se evaluan de izquierda a derecha ----- se toma el primer valor para determinar el tipo de dato
//contexto de string o cadena 

x= nombre + (2 + 4);  // encuentra primero la cadema y lo toma como string y se concatena con el resto
console.log(x);

x = 2 + 4 + nombre; // como encuentra primero los dos numero entonces determina que es numerico y realiza la operación
console.log(x)

/* uso basico de var let y const
ya no se recomienda usar la palabra reservada var para declarar una variable

ahora se usa la palabra reservada let para declarar una variable y cons para una contante

no se puede reasignar un nuevo valor a una variable declarada con const

*/

// si no se tiene el valor de la variable se puede declarar la variable sin valor y s ele asigna despues el valor

// es recomendable primero asiganar las variables y luego se le asignan los valores
let nombre1;
nombre1 = "Jhonnatan";
console.log(nombre1)


//se le debe asignar un valor que no se puede modificar-----una vez que se le asigna un valor no se puede modificar

const apellido1 = "Duusan";
apellido1 


//buenas practicas 

let nombreCompletoo= "Juan Perez";
console.log(nombreCompletoo); 

let x1, x2;
x1= 10, x2= 20;
let resultado = x1 + x2;

console.log(resultado)


// reglas para definir nombres

/*javaScript es senseible a mayusculas y minusculas para las variables
una variable no puede inciar con un numero
las variables pueden iniciar solo con letra ó _ ó $
tampoco sepueden utilizar las palabras reservadas de javascript para declarar variables
*/
 
let a1nombreCompleto;
let _nombreComleto;
let $nombreCompleto;

