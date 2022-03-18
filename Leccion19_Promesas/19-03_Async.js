// async nos facilita el uso de promesas


async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));



//------------async y await
// async nos indica que la funcion debe regresar una promesa y await nos indica que va procesar una promesa
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });
    //consumimos la promesa con await
    console.log(await miPromesa);
}

funcionConPromesaYAwait();
