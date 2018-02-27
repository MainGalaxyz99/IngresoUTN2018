/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 + precio3;
    alert("La suma es " + suma);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var total;
    var promedio;

    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);
    total = precio1 + precio2 + precio3;
    promedio = total / 3;
    alert("El promedio es " + promedio);
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var total;
    var iva21;
    var precioFinal;

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioDos").value);
    total = precio1 + precio2 + precio3;
    iva21 = total * .21;
    precioFinal = total + iva21;
    
    alert("El precio final es "+ precioFinal)
}