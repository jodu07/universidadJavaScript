
// clase padre
class Persona{

    static contadorPersonas = 0;



    constructor(nombre, apellido, edad = 0){

        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        
        this._idPersona = ++Persona.contadorPersonas;
        console.log('se incrementa contador:'+ Persona.contadorPersonas);  

    }

    // metodos

    get idPer(){
        return this._idPersona;        
    }
    get nombrePer(){
        return this._nombre;        
    }
    get apellidoPer(){
        return this._apellido;        
    }
    get edadPer(){
        return this._edad;        
    }

    set editNombrePer (editNombrePer){
        this._nombre = editNombrePer;
    }

    set editApellidoPer (editApellidoPer){
        this._nombre = editApellidoPer;
    }

    set editEdadPer (editEdadPer){
        this._nombre = editEdadPer;
    }   
    
    datosPersona() {
        return `
        idPersona: ${this._idPersona}, 
        ${this._nombre} 
        ${this._apellido}, 
        Edad: ${this._edad}`;
    }

    toString(){

        return this.datosPersona();
    }

}


//---------


//---------




// objetos persona

let persona1 = new Persona('andres', 'cuellar', 25 );

console.log(persona1);

console.log(persona1.idPer);

console.log(persona1.toString());

console.log(persona1.datosPersona());


let persona2 = new Persona('gustavo', 'ceron', 45 );
console.log(persona2.toString());

// Objetos Empleado


let empleado1 = new Empleado ('camilo', 'sanchez', 35, 45545445);

console.log(empleado1);

console.log(empleado1.toString());

let empleado2 = new Empleado ('Milena', 'sanchez', 35, 45545445);

console.log(empleado2.idEmp);

let empleado3 = new Empleado ('Julia', 'sanchez', 35, 45545445);

console.log(empleado3.idEmp);  // / no le asigno id por ser el tercer objeto empleado y solo se le asigan hasta 2 objetos empleado

// Objetos Clientes

let cliente1 = new Cliente ('Falcao', 'Garcia', 36, new Date());

console.log(cliente1);

console.log(cliente1.toString());


let cliente2 = new Cliente ('Hugo', 'Rodallega', 30, new Date());

console.log(cliente2.toString());

console.log(cliente2.datosCliente());

cliente2.editFechaRegist = new Date();

console.log(cliente2.fechaRegist);

console.log(cliente2.toString());

console.log(cliente2.idClien);
