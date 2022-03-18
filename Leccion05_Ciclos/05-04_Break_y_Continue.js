//----break para romper un ciclo en el primer momento
// imprimir numeros pares de 1 a 10
//terminar ciclo con break cuando encuentre el primer numero par

for( let contador = 0; contador <= 10; contador++ ){
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}

console.log("fin del ciclo for");


//-----ejemplo con continue---- en caso del que numero no sea par ir a la siguiente iteracion y no imprimir el valor

for (let cont = 0; cont <=10; cont++){
    if(cont % 2 !== 0){
        continue;// ir a la siguiente iteracion del ciclo for
    }
    else{
        console.log(cont);
    }
}