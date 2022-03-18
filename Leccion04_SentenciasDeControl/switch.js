let numero = 1;

let numeroTexto = 'valor desconocido';

switch ( numero ){
    case 1:
        numeroTexto = 'numero uno';
        break;
    case 2:
        numeroTexto = 'numero dos';
        break;
    case 3:
        numeroTexto = 'numero tres';
        break;    
    case 4:
        numeroTexto = 'numero cuatro';
        break;
    default:  // la opcion por default puede ir al inicio o al final, si se garegra al inicio hay que agregar break, si se agrega al final break es opcional
        numeroTexto = 'caso no encontrado';
} 
console.log(numeroTexto);

// si no se pone el break despues de cada expresion se va ejecutar la siguiente sentencia hasta donde encuentre un break

// ejemplo estaciones con switch

// swicth si compara los tipos

let mes = 11;
let estacion = 'estacion desconocida';

switch ( mes ){
    case 1: case 2: case 12:
        estacion = 'invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'verano';
        break;    
    case 9: case 10: case 11:
        estacion = 'otoño';
        break;
    default:  // la opcion por default puede ir al inicio o al final, si se garegra al inicio hay que agregar break, si se agrega al final break es opcional
        estacion = 'numero incorrecto';
} 
console.log(estacion);


