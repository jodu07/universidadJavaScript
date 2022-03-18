

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


let empleado1 = new Empleado('Carlos', 10000);


console.log(empleado1.obetenerDetalles());


let gerente1 = new Gerente('Flancio', 100000, 'Sistemas');

console.log(gerente1.obetenerDetalles());



