// hay difrenetes formas para declarar arreglos

// let autos = new Array('BMW','Toyota','ferrari'); ----- esta es una forma antigua de declarar arreglos


//--definir arreglo y asignar valores
const autos = ['BMW','Mercedes Benz','ferrari'];

console.log(autos);

console.log(autos[2]);

// recorrer elementos del arreglo

for(let i = 0; i < autos.length; i++){
    console.log(i + " = " + autos[i]);
}

// modificar elementos de un arreglo

autos[1] = 'MercedesBenz';

console.log(autos[1]);

//-------agregar elemenots a un arreglo con la funcion push

// con la funcion push se agrega al final otro indice

autos.push("Audi");

console.log(autos);

//---otrs formas de agregar un elemento a un arreglo
// conocer tamaño del arreglo
console.log(autos.length);

autos[autos.length] = 'Cadillac';

console.log(autos);

// agregar indices y dejar valores en cero pero no es recomendable

autos[6] = 'Porshe';
console.log(autos);

//---preguntar si es un arreglo

console.log(typeof autos);


// forma correcta de preguntar si es un arreglo segun ultmio estandar del 2015
console.log(Array.isArray(autos));


console.log( autos instanceof Array );