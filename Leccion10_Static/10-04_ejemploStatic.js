

class Persona{

    static contadorPersonas = 0; //atributo solo de nuestra clase

   

    constructor(nombre, apellido){

        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;

        // llamamos el atributo static con la clase
        
        console.log('se incrementa contador:'+ Persona.contadorPersonas);     

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
        return this.idPersona+ ' '+ this._nombre + ' ' + this._apellido;
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

    datosEmpleado(){
        return 'Nombre Empleado: ' + this._nombre + ' ' + this.apellido + ', Correo: ' + this.email;
    }

}

// clase Hijo

class Empleado extends Persona{

    static contadorEmpleados = 0;

    // definir constructor con la palabra reservada super para llamar contructor de la clase padre

    constructor (nombre, apellido, departamento){
        super(nombre, apellido);  // llamar contructor de la clase padre
        this._departamento = departamento;
        Empleado.contadorEmpleados++;

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

    datosEmpleado(){
        return super.datosEmpleado() + ', Departamento(Area): ' + this.departamento;
    }
    
}



let persona1 = new Persona('jairo', 'suarez');
console.log(persona1.toString());

let persona2 = new Persona('Maria', 'Yepes');
console.log(persona2.toString());

let empleado1 = new Empleado('Sonia', 'Ramirez', 'Sistemas');
console.log(empleado1.toString())


console.log(Persona.contadorPersonas);

console.log(Empleado.contadorEmpleados);


