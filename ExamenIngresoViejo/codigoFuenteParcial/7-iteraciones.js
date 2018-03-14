//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var contVaronesMas6 = 0;
	var acumulador = 0;
	var notaMasBaja;

	for(var i = 0; i <= 6; i++ )
    {
	 nota = parseInt(prompt("Ingrese nota"))
	
	  while(nota <= 0)
	  {
       nota = parseInt(prompt("Error. Reingrese nota"));
	  }

	  sexo = prompt("Ingrese Sexo");
	  while(sexo != 'f' && sexo != 'm' )
	  {
		  sexo = prompt("Error. Reingrese el sexo correcto")
	  }
	   acumulador = acumulador + nota;

	   if(nota < notaMasBaja)
	   {
		   notaMasBaja = nota;
	   }
		 if(sexo = 'm' && nota >= 6)
		 {
			 contVaronesMas6++;
		 }
	}
	  promedio = acumulador / nota;

	  alert("El promedio de notas es "+ promedio + ",La nota mas baja es "+ notaMasBaja + "y la cantidad de varones con nota mayor o igual a 6 son "+ contVaronesMas6)
}
