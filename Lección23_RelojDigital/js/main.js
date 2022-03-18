
const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;


    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia}, ${mes} ${año}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    
    //animacion contenedor... classList nos regresa una lista con todas las clases css que esten aplicando a este elemento
    // toggle funciona como un interruptor...
    //si esta aplicado el estilo lo va quitar y sino esta aplicado lo va a aplicar
    // un segundo se aplica al otro no
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora)=>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;    
}

// para llamar la funcion cada segundo
setInterval(mostrarReloj, 1000);
