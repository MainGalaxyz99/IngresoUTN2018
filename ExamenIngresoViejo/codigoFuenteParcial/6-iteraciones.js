//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importeVentas;
    var mayorVenta;
    var menorVenta;
    var mayorDia;
    var menorDia;
    var flag = 0
    for(var i = 1; i <= 7; i++)
    {
     venta = parseFloat(prompt("Ingrese venta"));
     while(venta <= 0)  
        {
          venta = parseFloat(prompt("Error. las ventas no pueden ser >= 0. Reingrese venta"));
        }
        if(venta > mayorVenta || flag == 0)
        {
            mayorVenta = venta;
            mayorDia = i;
            flag = 0
        }
        if(venta < menorVenta  || flag == 0)
        {
            menorVenta = venta;
            flag = 1;
        }
    }
    alert("La mayor venta es " + mayorVenta + "y se realizo en el " + mayorDia + " y menor venta es" + menorVenta + " en el dia " + menorDia);
    
}

