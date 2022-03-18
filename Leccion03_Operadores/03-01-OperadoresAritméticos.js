//operadores aritmeticos


let a = 3, b = 2;
let z = a + b;

console.log("Resultado de la suma es: " + z );

z = a - b;
console.log("el resultado de la resta es: " + z);

z = a * b;
console.log("el resultado de la multiplicación es: " + z);

z = a / b;  
console.log("el resultado de la división es: " + z);

z = a % b; // residuo de la división
console.log("el resultado de la operación modulo o residuo es: " + z);

z = a ** b; // exponente  3 con exponente 2 es = 3*3
console.log("el resultado del operador exponente es: " + z);


//----------incremento y decremento---------

let a1 = 3, b1 = 2;
let z1 = a1 + b1;

// ------------Incremento---------
//Pre-incremento (el operador ++ antes de la variable)
// se incrementa la variable en ese momento antes de ser utilizado su valor, primero se incrementa y luego se hace la asignacion
z1 = ++a1;

console.log(a1);
console.log(z1);
//post-incremento (el operador ++ despues de la avriable)
// primero se asigna y luego se incrementa la variable
z1 = b1++;

console.log(b1);
console.log(z1);


//-----decremento-------------

//Pre-decremento (el operador -- antes de la variable)
z1 = --a1;

console.log(a1)
console.log(z1)


//post-incremento (el operador ++ despues de la avriable)
// primero se asigna y luego se decrementa la variable
z1 = b1--;

console.log(b1)
console.log(z1)


//--------precedencia de operadores----------------- orden de prioridades

//tener en cuenta los niveles de la tabla de precedencia

let aa = 3, bb = 2, cc = 1, dd = 4;

let zz = aa * bb + cc / dd;
console.log(zz);

//-----

zz = cc + aa * bb / dd;
console.log(zz)


zz = (cc + aa) * bb / cc;
console.log(zz)



//-------operadores de asignación--------


let t = 1;

t += 3;  // esto es lo mismo que t = t + 3
console.log(t);


t -= 3;  // es lo mismo que t = t - 3
console.log(t);

/* otros operadores de asignación
-  *=, /=, %=, **=

*/

let nume = 8;

nume *= 2;

console.log(nume);

// operadores de comparación

let q = 3, p = 2, r = "3";

let o = q == r;  // se revisa el valor sin importar el tipo
console.log(o);

o = q === r; //revisa el valor pero tambien el tipo estrictamente igual
console.log(o);

o = q != r;  // revisa solo el valor y no el tipo
console.log(o);

o = q !== r;  // revisa tipo y valor
console.log(o);


// mayor que y menor que

let h = q > r;
console.log(h);

h = q >= r;
console.log(h)



//-------operadores logicos

// operador and && ---- regresa true si ambos operandos son true


let f = 9;
let valMin = 0, valMax = 10;

if( f >= valMin && f <= valMax){
    console.log("valor esta dentro del rango");
}else{
    console.log("valor fuera del rango");
}

// operador or ||  ------ regresa true si cualquiera de los operandos es true
// ejemplo or
let vacaciones = true;
let diaDescanso = false;

if (vacaciones || diaDescanso){
    console.log("padre puede asisitir al juego del hijo")
}else{
    console.log("padre no puede asistir al juego del hijo ( esta ocupado)");
}


// operador ternario------ 

/*es igual al if esle --- es decir
que una parte va ser verdadera y otra falsa  
*/

let resultado = (3 > 5) ? "verdadero" : 0;

console.log(resultado);

// numero par

let numero = 7;

resultado = (numero % 2 == 0) ? "es par" : "es impar";
console.log(resultado);

//----------convertir string a number  con funcion Number

let miNumero = "19cx";

 console.log(typeof  miNumero)

let edad = Number(miNumero);  // cambiar valor de string a numero con Number
console.log( edad);

// isNaN para saber si la variable no es un numero,, si no es un numero no hace nada el programa
if( isNaN(edad)){
    console.log("no es un numero")
}else{
    if(edad > 18){
        console.log("puede votar")
    }else{
        console.log("no puede votar")
    }
} 




// con el operador ternario

if( isNaN(edad)){
    console.log("no es un numero")
}else{
    resultado = (edad > 18) ? "puede votar" : "no puede votar;"

    console.log(resultado)
}

