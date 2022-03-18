

class Persona{

    constructor(nombre, apellido){

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

    toString(){

        return this.nombreCompleto();
    }

    // metodo static solo se va asociar con esta clase y no con los objetos que se creen de esta clase
    static saludar(){
        console.log('saludo desde el metodo static');
    }

    static saludar2(palito){
        console.log(palito.nombre + ' '+ palito.apellido);
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

    //------sobreescritura: para agregar un valor de una propiedad de la clase hijo a una funcion definida en la clase padre
    // practicamente es definir de nuevo el metodo con las nuevas propiedades del hijo
    // utilizamos super para llamar la funcion definida en la clase pádre


    nombreCompleto(){
        return super.nombreCompleto() + ', '+ this._departamento;
    }
/*
    saludar2(){
        return super.saludar2() + ', '+ this._departamento;
    }*/
    
}


let empleado1 = new Empleado('Jean', 'Arenas', 'Sistemas');
console.log( empleado1.toString());


let persona1 = new Persona('jairo', 'suarez');
console.log(persona1.toString());

//-----------------

// console.log(persona1.saludar());  no es posible llamar un metodo static desde un objeto creado de la clase

Persona.saludar();

// a un metodo static si se le pueden pasar argumentos

Persona.saludar2(persona1);

// llamando metodo static desde la clase hija

Empleado.saludar();
Empleado.saludar2(empleado1);