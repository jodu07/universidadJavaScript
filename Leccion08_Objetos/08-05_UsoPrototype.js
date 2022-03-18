
// Prototype: sirve para agregar una nueva propiedad con el valor para todos los objetos fuera del constructor

function Persona(nombre, apellido, email){
    this.nombre = nombre; // el this indica la propiedad del objeto y al otro lado se indica el parametro que va pasar el valor a la propiedad
    this.apellido = apellido;
    this.email = email;

    //agregar una funcion en esta funcion contructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '444445';

// creamos un objeto de tipo persona con la palabra reservada new y llamamos el metodo constructor
let padre = new Persona( 'juan', 'Rojas', 'pedror@gmail'); // metodo que crea un objeto de tipo persona
console.log( padre );
padre.tel = '11111'
console.log( padre.tel );

let madre = new Persona('Maria', 'perez', 'mperez@gmail');

console.log(madre);
console.log(madre.nombreCompleto());
console.log(madre.tel);


console.log(padre);