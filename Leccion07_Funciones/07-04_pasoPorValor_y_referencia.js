//------PASOPOR VALOR
// paso por valor = es cuando utilizamos tipos que no son objetos, por ejemplo tipos numericos y booleanos

//---tipos primitivos 
// no tienen atributos ni metodos, contiene solo un valor como se muestra en la variable x

let x = 10;  // este es un valor primitivo porque no tiene n i propiedades ni metodos

function cambiarValor(a){
    console.log(a);
    a = 20;  

}

//paso por valor
cambiarValor(x); //10
console.log(x); 

// solo se paso una copia del valor de la variable x a la variable a y la variable x no se modifica

//console.log(a);



//------------ PASO POR REFERENCIA

// la variable perosna almacena una refrencia a el objeto

const Persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

console.log(typeof Persona);

function cambiarValorObjeto(p1){
    p1.nombre = 'Jhonnatan';
    p1.apellido = 'Dussan';
}

//paso por referencia
cambiarValorObjeto(Persona);  
console.log(Persona);


/* en el paso por valor no se puede modificar el valor de una variable original,
 solo se pasa la copia a la funcion
aunque haya sido definida por algun metodo,
no se modifica el valor de la variable original

en paso por referencia sise puede podificar siempre y cuando se pase la referencia del objeto

*/