/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambre;

largo = parseFloat(document.getElementById("Largo").value));
ancho = parseFloat(document.getElementById("Ancho").value));

perimetro = largo *2 +  ancho*2;

alambre = perimetro * 3

alert("La cantidad de alambre necesario es " + alambre + "metros");
}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;

    radio = parseFloat(document.getElementById("Radio").value);
    perimetro = Math.PI * 2 * radio;
    alambre = perimetro * 3;

    alert("La cantidad de alambre necesaria es " + alambre + "metros");
}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cal;
    var cemento;

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);

    superficie = largo * ancho;
    cal = superficie * 2;

    alert("Para un terreno de " + suprficie + "m2, se necesitan " + cal +" bolsas de cal" )
}