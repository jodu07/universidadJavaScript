class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){

        super(nombre, apellido, edad);

        this._fechaRegistro = fechaRegistro;
        
        this._idCliente = ++Cliente.contadorClientes
    }

    get idClien (){
        return this._idCliente;
    }

    get fechaRegist () {
        return this._fechaRegistro;        
    }

    set editFechaRegist (editFechaRegist){
        this._fechaRegistro = editFechaRegist;
    }

    datosCliente(){
        return this._idCliente + ' ' + this._nombre + ' ' + this._apellido + ', '+ this._edad;        
    }

    toString(){

        return super.toString() + ', idCliente: '+ this._idCliente + ', Fecha de registro: '+ this._fechaRegistro;
    }

}