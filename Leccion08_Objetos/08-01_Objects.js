// un objeto puede conter promiedades y metodos

//declarar objeto 

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    // agregar metodos a objetos
    nombreCompleto: function(){   
        return this.nombre + ' ' + this.apellido;

    },
    correoEdad: function(){
        return "correo es: " + this.email + ' y la edad es: ' + this.edad;
    }

}
//con this se accdede a las propiedades(atributos) definidas dentro del objeto
/*operador especial this = es una variable que apunta al objeto que se esta trabajando en ese momento
thsi es un apuntador al objeto que se esta ejecutando*/

console.log(persona.nombre);

//hay que poner parentesis para llamar la funcion
console.log(persona.nombreCompleto());
console.log(persona.correoEdad())


//--------- new para crear un objeto   --- new = reservar nuvo espacio de memoria
// crear un objeto con new

let persona2 = new Object();  // se crea un objeto vacio sin propiedades

// luego se le pyeden agregrar las propiedades de esta forma

persona2.nombre = 'Luis';
persona2.direccion = 'calle 325';
persona2.telefono = '3125444';


console.log( persona2.telefono);