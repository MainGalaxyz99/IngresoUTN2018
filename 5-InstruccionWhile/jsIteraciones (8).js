function Mostrar()
{
    var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta;

     do{
	  numero = parseInt(prompt("Ingrese numero"));
	  if(numero >= 0)
	  {
        positivo = positivo + numero;
	  }
	  else
      { 
		  negativo = negativo * numero;
		  contador ++;
	  }
	  respuesta = prompt("¿Desea continuar? si/no");
	 }while(respuesta == "si");

document.getElementById("suma").value=positivo;
if(contador == 0)
{
	negativo = 0;
}
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN