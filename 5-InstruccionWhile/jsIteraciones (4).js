function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 1 y 10."));
	
	while (numero <1 || numero >10 )
	{
     numero = parseInt(prompt("El numero es incorrecto. Reingrese un numero entre 1 y 10"));
	}
	document.getElementById("Numero").value = numero
}//FIN DE LA FUNCIÓN