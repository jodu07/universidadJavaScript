const ingresos = [
    new Ingreso('salario', 1000),
    new Ingreso('venta carro', 1000)
];

const egresos = [

    new Egreso('mercado', 100),
    new Egreso('arrendo', 100)
];

cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=>{

    let total = 0;
    for(let ingreso of ingresos){
        total += ingreso.valor;
    }

    return total;    

}

let totalEgresos = ()=>{

    let total = 0;
    for(let egreso of egresos){
        total += egreso.valor;
    }

    return total;    

}



let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();  // formula para sacar porcentaje

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}


const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US',{style: 'currency', currency:'USD', minimumFractionDigits:2});
}


const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US', {style: 'percent', minimumFractionDigits:2});
}



const cargarIngresos = ()=>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById("listaIngresos").innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor"> ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick='eliminarIngreso(${ingreso.idIngreso})'></ion-icon>
            </button>
        </div>
    </div>
   </div>
    `;
    return ingresoHTML;
}

const eliminarIngreso = (idIngreso)=>{

    let eliminarIndiceArreglo = ingresos.findIndex(ingreso => ingreso.idIngreso === idIngreso);

    ingresos.splice(eliminarIndiceArreglo, 1);

    cargarCabecero();
    cargarIngresos();


}


const cargarEgresos = ()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById("listaEgresos").innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor"> ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick='eliminarEgreso(${egreso.idEgreso})'></ion-icon>
            </button>
        </div>
    </div>
   </div>
    `;
    return egresoHTML;
}

const eliminarEgreso = (idEgreso)=>{

    let eliminarIndiceArreglo = egresos.findIndex(egreso => egreso.idEgreso === idEgreso);

    egresos.splice(eliminarIndiceArreglo, 1);

    cargarCabecero();
    cargarEgresos();

}


agregarDato = () =>{
    let formulario = document.forms['formulario'];
    let tipo = formulario["tipo"];
    let descripcion = formulario["descripcion"];
    let valor = formulario["valor"];

    if(descripcion.value !== '' && valor.value != '')
       if(tipo.value === 'ingreso'){

        // se convierte el valor a numero con Number
           ingresos.push( new Ingreso(descripcion.value, Number(valor.value)));
           cargarCabecero();
           cargarIngresos();

       }
       else if(tipo.value === 'egreso'){
           // otra forma de convertir el valor a numerico poner antes el mas del argumento cuando se esta creando el objeto
           egresos.push( new Egreso(descripcion.value, +valor.value));
           cargarCabecero();
           cargarEgresos();
       }
    
}