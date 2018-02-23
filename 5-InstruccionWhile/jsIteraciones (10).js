function Mostrar()
{

	
	//declarar contadores y variables 
	var acumNegativos = 0;
    var acumPositivos = 0; 
	var contPositivos = 0;
	var contNegativos = 0;
	var contCeros = 0;
	var contNumPares = 0;
	var promedioPositivos;
	var promedioNegativos;	
	var diferencia;
	var numero;
    var seguir;

    do
    {
	 numero = parseInt(prompt("Ingrese numero"));
	
	 if( numero < 0 )
	 {
	 acumNegativos = acumNegativos + numero
	 contNegativos++;
	 }
	 else if( numero > 0 )
	 {
		 acumPositivos = acumPositivos + numero
		 contPositivos++;
	 }
	 else
	{
		contCeros++;
	}
	if(numero %2 == 0)
	{
		contNumPares++;
	}
	seguir = prompt("¿Desea continuar? : ")
	}while(seguir == "si");

	if(contPositivos != 0)
   {
	   promedioPositivos = acumPositivos/contPositivos;
   }
   if(contNegativos != 0)
{
	promedioNegativos = acumNegativos/contNegativos;
}

diferencia = acumPositivos - acumNegativos;

document.write("Suma de los negativos "+ acumNegativos + "<br/>");
document.write("Suma de los positivos "+ acumPositivos + "<br>");
document.write("cantidad de positvios "+ contNegativos + "<br>");
document.write("cantidad de negativos "+ contNegativos + "<br>");
document.write("contador de ceros "+ contCeros + "<br>" );
document.write("contador de pares "+ contNumPares + "<br>");
document.write("promedio de positivos "+ promedioPositivos + "<br>" );
document.write("promedio de negativos "+ promedioNegativos + "<br>" );
document.write("diferencia de positivos y negativos " + diferencia + "<br>"); 
}//FIN DE LA FUNCIÓN