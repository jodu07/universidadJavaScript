'use strict'

// manejo de errores

try{
    
    let x = 10;
    //miFuncion();
    throw 'mi error';
}
catch(error){
    console.log(error);
} 
finally{
    console.log('termina la ejecucion de errores');
}

console.log('continuamos...');


//------------ ejemplo

let resultado = -5;

try{
    //x = 10;
    if(isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'es cadena vacia';
    else if(resultado >= 0) throw 'valor positivo';
    else if(resultado <= 0) throw 'valor negativo';
}
catch(error){
    console.log(error);
   // console.log(error.name);
   // console.log(error.message);
}
finally{
    console.log('termina revision de errores');
}