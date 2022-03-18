//--------acceder a propiedades de objeto

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    // agregar metodos a objetos
    nombreCompleto: function(){   
        return this.nombre + ' ' + this.apellido;

    }
}

// 1 forma
console.log(persona.nombre);

// 2 forma , la propiedad debe ir entr comillas
console.log(persona['nombre']);
console.log(persona['edad']);

// 3 forma con for in es un ciclo for especial
// for in  para recorrer propiedades del objeto

for( nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}


//-----agregar y eliminar propiedades a objetos

// agregar nueva propiedad a objeto o modificar valor de la propiedad

persona.tel = '555522554';
persona.nombre = 'carles'

console.log(persona);


// ----- eliminar una propiedad de un objeto

delete persona.tel;

console.log(persona)


//-------Formas de imprimir valores y propiedades de objeto------

//1 forma-----concatenar cada valor de cada propiedad

console.log( persona.nombre + ', ' + persona.apellido);

//2 forma------iterar cada una de las propiedades con for in
// se asigna el nombre de la variable que va recorrer el objeto, en este caso valorPropiedad
for( valorPropiedad in persona){
    console.log(valorPropiedad);
    console.log(persona[valorPropiedad]);
}

//3 forma--- con Object.values que regresa valores del objeto en un arreglo
// se define la variable arreglo que va recirbir el objeto y se le asignan los valore del objeto con Object.values
// lo valores se muestran en el arreglo

let personaArray = Object.values( persona );
console.log( personaArray );

//4 forma con JSON.stringify , nos devuelve propiedades y valores del objeto como una cadena de texto
// se declara la variable tipo cadena (string) que va recibir los valores del objeto

let personaString = JSON.stringify( persona );
console.log( personaString);