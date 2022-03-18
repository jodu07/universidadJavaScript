
class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio = 0){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

        
    }

    //metodos

    producto (){
        return this._nombre+ ', '+ this._precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set editNombre(editNombre){
        this._nombre = editNombre;        
    }

    get precio (){
        return this._precio;
    }

    set editPrecio (editPrecio){
        return this._precio = editPrecio;        
    }

    toString(){
        return `idproducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }

}


class Orden{

    static contadorOrden = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
       
       // this._contadorProductos =  0       

    }
    
    // metodos

    get idOrden(){
        return this._idOrden
    }

    get productos(){
        return this._productos
    }

    agregarProducto(producto){

        if(this._productos.length < Orden.MAX_PRODUCTOS){
            
            //  console.log("orden solicitada con exito");
            this._productos.push(producto);

           // otra formma de agregar un producto this._productos[this.contadorProductos++] = producto; 

        
              
          }else{
              console.log("Maximo de productor permitidos, no se pueden agregar mas productos");
          }
        
        
    }

    calcularTotal (){

        let valorTotal = 0; 
        
        //iteramos el arreglo  
        for (let producto of this._productos){
            valorTotal += producto._precio;  // valorTotal = valorTotal + producto._precio;
        }
        return valorTotal;
        /*
        for (let i=0; i <= this._productos.length; i++){        

               suma = this._productos[i] + suma;
        }
        console.log(suma);
        */
    }

    listaOrden(){

        let productosOrden = '';

        //iteramos el arreglo  
        for(let producto of this._productos){            
            
            productosOrden += '\n{' + producto.toString() + '}';

        }
        console.log(`orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);        
    }

}


let producto1 = new Producto('empanada', 1000);
let producto2 = new Producto('buñuelo', 600);
let producto3 = new Producto('arepa', 1000);
let producto4 = new Producto('papa rellena', 1500);
let producto5 = new Producto('gaseosa', 2000);
let producto6 = new Producto('hamburguesa', 5000);
let producto7 = new Producto('perro caliente', 6000);
let producto8 = new Producto('limonada', 1000);


console.log(producto1.producto());
console.log(producto8.toString());

console.log(producto8.idProducto);


let orden1 = new Orden();


orden1.agregarProducto(producto1);

orden1.agregarProducto(producto2);

orden1.agregarProducto(producto3);

orden1.agregarProducto(producto4);

orden1.agregarProducto(producto5);

orden1.agregarProducto(producto6);
orden1.agregarProducto(producto6);






console.log(orden1.productos);

console.log(orden1.idOrden);



console.log(orden1.calcularTotal());

console.log(orden1.listaOrden());