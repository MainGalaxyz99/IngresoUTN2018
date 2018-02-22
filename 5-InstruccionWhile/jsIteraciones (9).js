function Mostrar()
{

	var contador=0;
	var max=0;
	var min=0;
	var numero;
	var respuesta;
	// declarar variables
	do{
		numero=parseInt(prompt("Ingrese un numero"));
	if(contador == 1)
	{
	min=numero;
	max=numero;
	}
	if(numero > max)
	{
	max = numero;	
	}
    if(numero < min )
    {
	min = numero;	
	}
	
	respuesta = prompt("¿Desea continuar? si/no");
	
	}while(respuesta == "si")

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN