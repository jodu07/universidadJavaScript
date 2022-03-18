//la funcion se llama varias veces cada cierto tiempo


let reloj = () => {
    let fecha = new Date();  // fecha alctual con new date
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);