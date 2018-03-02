//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo = parseFloat(document.getElementById("largo").value);
    ancho = parseFloat(document.getElementById("ancho").value);
    perimetro = largo * 2 + ancho * 2;
    alambre = perimetro * 6;

    alert("La cantidad de alambre necesario es " + alambre + " metros");
}

