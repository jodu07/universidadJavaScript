//call: nos permite llamar desde un objeto un metodo que esta definido en otro objeto 


// creamos el objeto
let Persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' +this.nombre + ' '+ this.apellido+ ', '+ tel;
    }
}

let Persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// uso de call para llamar el metodo nombreCompleto del objeto persona1 con los valores de perosna2

console.log( Persona1.nombreCompleto('abogado', '662244')) ;

console.log(Persona1.nombreCompleto.call( Persona2 ) );

//-------paso de argumentos en parametros con call


console.log(Persona1.nombreCompleto.call( Persona2, ' Ingeniero', '455222' ) );

