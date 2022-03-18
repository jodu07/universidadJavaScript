let promesa = new Promise((resolver) => {
    console.log('inicio promesa');
    setTimeout(()=> resolver('Saludos con Promesa y Timeout'), 5000);
    console.log('fin promesa');
});


promesa.then(valor => console.log(valor));