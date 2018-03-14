//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var iva;
    var importe;
    var importeFinal;

    importe = parseFloat(prompt("Ingrese importe"));
    iva = (importe * 21) / 100;
    importeFinal = importe + iva;

    alert("El importe final es " + importeFinal);
}

