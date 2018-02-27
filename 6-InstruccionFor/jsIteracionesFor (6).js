function Mostrar()
{

var numero;
var contPares=0;

numero = parseInt(prompt("Ingrese Numero"));

for(var i = 1; i<= numero;i++ )
{
if(i % 2 == 0)
{
    console.log(i);
    contPares++;
}

}
console.log("Cantidad de pares " +contPares);
}//FIN DE LA FUNCIÓN