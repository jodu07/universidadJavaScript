

async function funcionConPromesaAwaitTimeout(){
    console.log('inicio funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('promesa con await y timeout'), 10000);
    });
    console.log(await miPromesa);
    console.log('fin funcion');
}

funcionConPromesaAwaitTimeout();

