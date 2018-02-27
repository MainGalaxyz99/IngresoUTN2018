function Mostrar()
{
var numero;
var contDivisores = 0;

numero = parseInt(prompt("Ingrese Numero"));

for(var i = 1; i <= numero;i++)
{
    if(numero % i == 0 )
    {
        console.log(i);
        contDivisores++;
    }
}
console.log("Cantidad de divisores "+ contDivisores );
}//FIN DE LA FUNCIÓN