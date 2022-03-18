


function sumar(){
    const formulario = document.forms['formulario1'];
    

    let op1 = formulario['operandoA'];
    let op2 = formulario['operandoB'];

    let = resultado = parseInt(op1.value) + parseInt(op2.value);

    if(isNaN(resultado))
    resultado = 'La operacion no incluye numeros';


    document.getElementById("resultado").innerHTML = `resultado: ${resultado}`;

    console.log(resultado);
}

function restar(){
    const formulario = document.forms['formulario1'];
    

    op1 = formulario['operandoA'];
    op2 = formulario['operandoB'];

    let = resultado = parseInt(op1.value) - parseInt(op2.value);

    if(isNaN(resultado))
    resultado = 'La operacion no incluye numeros';


    document.getElementById("resultado").innerHTML = `resultado: ${resultado}`;

    console.log(resultado);
}

function multiplicar(){
    const formulario = document.forms['formulario1'];
    

    op1 = formulario['operandoA'];
    op2 = formulario['operandoB'];

    let = resultado = parseInt(op1.value) * parseInt(op2.value);

    if(isNaN(resultado))
    resultado = 'La operacion no incluye numeros';


    document.getElementById("resultado").innerHTML = `resultado: ${resultado}`;

    console.log(resultado);
}

function dividir(){
    const formulario = document.forms['formulario1'];
    

    op1 = formulario['operandoA'];
    op2 = formulario['operandoB'];

    let = resultado = parseInt(op1.value) / parseInt(op2.value);

    if(isNaN(resultado))
        resultado = 'La operacion no incluye numeros';


    document.getElementById("resultado").innerHTML = `resultado: ${resultado}`;

    console.log(resultado);
}


