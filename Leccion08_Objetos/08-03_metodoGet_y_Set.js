// metodo Get para acceder y modificar valores de las propiedades del objeto
// para traerlo y mostrar el valor

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'es',
    get idiomaMayuscula(){
        return this.idioma.toUpperCase();   //toUpperCase para convertir texto en mayuscula
    },
    set modificarIdiomaMayuscula( modificarIdiomaMayuscula){
        this.idioma = modificarIdiomaMayuscula.toUpperCase();
    },
   
    get nombreCompleto(){   
        return this.nombre + ' ' + this.apellido;

    }
}

console.log( persona.nombreCompleto ); 

console.log( persona.idiomaMayuscula );

//---uso de metodo set= para modificar los valores de las propiedades del objeto

persona.modificarIdiomaMayuscula = 'en';

console.log( persona.idiomaMayuscula );
console.log( persona.idioma );