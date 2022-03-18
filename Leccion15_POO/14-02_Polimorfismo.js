

class Empleado{

    constructor(nombre = '', sueldo = 0){

        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obetenerDetalles(){
        return `nombre: ${this._nombre}, sueldo: $${this._sueldo}`; 
    }
}

class Gerente extends Empleado{
    
    constructor(nombre, sueldo, departamento){
        
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obetenerDetalles(){
        return `${super.obetenerDetalles()}, departamento: ${this._departamento}`; 
    }

}


function determinarTipo(tipo){
    console.log(tipo.obetenerDetalles());

    // instanceof se deben poner primero las clases de menor jerarquia
    if(tipo instanceof Gerente){
        console.log('es un objeto de tipo gerente');
    }
    else if(tipo instanceof Empleado){
        console.log('es un objeto de tipo empleado');
    }
    else if(tipo instanceof Object){        
        console.log('es un tipo objeto');
    }
}



let empleado1 = new Empleado('Carlos', 10000);

let gerente1 = new Gerente('Flancio', 100000, 'Sistemas');


determinarTipo(empleado1);

determinarTipo(gerente1);