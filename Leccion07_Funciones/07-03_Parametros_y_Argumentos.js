// parametros lista de variables que definimos o va recibir una funcion 

// los argumentos son los valores que se pasan a la funcion cuando se llama
// los argumentos son un arreglo


let sumar = function (a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

resultado = sumar(4, 5);

console.log(resultado);

//--- asignar valores por defecto en los parametros

let sumar2 = function (a =5, b = 6){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2]
};

resultado = sumar2(5, 3, 7);

console.log(resultado);


//--ejemplo sumar todos los argumentos


let result = sumarTodo(5, 4, 13, 10, 18, 2, 10);

console.log(result);

function sumarTodo(){
    let suma = 0;
    for(let i=0; i < arguments.length; i++){
      //  suma = suma + arguments[i];     como yo lo hice
      suma += arguments[i]; // forma correcta ---  equivale a suma = suma + arguments[i];
    }
    //console.log("la suma de los argumentos es: " +suma);
    return suma;
}



// ejemplo multiplicar argumentos

let valorFinal = funcionMultiplicar(7, 4, 10, 74);

console.log(valorFinal);

function funcionMultiplicar(){
    let valorAcumulado = 1;
    for(let j=0; j < arguments.length; j++){
        valorAcumulado *= arguments[j];
    }
    return valorAcumulado;
}

