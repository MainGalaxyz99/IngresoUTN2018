function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota=Math.floor(Math.random()*10)+1;
	 
	if(nota>=9)
{
	alert( nota + " Excelente");

}	
	else if(nota>=4 && nota<9)
{
	alert( nota + " Aprobó");

}	
	else

	alert( nota + " Vamos, para la proxima se puede")
}
//FIN DE LA FUNCIÓN