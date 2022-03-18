class Empleado extends Persona{
    

    static contadorEmpleados = 0;

    static get MAX_EMP(){
        return 2;
    }

    constructor(nombre, apellido, edad, sueldo = 0){

        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        

        if(Empleado.contadorEmpleados < Empleado.MAX_EMP){

            this._idEmpleado = ++Empleado.contadorEmpleados;

            console.log('se incrementa contador empleados:'+ Empleado.contadorEmpleados);

        }

    }

    get idEmp (){
        return this._idEmpleado
    }

    get sueldoEmp () {
        return this._sueldo;        
    }

    set editSueldoEmp (editSueldoEmp){
        this._sueldo = editSueldoEmp;
    }

    datosEmpleado(){
        return this._idEmpleado + ' ' + this._nombre + ' ' + this._apellido + ', '+ this._edad + ', Sueldo: '+ this._sueldo;        
    }

    toString(){

        return super.toString() + ', idEmpleado: '+ this._idEmpleado + ', Sueldo: '+ this._sueldo;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', '+ this._departamento;
    }
    

}
