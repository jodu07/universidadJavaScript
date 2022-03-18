let estudiante = {
     nombre: 'Luis',
     apellido: 'Franco',
     nombreApellido: function(){
          return this.nombre + ' '+ this.apellido;
     }

}

console.log(estudiante.nombreApellido());


// piramide de numeros con ciclo for

for(let contador = 1; contador <= 5; contador++){
     for(let repetidorNumero = 1; repetidorNumero <= contador; repetidorNumero++){
          console.log(contador);

         
      //    console.log(repetidorNumero);
                  
     }
    
   
}

