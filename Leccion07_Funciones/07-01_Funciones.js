// Una función es un codigo reutilizable
//este codigo reutilizable se puede llamar tantas veces como necesitemos

// lo argumentos van dentro de los parentesis, una funcion puede o no tener argumentos y se separan con coma

miFuncion(3, 7);

miFuncion(7, 14)



//declaración de la función  clasica
function miFuncion(a, b){
    console.log("suma= " + (a+b));
    console.log(arguments.length);
    // arguments es una propiedad
}

// se manda a llamar la funcion  -- llamando la funcion 
miFuncion(2, 6);

// la funcion se puede ejecutar en cualquier parte del programa, antes o despues de ser declarada por el concepto de Hoisting


//----FUNCION CON RETURN
// retorna el valor de la operación

function miFuncion2(a, b){
    console.log(arguments.length);
    return a + b;     
     //se puede retornar cualquier valor que se desee
}
let resultado = miFuncion2(2, 3);

console.log(resultado);


//--funciones de tipo expresion

//declaracion de una funcion tipo expresion
let operacion = function (a, b, c, d){
    console.log(arguments.length);
    return a + b * c / d
};

resultado = operacion(4, 5, 3, 4);

console.log(resultado);



//---funciones Self-Invoking --- funciones que se mandan a llamar asi mismas

// la funcion puede tener o no argumentos

(function(a, b){
    console.log('ejecutando la funcion: '+(a + b));
})(3, 4); 

/* esta funcion no se ´puede reutilizar , no se puede volver a llamar 
          porque no se esta asignando a ninguna variable ni un nombre,
          solo se llama la funcion en este momento y es la unica vez que se puede volver a llamar
          util para proyectos web
          se utiliza en el momento que se necesite llamar una funcion asi misma en el momento en que carga el programa. 
          pero no es reutilizable en el programa
          no es comun pero util en algunos casos
          */

//----------funciones como objetos

//las funciones pueden ser descritas como objetos
// los objetos pueden tener propiedades y metodos asociados a cada uno de los objetos

//las funciones al ser objetos tambien propiedades y metodos


console.log(typeof miFuncion)

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//toString es un metodo

