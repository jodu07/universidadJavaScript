// metodo apply es similar a call, tambien sirve para llamar desde un objeto metodos que estan definidos en otro objeto

// creamos el objeto
let Persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        //return this.nombre + ' '+ this.apellido;
        return titulo + ': ' +this.nombre + ' '+ this.apellido+ ', '+ tel;
    }
}

let Persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// uso de apply

console.log( Persona1.nombreCompleto()) ;

console.log(Persona1.nombreCompleto.apply( Persona2 ) );


// apply con parametros y argumentos


let arreglo = ['Ingeniero', '455455'];
console.log(Persona1.nombreCompleto.apply( Persona2, arreglo ) );

console.log(Persona1.nombreCompleto.apply( Persona2, ['Medico', '784444'] ) );