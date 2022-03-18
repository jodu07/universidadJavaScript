// una promesa es un codigo que tiene varios estados
// then en caso de que la promsesa sea resuelta  y en caso de error catch

//declaramos la variable promesa y creamos el objeto tipo promesa
// contiene parametros de tipo callback
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('se produjo un error');
});

//miPromesa.then(valor => console.log(valor), error => console.log(error));

miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));