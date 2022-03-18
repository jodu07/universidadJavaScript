
// en clases no se aplica el concepto de hoisting, por eso es necesario crear la claase para poder crear objetos despues

// declarar clase

class Persona{

    constructor(nombre, apellido){

        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombreCompleto(){
        return this._nombre + ' '+ this._apellido;
    }

    set modificarNombreMayuscula(modificarNombreMayuscula){
        this._nombre = modificarNombreMayuscula.toUpperCase();
    }

}

let persona1 = new Persona('jairo', 'suarez');

console.log(persona1);

let persona2 = new Persona('Luisa', 'Lara');

console.log(persona2);


console.log(persona1.nombreCompleto);

persona1.modificarNombreMayuscula = 'andres';  //modificar nombre con set

console.log(persona1);

persona2._nombre = 'Nadia';

console.log(persona2)