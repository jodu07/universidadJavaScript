//Herencia: la clase hijo hereda los atributos y metodos de la clase padre

// clase Padre

class Persona{

    constructor(nombre, apellido){

        //propiedades

        this._nombre = nombre;
        this._apellido = apellido;      

    }

    // metodos

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    // creamos metodo(funcion) nombre completo, no necesita la pálabra function dentro de una clase
    nombreCompleto(){   
        return this._nombre + ' ' + this._apellido;

    }
}

// clase Hija

class Empleado extends Persona{

    // definir constructor con la palabra reservada super para llamar contructor de la clase padre

    constructor (nombre, apellido, departamento){
        super(nombre, apellido);  // llamar contructor de la clase padre
        this._departamento = departamento;

    }

    //metodos

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobreescritura: para agregar un valor de una propiedad de la clase hijo a una funcion definida en la clase padre
    // practicamente es definir de nuevo el metodo con las nuevas propiedades del hijo
    // utilizamos super para llamar la funcion definida en la clase pádre


    nombreCompleto(){
        return super.nombreCompleto() + ', '+ this._departamento;
    }
    
}


// crear objeto de la clase padre 

let persona1 = new Persona('jairo', 'suarez');
console.log(persona1);

// crear objeto de la clase hija

let empleado1 = new Empleado('Jean', 'Arenas', 'Sistemas');

console.log(empleado1);

console.log(empleado1.nombre);

empleado1.nombre = 'Camilo';

console.log(empleado1);

console.log(empleado1.nombreCompleto());