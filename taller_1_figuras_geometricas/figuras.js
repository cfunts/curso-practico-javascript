//*******Funciones auxiliares para el cuadrado***********
console.group("Cuadrados");
function perimetroCuadrado(lado)
{
    return lado*4;
}

function areaCuadrado(lado)
{
    return lado*lado;
}
console.groupEnd();

//***********************

//*******Funciones auxiliares para el Triangulo***********
console.group("Triángulos");
function perimetroTriangulo(lado1,lado2,base)
{
    return lado1+lado2+base;
}
function areaTriangulo(base,altura)
{
    return(base*altura)/2;
}

console.groupEnd();

//*******Funciones auxiliares para el circulo***********
console.group("Círculos");
function diametroCirculo(radio)
{
    return radio*2;
}
const PI=Math.PI;console.log("PI es: "+PI);
function perimetroCirculo(radio)
{
    const diametro=diametroCirculo(radio);
    return diametro*PI;
}
function areaCirculo(radio)
{
    return(radio*radio)*PI;
}
console.groupEnd();






//Interacción con el archivo HTML (los buttons)
//------------------Cuadrado-----------------------
function calcularPerimetroCuadrado()
{
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area);
}
//------------------Triangulo-----------------------
function calcularPerimetroTriangulo()
{
    let input=document.getElementById("InputTriangulo-1");
    let value1=parseInt(input.value);
    let input2=document.getElementById("InputTriangulo-2");
    let value2=parseInt(input2.value);
    let input3=document.getElementById("InputTriangulo-3");
    let value3=parseInt(input3.value);
    let perimetroT=perimetroTriangulo(value1,value2,value3);
    alert(perimetroT);
}

function calcularAreaTriangulo()
{

    let input3=document.getElementById("InputTriangulo-3");
    let value3=parseInt(input3.value);
    let input4=document.getElementById("InputTriangulo-3");
    let value4=parseInt(input4.value);
    let areaT=areaTriangulo(value3,value4);
    alert(areaT);
    console.log("El área del triángulo es: "+areaT+"cmˆ2");
}

//----------------Circulo--------------------------
function calcularDiametroCirculo()
{
    const input=document.getElementById("InputCirculo");
    const value=input.value;
    const diametro=diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo()
{
    const input=document.getElementById("InputCirculo");
    const value=input.value;
    const perimetroC=perimetroCirculo(value);
    alert(perimetroC);
}

function calcularAreaCirculo()
{
    const input=document.getElementById("InputCirculo");
    const value=input.value;
    const areaC=areaCirculo(value);
    alert(areaC);
}


