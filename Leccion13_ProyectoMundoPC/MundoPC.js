
class dispositivoEntrada{

    constructor (tipoEntrada = '', marca = ''){

        this._tipoEntrada = tipoEntrada;
        this._marca = marca;      

    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString (){
        return `Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
    
}


class Mouse extends dispositivoEntrada{

    static contadorMouse = 0;

    constructor(tipoEntrada, marca){        
        super(tipoEntrada, marca);
        this._idMouse = ++Mouse.contadorMouse;
    }

    toString(){
        return `Mouse: [IdMouse: ${this._idMouse}, ${super.toString()}]`;
    }
}


class Teclado extends dispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){        
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `Teclado: [IdTeclado: ${this._idTeclado}, ${super.toString()}]`;
    }
}


class Monitor{

    static contadorMonitores = 0;

    constructor(marca = '', tamano = ''){ 

        this._idMonitor = ++Monitor.contadorMonitores; 
        this._marca = marca;
        this.tamano = tamano;     
        
        
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }

    set tamano(tamano){
        this._tamano = tamano;
    }

    toString (){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}]`;
    }

}

class Computador{

    static contadorComputador = 0;

    constructor(nombre, precio = 0, teclado, mouse, monitor){

        this._idComputador = ++Computador.contadorComputador;

        this._precio = precio;

        this._nombre = nombre;
        this._tecladoPC = teclado;
        this._mousePC =mouse;
        this._monitorPC = monitor;


    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitorPC;
    }

    set monitor(monitor){
        this._monitorPC = monitor;
    }

    get teclado(){
        return this._tecladoPC;
    }

    set teclado(teclado){
        this._tecladoPC = teclado;
    }
    
    get mouse(){
        return this._mousePC;
    }

    set mouse(mouse){
        this._mousePC = mouse;
    }    
   
    toString(){
        return `Computador: ${this._idComputador}, ${this._nombre}  \n${this._monitorPC} \n${this._tecladoPC} \n${this._mousePC}`;
    }
}

class Orden{

    static contadorOrden = 0;

    static get MAX_COMPUTADORES(){
        return 10;
    }

    constructor(){
        
        this._idOrden = ++Orden.contadorOrden;
        this._computadores = [];
    }
    
    // metodos

    get idOrden(){
        return this._idOrden
    }

    get computadores(){
        return this._computadores;
    }

    agregarComputador(computador){

        if(this._computadores.length < Orden.MAX_COMPUTADORES){
            
            //  console.log("orden solicitada con exito");
            this._computadores.push(computador);

           // otra formma de agregar un producto this._productos[this.contadorProductos++] = producto; 

        
              
          }else{
              console.log("Maximo de computadores permitidos, no se pueden agregar mas productos");
          }        
        
    }

    calcularTotal (){

        let valorTotal = 0; 
        
        for (let computador of this._computadores){
            valorTotal += computador._precio;  // valorTotal = valorTotal + producto._precio;
        }
        return valorTotal;
    }

    calcularTotal (){

        let valorTotal = 0; 
        
        for (let computador of this._computadores){
            valorTotal += computador._precio;  // valorTotal = valorTotal + producto._precio;
        }
        return valorTotal;
    }

    listaOrden(){

        let computadoresOrden = '';

        //iteramos el arreglo   
        for(let computador of this._computadores){            
            
            computadoresOrden += '\n' + computador.toString();
            //otra forma de llamar el metodo toString del arreglo de computadores que esta iterando 
            //computadoresOrden += `\n${computador}`; 
        }
            console.log(`orden: ${this._idOrden} Total: $${this.calcularTotal()}, Computadores: ${computadoresOrden}`);        
    }

}




// Pruebas

let mouse1 = new Mouse('USB', 'HP');

mouse1.marca = 'DELL';

console.log(mouse1);

console.log(mouse1.toString());


let teclado1 = new Teclado('USB', 'Asus');

console.log(teclado1);

console.log(teclado1.toString());

let monitor1 = new Monitor('HP', '14 pul.');

console.log(monitor1.toString());



let computador1 = new Computador('PC2000', 160000, teclado1, mouse1, monitor1);
let computador2 = new Computador('PC500XT', 170000, teclado1, mouse1, monitor1);


console.log(computador1.toString());


let orden1 = new Orden();

orden1.agregarComputador(computador1);
orden1.agregarComputador(computador2);


console.log(orden1.listaOrden());

console.log(orden1.calcularTotal());

console.log(computador1.toString());
//otra forma de llamar metodo String
console.log(`${computador1}`);


let orden2 = new Orden;
orden2.agregarComputador(computador2);
orden2.agregarComputador(computador1);

console.log(orden2.listaOrden());




