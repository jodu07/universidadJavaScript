
// llamadas asincronas con uso d ela funcion setTimeout 

//setTimeout  nos permite iniciar una nueva tarea

// en este caso vamos a pasar una funcion de tipo callback para que una vez que se cumpla un cierto tiempo se dispare la llamada a la funcion de tipo callback
// es decir que las funciones se ejecutas despues del tiempo establecido

function miFuncionCallback(){
    console.log('saludo asincrono despues de 8 segundos');
}

setTimeout(miFuncionCallback, 8000); // se ejecuta despues de 5 segundos

//otra forma mandando la funcion directamente
setTimeout( function(){ console.log('saludo asincrono 2 despues de 3 seg.')}, 3000);


// con funciones flecha

setTimeout( ()=> console.log('saludo asincrono 3 despues de 15 seg.'), 15000 );