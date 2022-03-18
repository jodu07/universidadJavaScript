// esto no es recomendado
inicio:

for (let cont = 0; cont <=10; cont++){
    if(cont % 2 !== 0){
        continue inicio;  // ejecuta el ciclo que esta despues de la etiqueta inicio
    }
    else{
        console.log(cont);
    }
}